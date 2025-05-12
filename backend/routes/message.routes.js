import express from "express";
const router = express.Router();
import { protect } from "../middlewares/authMiddleware.js";
import {
  allMessages,
  sendMessage,
} from "../controllers/message.controllers.js";

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

export default router;
