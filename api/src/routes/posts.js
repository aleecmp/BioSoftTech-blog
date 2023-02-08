import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router
  .get("/", getPosts)
  .get("/:id", getPost)
  .post("/", addPost)
  .delete("/:id", deletePost)
  .put("/:id", updatePost);

export default router;
