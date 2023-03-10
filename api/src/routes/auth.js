import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .post("/logout", logout);

export default router;
