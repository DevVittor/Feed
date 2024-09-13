import mongoose from "mongoose";

const freelaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
  },
  about: {
    type: String,
  },
  level: {
    type: String,
    enum: ["beginner", "professional"],
    default: "beginner",
  },
  blocked: {
    type: Boolean,
    ref: "ref",
  },
});

const freelaModel = mongoose.model("freelas", freelaSchema);

export default freelaModel;
