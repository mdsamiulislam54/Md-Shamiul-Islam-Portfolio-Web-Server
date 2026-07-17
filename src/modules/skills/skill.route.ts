import { Router } from "express";
import { SkillController } from "./skill.controller";

const router = Router();

router.post("/", SkillController.createSkill);

router.get("/", SkillController.getAllSkills);

router.get("/published", SkillController.getPublishedSkills);

router.get("/category/:category", SkillController.getSkillsByCategory);

router.get("/:id", SkillController.getSingleSkill);

router.patch("/:id", SkillController.updateSkill);

router.delete("/:id", SkillController.deleteSkill);

export const SkillRoutes = router;