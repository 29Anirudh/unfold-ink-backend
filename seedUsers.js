// seedUsers.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "your-mongodb-uri-here";

const dummyUsers = [
  {
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "password123", // You might want to hash this in a real app
    bio: "Tech enthusiast and blogger.",
    photo: "alice.jpg",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    password: "password123",
    bio: "Loves writing about politics and society.",
    photo: "bob.jpg",
  },
  {
    name: "Carol Lee",
    email: "carol.lee@example.com",
    password: "password123",
    bio: "Culture and movies expert.",
    photo: "carol.jpg",
  },
  {
    name: "David Kim",
    email: "david.kim@example.com",
    password: "password123",
    bio: "Sports fanatic and cricket analyst.",
    photo: "david.jpg",
  },
];

async function seedUsers() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing users if you want to start fresh
    await User.deleteMany({});
    console.log("Cleared existing users");

    // Insert dummy users
    const users = await User.insertMany(dummyUsers);
    console.log(`Inserted ${users.length} users`);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding users:", error);
  }
}

seedUsers();
