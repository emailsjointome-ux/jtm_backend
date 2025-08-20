"use strict";
import express from "express";
import { emailController } from "../controllers/emailController.js";
import { userController } from "../controllers/userController.js";
const router = express.Router();

// Users route
router.get("/users", userController.getUsers);

// Send email route
router.post("/send-email", emailController.sendEmail);

export default router;
