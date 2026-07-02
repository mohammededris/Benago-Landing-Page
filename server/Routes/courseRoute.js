const express = require("express");
const Course = require("../Schema/courseSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    if (!courses) {
      return res.status(404).json({ message: "No courses found" });
    }
    res.json(courses);
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});


module.exports = router;
