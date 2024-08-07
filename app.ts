import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import todoRoutes from "./routes/todoRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

app.use("/api/todo", todoRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(String(MONGO_DB_URI))
  .then(() => {
    app.listen(PORT);
    console.log("app is listening...");
  })
  .catch((err) => console.log(err));
