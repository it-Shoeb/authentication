import express from "express";
const route = express.Router();

import { body, validationResult } from "express-validator";

import {
  loginController,
  registerController,
  logoutController,
} from "../controllers/authenticaitonConstroller.js";

route.post(
  "/login",
//   body("email")
//     .notEmpty()
//     .withMessage("email required")
//     .isEmail()
//     .withMessage("invalid email"),
//   body("password")
//     .notEmpty()
//     .withMessage("password required")
//     .isLength({ min: 8 })
//     .withMessage("password must above 8 characters")
//     .matches(/[0-9]/)
//     .withMessage("password must includes number")
//     .matches(/[A-Z]/)
//     .withMessage("password must includes Uppercase")
//     .matches(/[a-z]/)
//     .withMessage("password must includes Lowercase"),
//   (req, res) => {
    // const error = validationResult(req.body);
    // if (!error.isEmpty) {
    //   return res.status(400).json({ success: false, messsage: error.array() });
    // }

    loginController
    
//   }
);
route.post(
  "/register",
  body("username")
    .notEmpty()
    .withMessage("username required")
    .isLength({ min: 4, max: 8 })
    .matches(/[0-9]/)
    .withMessage("username must includes number")
    .matches(/[A-Z]/)
    .withMessage("username must includes Uppercase")
    .matches(/[a-z]/)
    .withMessage("username must includes Lowercase"),
  body("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("invalid email"),
  body("password")
    .notEmpty()
    .withMessage("password required")
    .isLength({ min: 8 })
    .withMessage("password must above 8 characters")
    .matches(/[0-9]/)
    .withMessage("password must includes number")
    .matches(/[A-Z]/)
    .withMessage("password must includes Uppercase")
    .matches(/[a-z]/)
    .withMessage("password must includes Lowercase"),
  (req, res) => {
    const error = validationResult(req.body);
    if (!error.isEmpty()) {
      return res.status(400).json({ success: false, messsage: error.array() });
    }

    registerController(req, res);
  }
);
route.post("/logout", logoutController);

export default route;
