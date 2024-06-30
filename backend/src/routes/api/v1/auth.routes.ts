// Import Section
import express from "express";

import { signUp } from "src/controllers/api/v1/auth.controller";
import { schemaValidator } from "src/middlewares/global.middleware";
import { signUpValidator } from "src/validators/auth.validator";

// Configuration Section
const router = express.Router();

// Routes Section - Unauthenticated
router.route("/signup").post(schemaValidator(signUpValidator), signUp);

// Export Section
export default router;