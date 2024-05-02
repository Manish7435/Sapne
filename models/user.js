import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {type: String},
    forgetPasswordToken: {type: String},
    forgetPasswordTokenExpiry: {type:Date},
    verifyToken: {type: String},
    verifyTokenExpiry: {type:Date}
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
