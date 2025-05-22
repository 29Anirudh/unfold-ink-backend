const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const User = require('../models/User');

const storage = multer.memoryStorage(); // <-- Use memory storage to keep file in RAM
const upload = multer({ storage });

// PUT /api/auth/profile - update profile + photo stored in DB as base64
router.put('/profile', auth, upload.single('photo'), async (req, res) => {
  try {
    const updateData = {
      fullName: req.body.fullName,
      bio: req.body.bio,
    };

    if (req.file) {
      // Convert buffer to base64 string with mime-type prefix
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
      updateData.photo = base64Image;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    res.json({ user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating profile' });
  }
});

module.exports = router;
