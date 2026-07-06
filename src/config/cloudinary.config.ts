
import { v2 as cloudinary, UploadApiResponse } from "cloudinary"
import status from "http-status";
import { AppError } from "../middleware/appError";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
})


// export const uploadFileTocloudinary = (buffer: Buffer, fileName: string): Promise<UploadApiResponse> => {
//     console.log("buffer", buffer)
//     console.log("file", fileName)
//     if (!buffer || !fileName) {
//         throw new AppError(status.BAD_REQUEST, "File buffer and file name are required for upload");
//     }

//     const extension = fileName.split(".").pop()?.toLocaleLowerCase()

//     const fileNameWithoutEx = fileName
//         .split(".")
//         .slice(0, -1)
//         .join(".")
//         .toLowerCase()
//         .replace(/\s+/g, "-")
//         .replace(/[^a-z0-9\-]/g, "");

//     const uniqueName = Math.random().toString(36).substring(2) + "-" + Date.now() + "-" + fileNameWithoutEx;

//     const folder = extension === "pdf" ? "pdfs" : "images"

//     return new Promise((resolver, reject) => {
//         cloudinary.uploader.upload_stream(
//             {
//                 resource_type: "auto",
//                 public_id: uniqueName,
//                 folder: `md-shamiul-islam/${folder}`
//             },

//             (error, result) => {
//                 if (error) {
//                     return reject(error);
//                 }
//                 resolver(result as UploadApiResponse);
//             }
//         ).end(buffer)
//     })



// }



export const deleteFileFromCloudinary = async (
  publicId: string,
  resourceType: "image" | "raw" = "image"
) => {
  return await cloudinary.uploader.destroy(publicId, {
    resource_type: resourceType,
  });
};
export const cloudinaryUpload = cloudinary