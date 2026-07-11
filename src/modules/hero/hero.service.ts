
import status from "http-status"
import { Profile } from "../../generated/prisma/client"
import { prisma } from "../../lib/prisma"
import { AppError } from "../../middleware/appError"
import { resourceUsage } from "node:process"




const createProfile = async (payload: Profile) => {
    const result = await prisma.profile.create({
        data: payload
    })

    if (!result) {
        throw new AppError(status.BAD_REQUEST, "Profile create failed")
    }

    return result
}

const updateProfile = async (payload: Partial<Profile>, id: string) => {

    const existingProfile = await prisma.profile.findUnique({
        where: { id },
    });

    if (!existingProfile) {
        throw new AppError(status.NOT_FOUND, "Profile not found");
    }
    const result = await prisma.profile.update({
        where: { id },
        data: {
            ...payload
        }
    })


    if (!result) {
        throw new AppError(status.BAD_REQUEST, "Profile update failed")
    }

    return {
        result,
        publicId: existingProfile.profileImageId
    }
}


const getProfile = async () => {
    const result = await prisma.profile.findFirst()
    if (!result) {
        throw new AppError(status.BAD_REQUEST, "Profile get failed")
    }

    return result
}

export const heroService = {
    createProfile,
    getProfile,
    updateProfile
}