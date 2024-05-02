import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log("db connect");
  } catch (error) {
    console.error();
  }
};
