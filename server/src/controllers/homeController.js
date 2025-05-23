import userModel from "../models/userModel.js";

const getHome = async (req, res) => {
  try {
    const users = await userModel.find();
    res
      .status(200)
      .json({ success: true, message: "user fethec", data: users });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching User homeController",
    });
  }
};

export default getHome;
