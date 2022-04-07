const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
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
});

// const autoPopulateauthor = (next) => {
//   postSchema.populate("author");
//   next();
// };

// postSchema.pre("findOne", autoPopulateauthor).pre("find", autoPopulateauthor);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
