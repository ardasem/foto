import React from "react";
import PhotoStripe from "./PhotoStripe";

function PhotoCatalog() {
  return (
    <div className="bg-black flex flex-row gap-5 p-5 ">
      <PhotoStripe />
      <div className="my-28">
        <PhotoStripe />
      </div>
      <PhotoStripe />
      <div className="my-28">
        <PhotoStripe />
      </div>
      <PhotoStripe />
      <div className="my-28">
        <PhotoStripe />
      </div>
      <PhotoStripe />
      <div className="my-28">
        <PhotoStripe />
      </div>
    </div>
  );
}

export default PhotoCatalog;
