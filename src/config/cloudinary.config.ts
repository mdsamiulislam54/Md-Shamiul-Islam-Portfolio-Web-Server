
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



export const deleteFileFromCloudinary = async (
  publicId: string,
  resourceType: "image" | "raw" = "image"
) => {
  return await cloudinary.uploader.destroy(publicId, {
    resource_type: resourceType,
  });
};
export const cloudinaryUpload = cloudinary