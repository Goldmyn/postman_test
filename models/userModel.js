import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    age: {
      type: Number,
      min: 18,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    hobbies: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Students = mongoose.model("students", userSchema);

export default Students;
