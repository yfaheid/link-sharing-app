import React, { useState } from "react";
import phoneIcon from "./assets/phone.svg";
import Links from "./Links";
import saveIcon from "./assets/save.svg";
import { useLinkContext } from "./LinksContext";
import { validateURL } from "./UrlValidator";
import { DragDropContext } from "react-beautiful-dnd";
import StrictModeDroppable from "./StrictModeDroppable";

export default function Body() {
  const { links, addLink, removeLink, updateLinksOrder } = useLinkContext();
  const isSaveDisabled = links.length === 0;
  const saveButtonOpacity = links.length > 0 ? 100 : 30;

  const [savePressed, setSavePressed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = () => {
    setSavePressed(true);

    const hasErrors = links.some(
      (link) =>
        link.text.trim() === "" || !validateURL(link.text, link.platform)
    );

    if (!hasErrors) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setSavePressed(false);
      }, 3000);
    }
  };

  const addNewLink = () => {
    setSavePressed(false);
    addLink();
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedLinks = Array.from(links);
    const [removed] = reorderedLinks.splice(result.source.index, 1);
    reorderedLinks.splice(result.destination.index, 0, removed);

    updateLinksOrder(reorderedLinks);
  };

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
            <div className="grid gap-3">
              <button
                onClick={addNewLink}
                className="font-bold hover:bg-light-purple border-dark-purple p-3 border rounded-lg text-dark-purple"
              >
                + Add new link
              </button>
              <DragDropContext onDragEnd={onDragEnd}>
                <StrictModeDroppable droppableId={`links-${links.length}`}>
                  {(provided) => (
                    <div
                      className="grid gap-7"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {links.map((link, index) => (
                        <Links
                          savePressed={savePressed}
                          key={link.id}
                          id={link.id}
                          linkNumber={index + 1}
                          onRemove={removeLink}
                          index={index}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </StrictModeDroppable>
              </DragDropContext>
              {!links.length > 0 && (
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
          onClick={handleSave}
          disabled={isSaveDisabled}
          style={{
            opacity: saveButtonOpacity / 100,
            boxShadow: "none",
          }}
          onMouseOver={(e) => {
            if (!isSaveDisabled) {
              e.currentTarget.style.boxShadow =
                "0px 0px 32px 0px rgba(99, 60, 255, 0.25)";
            }
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
          className={`text-white w-full ${
            !isSaveDisabled ? "hover:bg-[#BEADFF]" : ""
          } bg-dark-purple px-36 py-2.5 rounded-lg`}
        >
          Save
        </button>
      </div>
      {showSuccessMessage && (
        <div className="w-90 flex gap-2 text-lighter-gray font-medium bg-dark-gray p-4 rounded-xl text-sm fixed bottom-24 left-1/2 transform -translate-x-1/2">
          <img src={saveIcon} alt="save icon" />
          Your changes have been successfully saved!
        </div>
      )}
    </div>
  );
}
