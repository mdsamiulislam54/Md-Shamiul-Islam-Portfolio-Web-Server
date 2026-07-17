import { Router } from "express";
import { heroRouter } from "../modules/hero/hero.route";
import { projectRouter } from "../modules/project/project.route";
import { educationRoute } from "../modules/education/education.route";
import { aboutRoute } from "../modules/about/about.route";
import { SkillRoutes } from "../modules/skills/skill.route";
import { contactRouter } from "../modules/contact/contact.route";
import { dashboardRoutes } from "../modules/dashboard/dashboard.route";



const router = Router()

router.use("/hero", heroRouter)
router.use("/project", projectRouter)
router.use("/education", educationRoute)
router.use("/about", aboutRoute)
router.use("/skill", SkillRoutes)
router.use("/contact", contactRouter)
router.use("/dashboard", dashboardRoutes)



export const apiRoutes = router