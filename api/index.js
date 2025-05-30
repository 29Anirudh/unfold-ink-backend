const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const serverless = require("serverless-http");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Optional: for serving static files (not persistent in Vercel)
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Routes
const authRoutes = require("../routes/authRoutes");
const blogRoutes = require("../routes/blogRoutes");
const userRoutes = require("../routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

// MongoDB connection (avoid reconnecting on every request)
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("✅ MongoDB connected");
}

// Main serverless handler
const handler = async (req, res) => {
  await connectToDatabase();
  const expressHandler = serverless(app);
  return expressHandler(req, res);
};

module.exports = handler;
