import { Request, Response } from "express"
import { catchAsync } from "../config/catch-async"
import { heroService } from "./hero.service"
import { sendResponse } from "../config/sendResponse"
import status from "http-status"
import { deleteFileFromCloudinary } from "../config/cloudinary.config"


const createProfile = catchAsync(async (req: Request, res: Response) => {


    try {
        const payload = {
            ...req.body,
            profileImages: req.file?.path
        }

        console.log("control............", payload)
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
export const heroController = {
    createProfile
}