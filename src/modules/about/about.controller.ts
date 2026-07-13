import { Request, Response } from "express"
import { catchAsync } from "../../config/catch-async"
import { aboutService } from "./about.service"
import status from "http-status"
import { sendResponse } from "../../config/sendResponse"


const createAbout = catchAsync(async (req: Request, res: Response) => {

    const data = await aboutService.createAbout(req.body)
    sendResponse(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "About create successful",
        data
    })
})
const aboutUpdate = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string
    const data = await aboutService.updateAbout(id,req.body)
    sendResponse(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "About update successful",
        data
    })
})
const getAbout = catchAsync(async (req: Request, res: Response) => {

    const data = await aboutService.getAbout()
    sendResponse(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "About retrieved successful",
        data
    })
})

export const aboutController = {
    createAbout,
    aboutUpdate,
    getAbout
}