// Import Section
import express from "express";
import "dotenv/config";
import "src/config/database.config";
import "src/config/nodemailer.config"
import router from "src/routes/index.routes";
import { PORT } from "src/utils/variables.util";

// Configuration Section
const app = express();

// Middleware Section
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routing and Listening the Express Server
app.use("/", router);
app.listen(PORT, () => {
    console.log(`SUCCESS - Server is running at http://localhost:${PORT}`);
});