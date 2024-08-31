import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = async () => {
    if (selectedImage) {
      setLoading(true);
      try {
        // Save the image to localStorage
        localStorage.setItem('uploadedImage', selectedImage);

        // Simulate an upload process
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual upload logic

        // Redirect to the photo-customize page
        window.location.href = '/photo-customize';
      } catch (error) {
        console.error('Upload failed:', error);
      } finally {
        setLoading(false);
        setSelectedImage(null); // Optionally clear the selected image
      }
    }
  };

  return (
    <div className="m-6 text-center font-poppins">
      {/* Select Image */}
      <label className="cursor-pointer inline-block bg-gray-800 text-white p-5 rounded-full hover:bg-gray-700 focus:outline-none">
        Fotoğraf Seç
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      <p className="text-sm text-gray-600 mt-2">
        Desteklenen formatlar: JPG, PNG, GIF. Maksimum dosya boyutu: 5 MB.
      </p>

      {/* Show Selected Image */}
      {selectedImage && !loading && (
        <div className="mt-4 flex flex-col items-center">
          <div className="w-full max-w-[720px] h-auto bg-gray-200 flex items-center justify-center rounded-lg shadow-lg mb-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Upload Image */}
          <button
            onClick={handleUploadClick}
            className="cursor-pointer inline-block bg-red-800 text-white p-5 rounded-full hover:bg-red-700 focus:outline-none"
          >
            Fotoğraf Yükle
          </button>
        </div>
      )}

      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="text-white text-lg font-semibold">
            <p>Yükleniyor...</p>
            <div className="mt-4">
              <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
