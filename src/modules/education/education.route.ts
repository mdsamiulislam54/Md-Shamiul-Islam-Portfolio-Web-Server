import { Router } from "express";
import { educationController } from "./education.controller";

const router = Router()

router.post("/", educationController.createEducation)
router.get("/", educationController.getEducation)
router.patch("/", educationController.createEducation)
router.delete("/", educationController.deleteEducation)

//course

router.post("/course", educationController.createCourse)
router.get("/course", educationController.getCourse)
router.patch("/course", educationController.updateCourse)
router.delete("/course", educationController.deleteCourse)


export const educationRoute = router;