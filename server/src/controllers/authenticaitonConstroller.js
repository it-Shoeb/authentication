import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/nodemailer.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);

    const userExist = await userModel.findOne({ email });

    if (!userExist) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    const isMatched = await bcrypt.compare(password, userExist.password);

    if (!isMatched) {
      return res
        .status(209)
        .json({ success: false, message: "password is invalid" });
    }

    const token = jwt.sign(
      { email, _id: userExist._id },
      process.env.JWT_SECRET
    );

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 3600000,
        path: "/",
      })
      .json({ success: true, message: "User Login Successfull" });
  } catch (error) {
    console.error(error);
  }
};

export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      return res
        .status(404)
        .json({ success: false, message: "Already User Exist" });
    }
    console.log(userExist);

    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(password, salt, async (error, hash) => {
        await userModel.create({ username, email, password: hash });
      });
    });

    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(password, salt);
    // return console.log(hash);

    res
      .status(200)
      .json({ success: true, message: "User Register Successfull" });
  } catch (error) {
    console.error(error);
  }
};

export const logoutController = async (req, res) => {
  try {
    res.clearCookie("token");
    res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await userModel.findOne({ email });

    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // const info = await transporter.sendMail({
    //   from: `marjorie.abbott@ethereal.email`,
    //   to: email,
    //   subject: "Hello ✔",
    //   text: "Hello world?", // plain‑text body
    //   html: "<b>Hello world?</b>", // HTML body
    // });

    res.status(200).json({ success: true, user: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};
