import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "./firebase";
import { useAuth } from "./authProvider";
import { collection, query, where, getDocs } from "firebase/firestore";

const LinkContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useLinkContext() {
  return useContext(LinkContext);
}

export function LinkProvider({ children }) {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchLinks = async () => {
      const userLinksQuery = query(
        collection(db, "links"),
        where("userId", "==", user.uid)
      );
      const querySnapshot = await getDocs(userLinksQuery);
      const fetchedLinks = [];
      querySnapshot.forEach((doc) => {
        fetchedLinks.push(doc.data());
      });
      fetchedLinks.sort((a, b) => a.timestamp - b.timestamp);
      setLinks(fetchedLinks);
    };

    fetchLinks();
  }, [user]);

  const addLink = () => {
    const newLink = {
      id: uuidv4(), // Generates a unique UUID
      platform: "GitHub",
      text: "",
    };

    setLinks([...links, newLink]);
  };

  const updateLinksOrder = (reorderedLinks) => {
    setLinks(reorderedLinks);
  };

  const removeLink = (id) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
  };

  const updatePlatformForLink = (id, platform) => {
    const updatedLinks = links.map((link) =>
      link.id === id ? { ...link, platform } : link
    );
    setLinks(updatedLinks);
  };

  const updateTextForLink = (id, text) => {
    const updatedLinks = links.map((link) =>
      link.id === id ? { ...link, text } : link
    );
    setLinks(updatedLinks);
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        addLink,
        removeLink,
        updatePlatformForLink,
        updateTextForLink,
        updateLinksOrder,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}
