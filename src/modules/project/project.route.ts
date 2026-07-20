import { Router } from "express";

import { multerUpload } from "../../config/multer.config";
import { projectController } from "./project.controller";



const router = Router()

router.post("/", multerUpload.single("thumbnail"), projectController.createProject);
router.patch("/:id", multerUpload.single("thumbnail"), projectController.updateProject);
router.get("/", projectController.getProjectAll)
router.get("/:id", projectController.getProjectById)
router.delete("/:id", projectController.deleteProjectById)

export const projectRouter = router