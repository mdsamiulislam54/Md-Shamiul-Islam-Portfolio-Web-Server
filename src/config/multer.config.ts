import multer from "multer"

import { CloudinaryStorage } from "multer-storage-cloudinary"
import { cloudinaryUpload } from "./cloudinary.config"
const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
    "application/pdf",
];
const storage = new CloudinaryStorage({
    cloudinary: cloudinaryUpload,

    params: async (req, file) => {
        console.log("stroge:", req.file,file)
        const extension = file.originalname
            .split(".")
            .pop()
            ?.toLowerCase();

        const fileName = file.originalname
            .split(".")
            .slice(0, -1)
            .join(".")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");

        return {
            resource_type: "auto",
            folder:
                extension === "pdf"
                    ? "md-shamiul-islam/pdfs"
                    : "md-shamiul-islam/images",
            public_id: `${Date.now()}-${fileName}`,
        };
    },
})

export const multerUpload = multer({
    
    storage,
    fileFilter(req, file, cb) {
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only image and pdf files are allowed"));
        }
    },

});