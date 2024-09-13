import { Router } from "express";
const router = Router();
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });
import { registerFreela } from "../../functions/Freela.js";

router.post("/", upload.single("avatar"), registerFreela);

export default router; 
