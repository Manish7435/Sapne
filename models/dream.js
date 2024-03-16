import mongoose, { Schema, models } from "mongoose";

const dreamSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    dream: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Dream = models.Dream || mongoose.model("Dream", dreamSchema);
export default Dream;
