// * routes for authentication

import express from "express";
import {
  createSessionHandler,
  refreshAccessTokenHandler,
} from "../controller/auth.controller";
import { validateResource } from "../middleware";
import { createSessionSchema } from "../schema";

const router = express.Router();

// creating session
router.post(
  "/api/sessions",
  validateResource(createSessionSchema),
  createSessionHandler
);

// refreshing access token
router.post("/api/sessions/refresh", refreshAccessTokenHandler);

export default router;
