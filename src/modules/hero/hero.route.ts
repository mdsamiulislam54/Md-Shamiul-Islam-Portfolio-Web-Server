import { Router } from "express";

import { heroController } from "./hero.controller";
import { multerUpload } from "../../config/multer.config";



const router = Router()

router.post("/",  multerUpload.single("file"),  heroController.createProfile);
router.patch("/:id",  multerUpload.single("file"),  heroController.updateProfile);
router.get("/",  heroController.getProfile)

export const heroRouter = router