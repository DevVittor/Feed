import { Router } from "express";
const router = Router();

import { loginUser } from "../../functions/Login.js";

router.post("/", loginUser);

export default router;
