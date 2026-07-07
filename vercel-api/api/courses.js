const connectDB = require("../lib/dbConnect");
const Course = require("../Schema/courseSchema");
const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, "1 m"),
});

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async (req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] || "unknown").split(",")[0].trim();
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return res.status(429).json({ message: "Too many requests" });
  }

  try {
    await connectDB();
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
