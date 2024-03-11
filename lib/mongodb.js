import mongoose from "mongoose";

const {USER_NAME,PASSWORD,DB_NAME}= process.env

const connectionStr = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.yz9mo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionStr);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
