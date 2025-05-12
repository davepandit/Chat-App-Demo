import express from "express";
import {
  registerUser,
  authUser,
  allUsers,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/allusers", protect, allUsers);

export default router;
