import { Request, Response } from "express"

import status from "http-status"
import { sendResponse } from "../../config/sendResponse"
import { heroService } from "./hero.service"
import { deleteFileFromCloudinary } from "../../config/cloudinary.config"
import { catchAsync } from "../../config/catch-async"



const createProfile = catchAsync(async (req: Request, res: Response) => {


    try {
        const payload = {
            ...req.body,
            profileImages: req.file?.path,
            profileImageId: req.file?.filename,

        }

        JSON.parse(payload)

        const data = await heroService.createProfile(payload)
        sendResponse(res, {
            httpStatusCode: status.CREATED,
            success: true,
            message: "Profile create successful",
            data

        })
    } catch (error) {
        if (req.file?.filename) {
            await deleteFileFromCloudinary(
                req.file.filename,
                req.file.mimetype === "application/pdf" ? "raw" : "image"
            );
        }

        throw error;
    }



})
const updateProfile = catchAsync(async (req: Request, res: Response) => {
    try {
        const payload = {
            ...req.body,
        }

        if (req.file) {
            payload.profileImages = req.file.path,
                payload.profileImageId = req.file?.filename

        }

        const id = req.params.id as string


        const data = await heroService.updateProfile(payload, id);
        if (req.file && data.publicId) {
            await deleteFileFromCloudinary(
                data.publicId,
                req.file.mimetype === "application/pdf" ? "raw" : "image"
            )
        }
        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Profile Update successful",
            data

        })


    } catch (error) {
        if (req.file?.filename) {
            await deleteFileFromCloudinary(
                req.file.filename,
                req.file.mimetype === "application/pdf" ? "raw" : "image"
            );
        }

        throw error;
    }


})

const getProfile = catchAsync(async (req: Request, res: Response) => {

    const data = await heroService.getProfile()
    sendResponse(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "Profile Retrieved successful",
        data

    })



})



export const heroController = {
    createProfile,
    getProfile,
    updateProfile
}