import { Router } from "express";
import { heroRouter } from "../modules/hero.route";


const router = Router()

router.use("/hero", heroRouter)



export const apiRoutes = router