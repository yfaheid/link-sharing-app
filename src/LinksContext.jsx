import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LinkContext = createContext();

export function useLinkContext() {
  return useContext(LinkContext);
}

export function LinkProvider({ children }) {
  const [links, setLinks] = useState([]);

  const addLink = () => {
    const newLink = {
      id: uuidv4(), // Generates a unique UUID
      platform: "GitHub",
      text: "",
      isNew: true,
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
