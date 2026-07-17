import { Request, Response } from "express";
import httpStatus from "http-status";

import { SkillService } from "./skill.service";
import { catchAsync } from "../../config/catch-async";
import { sendResponse } from "../../config/sendResponse";

const createSkill = catchAsync(async (req: Request, res: Response) => {
    const result = await SkillService.createSkill(req.body);

    sendResponse(res, {
        success: true,
        httpStatusCode: httpStatus.CREATED,
        message: "Skill created successfully",
        data: result,
    });
});

const getAllSkills = catchAsync(async (_req: Request, res: Response) => {
    const result = await SkillService.getAllSkills();

    sendResponse(res, {
        success: true,
        httpStatusCode: httpStatus.OK,
        message: "Skills retrieved successfully",
        data: result,
    });
});

const getPublishedSkills = catchAsync(async (_req: Request, res: Response) => {
    const result = await SkillService.getPublishedSkills();

    sendResponse(res, {
        success: true,
        httpStatusCode: httpStatus.OK,
        message: "Published skills retrieved successfully",
        data: result,
    });
});

const getSkillsByCategory = catchAsync(
    async (req: Request, res: Response) => {
        const { category } = req.params;

        const result = await SkillService.getSkillsByCategory(category as any);

        sendResponse(res, {
            success: true,
            httpStatusCode: httpStatus.OK,
            message: "Skills retrieved successfully",
            data: result,
        });
    }
);

const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const result = await SkillService.getSingleSkill(id);

    sendResponse(res, {
        success: true,
        httpStatusCode: httpStatus.OK,
        message: "Skill retrieved successfully",
        data: result,
    });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const result = await SkillService.updateSkill(id, req.body);

    sendResponse(res, {
        success: true,
        httpStatusCode: httpStatus.OK,
        message: "Skill updated successfully",
        data: result,
    });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await SkillService.deleteSkill(id);

    sendResponse(res, {
        success: true,
        httpStatusCode: httpStatus.OK,
        message: "Skill deleted successfully",
        data: result,
    });
});

export const SkillController = {
    createSkill,
    getAllSkills,
    getPublishedSkills,
    getSkillsByCategory,
    getSingleSkill,
    updateSkill,
    deleteSkill,
};