import { Router } from "express";
import { heroRouter } from "../modules/hero/hero.route";
import { projectRouter } from "../modules/project/project.route";
import { educationRoute } from "../modules/education/education.route";
import { aboutRoute } from "../modules/about/about.route";



const router = Router()

router.use("/hero", heroRouter)
router.use("/project", projectRouter)
router.use("/education", educationRoute)
router.use("/about", aboutRoute)



export const apiRoutes = router