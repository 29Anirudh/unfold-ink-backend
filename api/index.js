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

// Static assets (optional for local, but won't work in Vercel)
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Routes
const authRoutes = require("../routes/authRoutes");
const blogRoutes = require("../routes/blogRoutes");
const userRoutes = require("../routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

// Ensure DB connection only runs once
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
connectToDatabase();

// Export handler for Vercel
module.exports = serverless(app);
