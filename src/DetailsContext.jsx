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
    uploadedImage: null,
  });

  const updateDetails = (newDetails) => {
    setUserDetails({ ...userDetails, ...newDetails });
  };

  const updateUploadedImage = (image) => {
    setUserDetails({ ...userDetails, uploadedImage: image });
  };

  return (
    <DetailsContext.Provider
      value={{
        userDetails,
        updateDetails,
        uploadedImage: userDetails.uploadedImage,
        updateUploadedImage,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}
