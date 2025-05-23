const mongoose = require('mongoose');
const User = require('./models/User');

const uri = 'mongodb+srv://n200374:Anirudh.9493@unfold-ink.k8ptnwa.mongodb.net/?retryWrites=true&w=majority&appName=unfold-ink';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function deleteUser() {
  try {
    const result = await User.findByIdAndDelete("682ee2a05f433bd422602f4b");
    if (result) {
      console.log("✅ User deleted:", result);
    } else {
      console.log("⚠️ User not found.");
    }
  } catch (err) {
    console.error("❌ Error deleting user:", err);
  } finally {
    await mongoose.disconnect();
  }
}

deleteUser();
