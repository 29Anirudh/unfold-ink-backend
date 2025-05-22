const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Multer config for profile photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profilePics'); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, req.user.userId + '-' + Date.now() + ext);
  }
});

const upload = multer({ storage });

// PUT /api/auth/profile - update user profile + photo
router.put('/profile', auth, upload.single('photo'), async (req, res) => {
  try {
    const updateData = {
      fullName: req.body.fullName,
      bio: req.body.bio,
    };

    if (req.file) {
      updateData.photo = `/uploads/profilePics/${req.file.filename}`;
    }

    // Update user in DB
    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password'); // exclude password in response

    res.json({ user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating profile' });
  }
});

module.exports = router;
