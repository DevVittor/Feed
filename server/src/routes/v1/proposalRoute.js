import { Router } from "express";
const router = Router();

import { createProposal } from "../../functions/Proposal.js";

router.post("/", createProposal);

export default router;
