const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./Configs/dbConnect");
const courseRoutes = require("./Routes/courseRoute");
const registerRoutes = require("./Routes/registerRoute");

const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
app.use(morgan("dev")); // Logging middleware

app.use("/api/courses", courseRoutes);
app.use("/api/register", registerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
