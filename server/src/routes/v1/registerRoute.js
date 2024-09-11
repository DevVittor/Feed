import { Router } from "express";
const router = Router();

import { registerNewUser } from "../../functions/Register.js";

router.post("/", registerNewUser);

export default router;
