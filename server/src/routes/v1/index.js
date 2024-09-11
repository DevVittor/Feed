import { Router } from "express";

import registerRoute from "./registerRoute.js";
import loginRoute from "./loginRoute.js";
import postRoute from "./postRoute.js";
import proposalRoute from "./proposalRoute.js";

const router = Router();

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/post", postRoute);
router.use("/proposal", proposalRoute);

export default router;