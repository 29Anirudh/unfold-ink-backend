const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const auth = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// POST create blog (with featured image)
router.post("/", auth, upload.single("featuredImage"), async (req, res) => {
  const { title, category, tags, content, status } = req.body;
  if (!title || !content || !category) {
    return res.status(400).json({ message: "Title, content, and category are required." });
  }
  try {
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : null;
    const blog = new Blog({
      title,
      category,
      tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      content,
      status,
      featuredImage,
      author: req.user.userId,
    });
    await blog.save();
    res.status(201).json({ message: "Blog created", blog });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET published blogs grouped by categories
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "published" }).sort({ createdAt: -1 });
    const categories = ["Politics", "Movies", "Cultural", "Economics", "Cricket"];
    const groupedBlogs = categories.map((cat) =>
      blogs.filter((blog) => blog.category === cat)
    );
    res.json(groupedBlogs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

