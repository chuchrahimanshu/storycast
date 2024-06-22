// Import Section
import express from "express";
import { signUp } from "src/controllers/api/v1/auth.controller";

// Configuration Section
const router = express.Router();

// Routes Section - Unauthenticated
router.route("/signup").post(signUp);

// Export Section
export default router;