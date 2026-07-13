import { Router } from "express";
import { aboutController } from "./about.controller";

const router = Router()
router.get("/", aboutController.getAbout);
router.post("/", aboutController.createAbout);
router.patch("/:id", aboutController.aboutUpdate)

export const aboutRoute = router;