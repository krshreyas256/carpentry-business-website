const CLOUDINARY_CLOUD_NAME = "qe8pj462";
const CLOUDINARY_UPLOAD_PRESET = "sv_wood_works_images";

const uploadToCloudinary = async (file) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error("Only JPG, PNG, and WEBP images are allowed.");
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Image size must be less than 5 MB.");
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    console.error("Cloudinary upload error:", errorData);

    throw new Error(
      errorData?.error?.message || "Failed to upload image."
    );
  }

  const data = await response.json();

  return {
    url: data.secure_url,
    publicId: data.public_id,
    fileName: file.name,
  };
};


// Gallery image upload
export const uploadGalleryImage = async (file) => {
  const uploadedImage = await uploadToCloudinary(file);

  return {
    url: uploadedImage.url,
    path: uploadedImage.publicId,
    fileName: uploadedImage.fileName,
  };
};


// Client logo upload
export const uploadClientLogo = async (file) => {
  const uploadedImage = await uploadToCloudinary(file);

  return {
    url: uploadedImage.url,
    publicId: uploadedImage.publicId,
    fileName: uploadedImage.fileName,
  };
};