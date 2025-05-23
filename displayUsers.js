const mongoose = require('mongoose');
const User = require('./models/User');

const uri = 'mongodb+srv://n200374:Anirudh.9493@unfold-ink.k8ptnwa.mongodb.net/?retryWrites=true&w=majority&appName=unfold-ink';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function showUsers() {
  try {
    const users = await User.find();
    console.log(users);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

showUsers();