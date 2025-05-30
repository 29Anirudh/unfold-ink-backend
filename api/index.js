const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const serverless = require("serverless-http");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static file serving (note: this may not work the same way in Vercel)
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Routes
const authRoutes = require("../routes/authRoutes");
const blogRoutes = require("../routes/blogRoutes");
const userRoutes = require('../routes/userRoutes');

app.use('/api/users', userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// Connect to MongoDB (ensure this runs once)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Export the serverless handler
module.exports = app;
module.exports.handler = serverless(app);