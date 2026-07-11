import status from "http-status";
import { Project } from "../../generated/prisma/client"
import { prisma } from "../../lib/prisma"
import { AppError } from "../../middleware/appError";
import { CreateProjectPayload, UpdateProjectPayload } from "./interface";

const createProject = async (payload: CreateProjectPayload) => {
    console.log("Service", payload)
    console.log(typeof payload.tech);
    console.log(payload.tech);
    const result = await prisma.project.create({
        data: {
            name: payload.name,
            order: Number(payload.order),

            tech: JSON.parse(payload.tech),
            feature: JSON.parse(payload.feature),

            shortDesc: payload.shortDesc,
            description: payload.description,

            clientRepo: payload.clientRepo,
            serverRepo: payload.serverRepo,
            liveUrl: payload.liveUrl,

            thumbnail: payload.thumbnail,
            thumbnailId: payload.thumbnailId,

            isFeatured: payload.isFeatured === "true",
            isPublished: payload.isPublished === "true",
        },
    });

    return result
}
const updateProject = async (
    id: string,
    payload: Partial<UpdateProjectPayload>
) => {
    const existingProject = await prisma.project.findUniqueOrThrow({ where: { id } })
    const data: any = {
        ...payload,
    };

    if (payload.order !== undefined) {
        data.order = Number(payload.order);
    }

    if (payload.tech) {
        data.tech =
            typeof payload.tech === "string"
                ? JSON.parse(payload.tech)
                : payload.tech;
    }

    if (payload.feature) {
        data.feature =
            typeof payload.feature === "string"
                ? JSON.parse(payload.feature)
                : payload.feature;
    }

    if (payload.isFeatured !== undefined) {
        data.isFeatured =
            payload.isFeatured === true || payload.isFeatured === "true";
    }

    if (payload.isPublished !== undefined) {
        data.isPublished =
            payload.isPublished === true || payload.isPublished === "true";
    }

    const result = await prisma.project.update({
        where: {
            id,
        },
        data,
    });

    return {
        result,
        thumbnailId: existingProject.thumbnailId
    };
};

const getProjectAll = async () => {
    return await prisma.project.findMany({
        orderBy:{order:"asc"}
    })
}
const getProjectById = async (id: string) => {

    const project = await prisma.project.findFirst({ where: { id } })
    if (!project) {
        throw new AppError(status.BAD_REQUEST, "Not found project this id")
    }

    return project
}
export const projectService = {
    createProject,
    updateProject,
    getProjectAll,
    getProjectById
}