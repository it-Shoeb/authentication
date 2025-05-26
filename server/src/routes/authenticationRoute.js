import express from "express";
const route = express.Router();

import { body, validationResult } from "express-validator";

import {
  loginController,
  registerController,
  logoutController,
  sendOTP,
} from "../controllers/authenticaitonConstroller.js";
import authenticate from "../utils/authenticate.js";
import userModel from "../models/userModel.js";

route.post(
  "/login",
  body("email")
    .notEmpty()
    .withMessage("email required")
    .trim()
    .isEmail()
    .withMessage("invalid email"),
  body("password")
    .notEmpty()
    .withMessage("password required")
    .isLength({ min: 8 })
    .withMessage("password must above 8 characters")
    .matches(/[0-9]/)
    .withMessage("password must contain numbers")
    .matches(/[a-z]/)
    .withMessage("password must contain lowerletters")
    .matches(/[A-Z]/)
    .withMessage("password must contain uppperletters"),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    loginController(req, res);
  }
);

route.post(
  "/register",
  body("username").notEmpty().withMessage("username required").trim(),
  body("email")
    .notEmpty()
    .withMessage("email required")
    .trim()
    .isEmail()
    .withMessage("invalid email"),
  body("password")
    .notEmpty()
    .withMessage("password required")
    .isLength({ min: 8 })
    .withMessage("password must above 8 characters")
    .matches(/[0-9]/)
    .withMessage("password must contain numbers")
    .matches(/[a-z]/)
    .withMessage("password must contain lowerletters")
    .matches(/[A-Z]/)
    .withMessage("password must contain uppperletters"),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    registerController(req, res);
  }
);

route.post("/logout", logoutController);

route.post("/send-otp", sendOTP);

route.get("/authenticate", authenticate, async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    // if (!user) {
    //   return res.status(404).json({ success: false, user: null });
    // }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
});

export default route;
