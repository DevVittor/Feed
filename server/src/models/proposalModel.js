import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    proposal: {
      type: String,
      maxLength: 150,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    term: {
      type: Number,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const proposalModel = mongoose.model("proposals", proposalSchema);

export default proposalModel;
