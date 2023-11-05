import React, { createContext, useContext, useState } from "react";

const DetailsContext = createContext();

export function useDetailsContext() {
  return useContext(DetailsContext);
}

export function DetailsProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [uploadedImage, setUploadedImage] = useState(null); // Add the uploadedImage state

  const updateDetails = (newDetails) => {
    setUserDetails({ ...userDetails, ...newDetails });
  };

  const updateUploadedImage = (imageUrl) => {
    // Add the function to update the uploaded image
    setUploadedImage(imageUrl);
  };

  return (
    <DetailsContext.Provider
      value={{ userDetails, updateDetails, uploadedImage, updateUploadedImage }}
    >
      {children}
    </DetailsContext.Provider>
  );
}
