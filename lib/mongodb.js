import mongoose from "mongoose";

const connectionStr= process.env.CONNECTION_STRING
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionStr);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
