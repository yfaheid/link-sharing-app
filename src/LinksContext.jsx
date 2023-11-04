import React, { createContext, useContext, useState } from "react";

const LinkContext = createContext();

export function useLinkContext() {
  return useContext(LinkContext);
}

export function LinkProvider({ children }) {
  const [links, setLinks] = useState([]);
  const [linkCounter, setLinkCounter] = useState(0);

  const addLink = () => {
    const newLink = {
      id: linkCounter + 1,
      platform: "GitHub",
    };

    setLinks([...links, newLink]);
    setLinkCounter(linkCounter + 1);
  };

  const removeLink = (id) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
  };

  return (
    <LinkContext.Provider value={{ links, addLink, removeLink }}>
      {children}
    </LinkContext.Provider>
  );
}
