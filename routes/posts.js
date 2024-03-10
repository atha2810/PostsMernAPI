const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");
const verify = require("../varifyToken");

//gets back ALL the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submits a post
router.post("/", verify, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post
router.get("/:postId", async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a posts
router.delete("/:postId", verify, async (req, res) => {
  try {
    // Post.remove(req.params.postId); remove is removed xD
    const deletedPost = await Post.deleteOne({ _id: req.params.postId }); //takes obj,
    res.json(deletedPost);
  } catch (error) {
    res.json(error);
  }
});
// better code or delete
// router.delete("/:postId", async (req, res) => {
//   try {
//     const deletedPost = await Post.deleteOne({ _id: req.params.postId });
//     if (deletedPost.deletedCount === 0) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.json({ message: "Post deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

//update posts
router.patch("/:postId", verify, async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, content: req.body.content } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
