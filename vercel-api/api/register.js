const connectDB = require("../lib/dbConnect");
const Registration = require("../Schema/registrationSchema");
const registrationValidation = require("../Validation/registrationValidation");

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
