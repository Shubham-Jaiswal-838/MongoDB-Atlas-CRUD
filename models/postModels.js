const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a product name"],
      default: "xyz",
    },

    title: {
      type: String,
      required: [true, "please enter title name"],
    },
    url: {
      type: String,
      required: [true, "please enter url"],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("postUser", postSchema);

module.exports = Post