const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const serverless = require("serverless-http");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB caching
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}
connectDB(); // Call this once

// Routes
const authRoutes = require("../routes/authRoutes");
const blogRoutes = require("../routes/blogRoutes");
const userRoutes = require("../routes/userRoutes");

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// Serverless export
module.exports = app;
module.exports.handler = serverless(app);
