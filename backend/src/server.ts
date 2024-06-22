// Import Section
import express from "express";
import "dotenv/config";
import "./config/database.config";

// Configuration Section
const app = express();

// Listening the Express Server
app.listen(8080, () => {
    console.log("SUCCESS - Server is running at http://localhost:8080");
})