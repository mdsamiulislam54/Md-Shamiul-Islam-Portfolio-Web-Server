import status from "http-status"
import { About } from "../../generated/prisma/client"
import { prisma } from "../../lib/prisma"
import { AppError } from "../../middleware/appError"

const createAbout = async (payload: About) => {
    return await prisma.about.create({ data: payload })
}

const getAbout = async () => {
    return await prisma.about.findFirst()
}

const updateAbout = async (id: string, payload: Partial<About>) => {
    const existingAbout = await prisma.about.findFirst({ where: { id } });

    if (!existingAbout) throw new AppError(status.BAD_REQUEST, "Not found about")
    return await prisma.about.update({
        where: { id },
        data: { ...payload }
    })
}

export const aboutService = {
    createAbout,
    updateAbout,
    getAbout
}