import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      maxLength: 80,
      required: true,
    },
    details: {
      type: String,
      maxLength: 150,
      required: true,
    },
    price: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
    },
    level: {
      type: String,
      enum: ["any", "beginner", "professional"],
      default: "any",
    },
    skills: {
      type: [String],
      maxLength: 5,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    proposalId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "proposals",
      },
    ],
  },
  { timestamps: true }
);

const postModel = mongoose.model("posts", postSchema);

export default postModel;
