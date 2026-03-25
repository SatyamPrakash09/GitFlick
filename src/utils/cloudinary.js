import { v2 as cloudinary } from "cloudinary";
import { unlink } from "fs/promises";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File uploaded on Cloudinary:", response.url);
        await unlink(localFilePath); // clean up after successful upload
        return response;

    } catch (error) {
        console.error("Cloudinary upload failed:", error);
        try { await unlink(localFilePath); } catch {} // clean up on failure too
        return null;
    }
};

export { uploadOnCloudinary };