import { Router } from "express";
import { contactController } from "./contact.controller";

const router = Router()

router.post("/", contactController.sendMessage);
router.get("/", contactController.getAllMessages);
router.get("/:id", contactController.getSingleMessage);
router.delete("/:id", contactController.deleteMessage);

export const contactRouter = router