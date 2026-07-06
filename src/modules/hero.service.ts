
import status from "http-status"
import { Profile } from "../generated/prisma/client"
import { prisma } from "../lib/prisma"
import { AppError } from "../middleware/appError"



const createProfile = async (payload: Profile) => {
    const result=  await prisma.profile.create({
        data: payload
    })

    if (!result){
         throw new  AppError(status.BAD_REQUEST,"Profile create failed")
    }
  
    return result
}


export const heroService = {
    createProfile
}