const express = require("express");
const router = express.Router();

const { 
  createPost, 
  getPosts, 
  getPostById, 
  updatePost, 
  deletePost 
} = require("../controllers/postController");

const authMiddleware = require("../middlewares/authMiddleware");

// create post (protected)
router.post("/", authMiddleware, createPost);

// get all posts
router.get("/", getPosts);

// get single post
router.get("/:id", getPostById);

//  update post (protected)
router.put("/:id", authMiddleware, updatePost);

// delete post (protected)
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;