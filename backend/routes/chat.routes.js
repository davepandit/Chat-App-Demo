import express from "express";
const router = express.Router();
import { protect } from "../middlewares/authMiddleware.js";
import {
  accessChat,
  fetchChats,
  createGroupChat,
} from "../controllers/chat.controller.js";

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
// router.route("/rename").put(protect, renameGroup);
// router.route("/groupremove").put(protect, removeFromGroup);
// router.route("/groupadd").put(protect, addToGroup);

export default router;
