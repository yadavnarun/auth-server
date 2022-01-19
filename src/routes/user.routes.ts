// * routes creating and updating user data

import express from "express";
import {
  createUserHandler,
  forgotPasswordHandler,
  getCurrentUserHandler,
  resetPasswordHandler,
  verifyUserHandler,
} from "../controller/user.controller";
import { requireUser, validateResource } from "../middleware";
import {
  createUserSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyUserSchema,
} from "../schema";

const router = express.Router();

// creating user
router.post(
  "/api/users",
  validateResource(createUserSchema),
  createUserHandler
);

// verifying user
router.post(
  "/api/users/verify/:id/:verificationCode",
  validateResource(verifyUserSchema),
  verifyUserHandler
);

// forgot password
router.post(
  "/api/users/forgotpassword",
  validateResource(forgotPasswordSchema),
  forgotPasswordHandler
);

// reset password
router.post(
  "/api/users/resetpassword/:id/:passwordResetCode",
  validateResource(resetPasswordSchema),
  resetPasswordHandler
);

// getting user info
router.get("/api/users/me", requireUser, getCurrentUserHandler);

export default router;
