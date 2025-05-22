import express from "express";
import mongodbConnect from "./config/mongodbConnect.js";
const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
dotenv.config();
mongodbConnect();

import authenticate from "./utils/authenticate.js";
import authenticationRoute from "./routes/authenticationRoute.js";
import homeRoute from "./routes/homeRoute.js";

app.use("/authentication", authenticationRoute);
app.use("/home", authenticate, homeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
