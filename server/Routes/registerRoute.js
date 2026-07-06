const express = require("express");
const Registration = require("../Schema/registrationSchema");
const registrationValidation = require("../Validation/registrationValidation");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { error } = registrationValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const {
      courseId,
      name,
      email,
      courseTitle,
      phoneNumber,
      university,
      sendConfirmationEmail,
      note,
    } = req.body;
    const registration = new Registration({
      courseId,
      name,
      email,
      courseTitle,
      phoneNumber,
      university,
      sendConfirmationEmail,
      note,
    });
    await registration.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
