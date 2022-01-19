// * all the routes available

import express from "express";
import user from "./user.routes";
import auth from "./auth.routes";

const router = express.Router();

// route for ping
router.get("/healthcheck", (_, res) => res.sendStatus(200));

// routes creating and updating user data
router.use(user);

// routes for authentication
router.use(auth);

export default router;
