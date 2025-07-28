import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
const app = express();

import bookRoute from "./route/route.book.js"

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.mongoDB_URL

// Middleware
app.use(express.json());

//mongodb atlus 
mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ MongoDB connected successfully");

        // Start server after DB connection
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ DB connection error:", err.message);
    });

app.use("/book", bookRoute)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

