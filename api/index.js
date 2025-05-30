const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const serverless = require("serverless-http");
const path = require("path");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Quick route for root to confirm server is running
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Vercel");
});

// Quick handler for favicon.ico to avoid timeout errors
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Static files serving (optional, only if you have uploads locally)
// app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Import your route handlers
const authRoutes = require("../routes/authRoutes");
const blogRoutes = require("../routes/blogRoutes");
const userRoutes = require("../routes/userRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

// MongoDB connection setup (connect once globally)
let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // Optional: useUnifiedTopology and useNewUrlParser are default in recent mongoose
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Connect before serverless handler runs
connectDB();

// Export app and serverless handler for Vercel
module.exports = app;
module.exports.handler = serverless(app);
