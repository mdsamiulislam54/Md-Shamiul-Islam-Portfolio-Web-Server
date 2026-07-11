import status from "http-status"
import { Course, Education } from "../../generated/prisma/client"
import { prisma } from "../../lib/prisma"
import { AppError } from "../../middleware/appError"

const createEducation = async (payload: Education) => {
    return await prisma.education.create({
        data: payload
    })
}
const updateEducation = async (id: string, payload: Partial<Education>) => {
    const existingEducation = await prisma.education.findFirst({ where: { id } });

    if (!existingEducation) {
        throw new AppError(status.BAD_REQUEST, "Education not found this id")
    }

    return await prisma.education.update({
        where: { id },
        data: payload
    })
}
const getEducation = async () => {
    return await prisma.education.findMany({
        orderBy:{order:"asc"}
    })
}

const getEducationById = async (id: string) => {
    const existingEducation = await prisma.education.findFirst({ where: { id } });

    if (!existingEducation) {
        throw new AppError(status.BAD_REQUEST, "Education not found this id")
    }

    return await prisma.education.findFirst({
        where: { id }
    })
}

const deleteEducation = async (id: string) => {
    const existingEducation = await prisma.education.findFirst({ where: { id } });

    if (!existingEducation) {
        throw new AppError(status.BAD_REQUEST, "Education not found this id")
    }

    return await prisma.education.delete({
        where: { id }
    })
}

// Course..................

const createCourse = async (payload: Course) => {
    return await prisma.course.create({
        data: payload
    })
}

const getCourse = async () => {
    return await prisma.course.findMany({
        orderBy:{order:"asc"}
    })
}

const updateCourse = async (id: string, payload: Partial<Course>) => {
    const existingEducation = await prisma.course.findFirst({ where: { id } });

    if (!existingEducation) {
        throw new AppError(status.BAD_REQUEST, "Course not found this id")
    }

    return await prisma.course.update({
        where: { id },
        data: payload
    })
}

const getCourseById = async (id: string) => {
    const existingEducation = await prisma.course.findFirst({ where: { id } });

    if (!existingEducation) {
        throw new AppError(status.BAD_REQUEST, "Course not found this id")
    }

    return await prisma.course.findFirst({
        where: { id }
    })
}


const deleteCourse = async (id: string) => {
    const existingEducation = await prisma.course.findFirst({ where: { id } });

    if (!existingEducation) {
        throw new AppError(status.BAD_REQUEST, "Course not found this id")
    }

    return await prisma.course.delete({
        where: { id }
    })
}


export const educationService = {
    createEducation,
    updateEducation,
    getEducationById,
    deleteEducation,
    createCourse,
    updateCourse,
    getCourseById,
    deleteCourse,
    getCourse,
    getEducation
}