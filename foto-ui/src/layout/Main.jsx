import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UploadPage from "../pages/UploadPage";
import CustomizePage from "../pages/CustomizePage";


function Main() {
  const handleImageUpload = async (imageData) => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      console.log('Upload successful:', result);

      // Redirect to the photo-customize page
      window.location.replace('/photo-customize');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='main-layout'>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/photo-upload">
          <UploadPage onImageUpload={handleImageUpload}  />
        </Route>
        <Route path="/photo-customize">
         <CustomizePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
