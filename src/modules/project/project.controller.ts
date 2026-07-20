import { Request, Response } from "express";
import { catchAsync } from "../../config/catch-async";
import { sendResponse } from "../../config/sendResponse";
import status from "http-status";
import { deleteFileFromCloudinary } from "../../config/cloudinary.config";
import { projectService } from "./project.service";

const createProject = catchAsync(async (req: Request, res: Response) => {


    try {
        const payload = {
            ...req.body,
            thumbnail: req.file?.path,
            thumbnailId: req.file?.filename,
            order: Number(req.body.order)

        }
        const data = await projectService.createProject(payload)
        sendResponse(res, {
            httpStatusCode: status.CREATED,
            success: true,
            message: "Project create successful",
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
const updateProject = catchAsync(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const payload = {
            ...req.body,
            ...(req.file && {
                thumbnail: req.file.path,
                thumbnailId: req.file.filename,
            }),
        };
        console.log("Update", payload)
        const data = await projectService.updateProject(id as string, payload);
        if (req.file && data.thumbnailId) {
            await deleteFileFromCloudinary(
                data.thumbnailId,
                req.file.mimetype === "application/pdf" ? "raw" : "image"
            )
        }
        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Project Update successful",
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

const getProjectAll = catchAsync(async (req: Request, res: Response) => {

    const data = await projectService.getProjectAll()
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Project Retrieved successful",
        data

    })



})

const getProjectById = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string

    const data = await projectService.getProjectById(id)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Project Retrieved successful",
        data

    })



})
const deleteProjectById = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string

    const data = await projectService.deleteProjectById(id)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Project Delete successful",
        data

    })



})


export const projectController = {
    createProject,
    updateProject,
    getProjectAll,
    getProjectById,
    deleteProjectById
}