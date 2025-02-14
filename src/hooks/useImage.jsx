import { useState } from "react";
import axios from "axios";

const useImage = () => {
  const imgbb_key = import.meta.env.VITE_IMGBB_SECRET; // Ensure this is prefixed with VITE_
  const imgbbapi = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageData = async (file) => {
    setLoading(true);

    const formData = new FormData(); // Create FormData object
    formData.append("image", file); // Append the image file to the form

    try {
      const res = await axios.post(imgbbapi, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the header for file upload
        },
      });

      // Check if the response contains image URL
      if (res.data && res.data.data && res.data.data.url) {
        // console.log(res.data.data);
        return setImageUrl(res.data.data.url); // Store the image URL
      } else {
        console.error("Failed to upload image:", res);
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoading(false);
    }
  };

  return { imageUrl, handleImageData };
};

export default useImage;
