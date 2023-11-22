
import express from "express";

import { addBebidas, deleteBebidas, getBebidas, updateBebidas } from "../controllers/beb.js";
const router = express.Router()
router.get("/", getBebidas )

router.post("/", addBebidas)

router.put("/:id", updateBebidas)

router.delete("/:id", deleteBebidas)


export default router