// Import Section
import express from "express";
import "dotenv/config";
import "src/config/database.config";
import { PORT } from "src/utils/variables.util";

// Configuration Section
const app = express();

// Listening the Express Server
app.listen(PORT, () => {
    console.log(`SUCCESS - Server is running at http://localhost:${PORT}`);
});