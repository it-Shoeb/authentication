import mongoose from "mongoose";

const mongodbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
  }
};

export default mongodbConnect;
