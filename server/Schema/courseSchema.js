const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
  },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  icon: { type: String, required: true },
  imageUrl: { type: String },
});
module.exports = mongoose.model("Course", courseSchema);
