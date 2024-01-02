import React, { useState } from "react";
import phoneIcon from "./assets/phone.svg";
import Links from "./Links";
import saveIcon from "./assets/save.svg";
import { useLinkContext } from "./LinksContext";
import { validateURL } from "./UrlValidator";
import { DragDropContext } from "react-beautiful-dnd";
import StrictModeDroppable from "./StrictModeDroppable";
import largePhoneIcon from "./assets/largephone.svg";
import phoneOutside from "./assets/phoneoutside.svg";
import phoneInside from "./assets/phoneinside.svg";
import Phone from "./Phone";

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
    <div className="p-4 md:p-0">
      <div className="lg:flex lg:justify-center lg:gap-5">
        <div className="hidden lg:grid bg-white rounded-xl justify-center items-center min-w-[43%] overflow-y-scroll relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full">
            <img
              src={phoneOutside}
              alt="phone outside"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={phoneInside}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="phone inside"
            />
          </div>
          <div className="relative right-[2px]">
            <Phone />
          </div>
        </div>
        <div className="lg:min-w-[55.5%] lg:max-w-[55.5%]">
          <div className="bg-white overflow-y-scroll p-6 md:px-10 md:pt-12 md:pb-10 rounded-tr-xl rounded-tl-xl min-h-[627px] max-h-[627px] md:min-h-[780px] md:max-h-[780px] lg:min-h-[720px] lg:max-h-[720px]">
            <div className="grid gap-2">
              <h1 className="text-2xl font-bold text-dark-gray md:text-3xl">
                Customize your links
              </h1>
              <div className="grid gap-9">
                <p className="text-gray">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </p>
                <div className="grid gap-6">
                  <button
                    onClick={addNewLink}
                    className="font-semibold hover:bg-light-purple border-dark-purple p-3 border rounded-lg text-dark-purple"
                  >
                    + Add new link
                  </button>
                  <div>
                    <DragDropContext onDragEnd={onDragEnd}>
                      <StrictModeDroppable
                        droppableId={`links-${links.length}`}
                      >
                        {(provided) => (
                          <div
                            className="grid gap-6"
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
                      <div className="bg-lighter-gray text-center rounded-xl px-5 py-12 md:px-16 md:py-20 lg:py-16 lg:px-28">
                        <div className="grid gap-7 md:gap-12">
                          <img
                            className="m-auto md:hidden"
                            src={phoneIcon}
                            alt="phone icon"
                          />
                          <img
                            className="hidden md:block m-auto"
                            src={largePhoneIcon}
                            alt="phone icon"
                          />
                          <div className="grid gap-6 md:gap-8">
                            <h2 className="font-bold text-dark-gray text-2xl md:text-3xl">
                              Let's get you started
                            </h2>
                            <p className="text-gray">
                              Use the "Add new link" button to get started. Once
                              you have more than one link, you can reorder and
                              edit them. We're here to help you share your
                              profiles with everyone!
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px bg-light-gray"></div>
          <div className="bg-white p-4 md:px-10 md:py-6 flex justify-center items-center rounded-bl-xl md:justify-end rounded-br-xl">
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
              className={`text-white w-full p-2.5 md:w-auto md:px-7 md:py-3 rounded-lg font-medium ${
                !isSaveDisabled ? "hover:bg-[#BEADFF]" : ""
              } bg-dark-purple`}
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
      </div>
    </div>
  );
}
