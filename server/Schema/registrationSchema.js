const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  sendConfirmationEmail: {
    type: Boolean,
    default: false,
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
