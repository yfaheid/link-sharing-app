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
    // ...other details
  });

  const updateDetails = (newDetails) => {
    setUserDetails({ ...userDetails, ...newDetails });
  };

  return (
    <DetailsContext.Provider value={{ userDetails, updateDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}
