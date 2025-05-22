import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "token not provided" });
  }

  const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

  if (!verifyToken) {
    return res
      .status(400)
      .json({ success: false, message: "token invalid or expires" });
  }

  req.user = verifyToken;
  next();
};

export default authenticate;
