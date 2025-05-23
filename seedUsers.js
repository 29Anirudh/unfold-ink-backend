const mongoose = require('mongoose');
const User = require('./models/User');

const uri = 'mongodb+srv://n200374:Anirudh.9493@unfold-ink.k8ptnwa.mongodb.net/?retryWrites=true&w=majority&appName=unfold-ink';

const dummyUsers = [
  {
    fullName: "Alice Johnson",
    email: "alice@example.com",
    password: "hashedpassword1",
    photo: null,
    bio: "Developer and writer.",
  },
  {
    fullName: "Bob Smith",
    email: "bob@example.com",
    password: "hashedpassword2",
    photo: null,
    bio: "Love blogging about tech.",
  },
  {
    fullName: "Charlie Brown",
    email: "charlie@example.com",
    password: "hashedpassword3",
    photo: null,
    bio: "Full stack enthusiast.",
  },
  
];

async function seedUsers() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    for (const userData of dummyUsers) {
      // Check if user already exists by email
      const existingUser = await User.findOne({ email: userData.email });
      if (existingUser) {
        console.log(`User with email ${userData.email} already exists. Skipping...`);
        continue; // Skip to next user
      }

      // Insert new user
      const user = new User(userData);
      await user.save();
      console.log(`User ${user.fullName} added.`);
    }

    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding users:", err);
  }
}

seedUsers();
