import { createContext, useContext, useEffect, useState } from "react";
import { db } from "./firebase";
import { useAuth } from "./authProvider";
import { doc, getDoc } from "firebase/firestore";

const DetailsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useDetailsContext() {
  return useContext(DetailsContext);
}

export function DetailsProvider({ children }) {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    uploadedImage: null,
  });

  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      const profileSnap = await getDoc(doc(db, "profiles", user.uid));
      if (profileSnap.exists()) {
        const data = profileSnap.data();
        setUserDetails((prev) => ({
          ...prev,
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          uploadedImage: data.photoURL || null,
        }));
      }
    };

    fetchProfile();
  }, [user]);

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
