import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true, index: true },
    price: { type: Number, required: true, min: 0 },
    duration: { type: String },
    thumbnail: { type: String } // base64 or URL
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);