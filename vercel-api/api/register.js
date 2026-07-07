const connectDB = require("../lib/dbConnect");
const Registration = require("../Schema/registrationSchema");
const registrationValidation = require("../Validation/registrationValidation");
const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "15 m"),
});

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async (req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] || "unknown").split(",")[0].trim();
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return res.status(429).json({ message: "Too many requests" });
  }

  try {
    await connectDB();

    const { error } = registrationValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const registration = new Registration(req.body);
    await registration.save();

    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
