import React from "react";

const PhotoStripeHorizontal = () => {
  // Array of photo URLs
  const photos = [
    "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3612193/pexels-photo-3612193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3612193/pexels-photo-3612193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    

  ];

  return (
    <div className="mx-2.5  bg-black">
      <div className="flex flex-row gap-5 justify-center items-center ">
        {photos.map((photo, index) => (
          <div
            key={index}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-[240px] h-[520px] object-cover border-solid border-2 rounded-lg border-white "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoStripeHorizontal;
