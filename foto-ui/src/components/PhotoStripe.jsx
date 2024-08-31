import React from "react";

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

const PhotoStripe = () => {
  // Array of photo URLs
  const photos = [
    "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3612193/pexels-photo-3612193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
  ];

  // Shuffle the photos array
  const shuffledPhotos = shuffleArray(photos);

  return (
    <div className="py-[var(--photo-padding)] bg-black">
      <div className="flex flex-col gap-5">
        {shuffledPhotos.map((photo, index) => (
          <div
            key={index}
            className="hover:border-white"
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-[240px] h-[420px] object-cover hover:scale-105 border-2 border-solid rounded-lg border-gray-700 hover:opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoStripe;
