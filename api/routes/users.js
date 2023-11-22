import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { addBebidas, deleteBebidas, getBebidas, updateBebidas } from "../controllers/beb.js";

const router = express.Router()


router.get("/bebidas", getBebidas )

router.post("/bebidas", addBebidas)

router.put("/bebidas/:id", updateBebidas)

router.delete("/bebidas/:id", deleteBebidas)


router.get("/", getUsers )

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)





export default router