// src/pages/ImageUploadPage.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ImageUploadPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      toast.warn("this functionlality is not working because API is not available right now");
      
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Image Upload and Analysis</h2>
        <p className="text-gray-700 mb-6">
          Upload images directly for a detailed analysis. Our AI-powered image recognition provides accurate insights.
        </p>
        <form className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="image-upload">
            Upload an image:
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full mb-4 text-gray-700"
          />
        </form>
        {selectedImage && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Image Preview:</h3>
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        )}
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          >
            Submit
          </button>
      </div>
    </div>
  );
};

export default ImageUploadPage;
