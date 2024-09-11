import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
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
    role: {
      type: String,
      enum: ["user", "author", "freela", "admin"],
      default: "user",
    },
    posts: {
      type: Number,
    },
    proposalId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "proposals",
      },
    ],
    proposal: {
      type: Number,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
