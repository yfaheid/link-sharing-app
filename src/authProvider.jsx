import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false); // Set loading to false when the authentication check is complete
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Return loading until the authentication check is complete
  if (loading) {
    return <div></div>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
