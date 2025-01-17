import { Router } from "express";
const router = Router();

import {
  searchPost,
  createPost,
  deletePost,
  listPost,
  detailsPost,
} from "../../functions/Post.js";
import { validationToken } from "../../utils/validationToken.js";

router.get("/search", searchPost);
router.get("/list", listPost);
router.get("/details", detailsPost);
router.post("/", validationToken, createPost);
router.delete("/delete", deletePost);

export default router;
