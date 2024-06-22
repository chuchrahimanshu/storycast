// Import Section
import express from "express";

// Configuration Section
const app = express();

// Listening the Express Server
app.listen(8080, () => {
    console.log("SUCCESS - Server is running at http://localhost:8080");
})