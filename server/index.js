const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const connectDB = require("./Configs/dbConnect");
const courseRoutes = require("./Routes/courseRoute");
const registerRoutes = require("./Routes/registerRoute");

const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev")); // Logging middleware

app.use("/api/courses", courseRoutes);
app.use("/api/register", registerRoutes);

app.get("/api/health", (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.status(200).json({
      status: "OK",
      message: "Server is running and connected to MongoDB",
    });
  } else {
    res.status(500).json({
      status: "Error",
      message: "Server is running but not connected to MongoDB",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
