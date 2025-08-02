import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import bookRoute from "./route/route.book.js";
import userRoute from "./route/route.user.js";

dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.mongoDB_URL;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/book", bookRoute);
app.use("/users", userRoute);

// ✅ DB Connect + Server Start
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
  });
