import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import authRouter from "./auth/authRoute";

config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use("/uploads", express.static("./public/data/uploads/resource"));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Faculty Appraisal Backend - Devloped By hack geniuses",
  });
});

app.use("/api/v1/auth", authRouter);
app.use(globalErrorHandler);

export default app;
