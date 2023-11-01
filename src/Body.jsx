import React, { useState } from "react";
import phoneIcon from "./assets/phone.svg";
import Links from "./Links";

export default function Body() {
  const [links, setLinks] = useState([]);
  const [linkCounter, setLinkCounter] = useState(0);
  const [isDivHidden, setDivHidden] = useState(false);

  const addLink = () => {
    const newLink = {
      id: linkCounter + 1, // Use the counter as a unique ID
      platform: "GitHub", // Example default platform (can be customized)
    };

    setLinks([...links, newLink]);
    setLinkCounter(linkCounter + 1); // Increment the counter
    setDivHidden(true);
  };

  const removeLink = (id) => {
    const updatedLinks = links.filter((link) => link.id !== id);

    setLinks(updatedLinks);

    if (updatedLinks.length === 0) {
      setDivHidden(false);
    }
  };

  // Calculate the opacity for the Save button
  const saveButtonOpacity = links.length > 0 ? 100 : 30;

  return (
    <div className="p-4">
      <div className="bg-white min-h-77v py-7 px-5 rounded-tr-xl rounded-tl-xl border-opacity-20 border-b border-gray">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold text-dark-gray">
            Customize your links
          </h1>
          <div className="grid gap-9">
            <p className="text-gray">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <div className="grid gap-6">
              <button
                onClick={() => {
                  addLink();
                }}
                className="font-bold border-dark-purple p-3 border rounded-lg text-dark-purple"
              >
                + Add new link
              </button>
              {links.map((link, index) => (
                <Links
                  key={link.id}
                  id={link.id}
                  linkNumber={index + 1} // Use index as link number
                  onRemove={removeLink}
                />
              ))}
              {!isDivHidden && (
                <div className="bg-lighter-gray px-7 py-11 grid gap-6 text-center rounded-xl">
                  <img className="m-auto" src={phoneIcon} alt="phone icon" />
                  <h2 className="font-bold text-dark-gray text-2xl">
                    Let's get you started
                  </h2>
                  <p className="text-gray">
                    Use the "Add new link" button to get started. Once you have
                    more than one link, you can reorder and edit them. We're
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex justify-center items-center rounded-bl-xl rounded-br-xl">
        <button
          style={{ opacity: saveButtonOpacity / 100 }}
          className="text-white w-full bg-dark-purple px-36 py-2.5 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}
