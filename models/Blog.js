const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Politics", "Movies", "Cultural", "Economics", "Cricket"],
      required: true,
    },
    tags: [String],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    featuredImage: {
      type: String,
      required: true, // because you want to display it on the home page
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
