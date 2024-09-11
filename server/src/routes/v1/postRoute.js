import { Router } from "express";
const router = Router();

import { createPost } from "../../functions/Post.js";

router.post("/", createPost);

export default router;
