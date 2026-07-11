import { Request, Response } from "express"
import { catchAsync } from "../../config/catch-async"
import { sendResponse } from "../../config/sendResponse"
import status from "http-status"
import { educationService } from "./education.service"

const createEducation = catchAsync(async (req: Request, res: Response) => {

    const data = await educationService.createEducation(req.body)
    sendResponse(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "Education Create successful",
        data

    })



})
const getEducation = catchAsync(async (req: Request, res: Response) => {

    const data = await educationService.getEducation()
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Education Create successful",
        data

    })
})
const updateEducation = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string
    const data = await educationService.updateEducation(id, req.body)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Education Update successful",
        data
    })
})

const getEducationById = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string
    const data = await educationService.getEducationById(id,)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Education Retrieved successful",
        data
    })
})

const deleteEducation = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string
    const data = await educationService.deleteEducation(id,)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Education Deleted successful",
        data
    })
})

const createCourse = catchAsync(async (req: Request, res: Response) => {

    const data = await educationService.createCourse(req.body)
    sendResponse(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "Course Create successful",
        data

    })



});

const getCourse = catchAsync(async (req: Request, res: Response) => {

    const data = await educationService.getCourse()
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Course Create successful",
        data

    })
})
const updateCourse = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string
    const data = await educationService.updateCourse(id, req.body)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Course Update successful",
        data
    })
})

const getCourseById = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string
    const data = await educationService.getCourseById(id,)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Course Retrieved successful",
        data
    })
})

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string
    const data = await educationService.deleteCourse(id,)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Course Deleted successful",
        data
    })
})



export const educationController = {
    createEducation,
    updateCourse,
    getEducationById,
    deleteEducation,
    updateEducation,
    createCourse,
    getCourseById,
    deleteCourse,
    getCourse,
    getEducation
}