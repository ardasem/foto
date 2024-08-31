import React, { useState, useEffect } from 'react';

const CustomizePage = () => {
  const [image, setImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    // Retrieve the image URL from localStorage
    const fetchedImage = localStorage.getItem('uploadedImage');
    if (fetchedImage) {
      setImage(fetchedImage);
    }
  }, []);

  const handleSaveChanges = () => {
    // Save or submit the changes
    console.log('Changes saved');
  };

  return (
    <div className="m-6 text-center font-poppins">
      <h1 className="text-2xl font-bold mb-4">Customize Your Photo</h1>

      {image ? (
        <div className="mt-4 flex flex-col items-center">
          <div className="relative w-full max-w-[720px] h-auto bg-gray-200 flex items-center justify-center rounded-lg shadow-lg mb-4">
            <img
              src={image}
              alt="Custom"
              className="w-full h-auto object-contain"
              style={{
                filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px)`
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Brightness:</label>
            <input
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              className="w-full"
            />
            <span className="block text-gray-600">{brightness}%</span>

            <label className="block mb-2 text-gray-600 mt-4">Contrast:</label>
            <input
              type="range"
              min="0"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
              className="w-full"
            />
            <span className="block text-gray-600">{contrast}%</span>

            <label className="block mb-2 text-gray-600 mt-4">Saturation:</label>
            <input
              type="range"
              min="0"
              max="200"
              value={saturation}
              onChange={(e) => setSaturation(e.target.value)}
              className="w-full"
            />
            <span className="block text-gray-600">{saturation}%</span>

            <label className="block mb-2 text-gray-600 mt-4">Blur:</label>
            <input
              type="range"
              min="0"
              max="20"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              className="w-full"
            />
            <span className="block text-gray-600">{blur}px</span>
          </div>

          <button
            onClick={handleSaveChanges}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <p>No image to display. Please upload an image first.</p>
      )}
    </div>
  );
};

export default CustomizePage;
