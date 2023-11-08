import React, { useRef, useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import linksmallIcon from "./assets/linksmall.svg";
import githubIcon from "./assets/github.svg";
import frontendmentorIcon from "./assets/frontendmentor.svg";
import twitterIcon from "./assets/twitter.svg";
import linkedinIcon from "./assets/linkedin.svg";
import youtubeIcon from "./assets/youtube.svg";
import facebookIcon from "./assets/facebook.svg";
import twitchIcon from "./assets/twitch.svg";
import devtoIcon from "./assets/devto.svg";
import codewarsIcon from "./assets/codewars.svg";
import codepenIcon from "./assets/codepen.svg";
import freecodecampIcon from "./assets/freecodecamp.svg";
import gitlabIcon from "./assets/gitlab.svg";
import hashnodeIcon from "./assets/hashnode.svg";
import stackoverflowIcon from "./assets/stackoverflow.svg";
import arrowUpIcon from "./assets/arrowup.svg";
import arrowDownIcon from "./assets/arrowdown.svg";
import { useLinkContext } from "./LinksContext";
import { validateURL } from "./UrlValidator";
import { Draggable } from "react-beautiful-dnd";

export default function Links({
  onRemove,
  id,
  linkNumber,
  savePressed,
  index,
}) {
  const platforms = [
    {
      name: "GitHub",
      logo: githubIcon,
      placeholder: "e.g. https://www.github.com/johnappleseed",
    },
    {
      name: "Frontend Mentor",
      logo: frontendmentorIcon,
      placeholder: "e.g. https://www.frontendmentor.io/profile/johnappleseed",
    },
    {
      name: "Twitter",
      logo: twitterIcon,
      placeholder: "e.g. https://www.twitter.com/johnappleseed",
    },
    {
      name: "LinkedIn",
      logo: linkedinIcon,
      placeholder: "e.g. https://www.linkedin.com/in/johnappleseed",
    },
    {
      name: "YouTube",
      logo: youtubeIcon,
      placeholder: "e.g. https://www.youtube.com/@johnappleseed",
    },
    {
      name: "Facebook",
      logo: facebookIcon,
      placeholder: "e.g. https://www.facebook.com/johnappleseed",
    },
    {
      name: "Twitch",
      logo: twitchIcon,
      placeholder: "e.g. https://www.twitch.tv/johnappleseed",
    },
    {
      name: "Dev.to",
      logo: devtoIcon,
      placeholder: "e.g. https://www.dev.to/johnappleseed",
    },
    {
      name: "Codewars",
      logo: codewarsIcon,
      placeholder: "e.g. https://www.codewars.com/users/johnappleseed",
    },
    {
      name: "Codepen",
      logo: codepenIcon,
      placeholder: "e.g. https://www.codepen.io/johnappleseed",
    },
    {
      name: "freeCodeCamp",
      logo: freecodecampIcon,
      placeholder: "e.g. https://www.freecodecamp.org/johnappleseed",
    },
    {
      name: "GitLab",
      logo: gitlabIcon,
      placeholder: "e.g. https://www.gitlab.com/johnappleseed",
    },
    {
      name: "Hashnode",
      logo: hashnodeIcon,
      placeholder: "e.g. https://www.hashnode.com/@johnappleseed",
    },
    {
      name: "Stack Overflow",
      logo: stackoverflowIcon,
      placeholder:
        "e.g. https://www.stackoverflow.com/users/123456/johnappleseed",
    },
  ];

  const { links, updatePlatformForLink, updateTextForLink } = useLinkContext();
  const link = links.find((link) => link.id === id);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [buttonWidth, setButtonWidth] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (buttonRef.current) {
        const width = buttonRef.current.offsetWidth;
        setButtonWidth(`${width}px`);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isLinkFocused, setIsLinkFocused] = useState(false);

  const linkBoxShadow = {
    boxShadow: isLinkFocused
      ? "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
      : "none",
  };

  const handleLinkFocus = () => {
    setIsLinkFocused(true);
  };

  const handleLinkBlur = () => {
    setIsLinkFocused(false);
  };

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="bg-lighter-gray rounded-lg p-5 grid gap-3 relative"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="grid gap-1">
                <div className="bg-gray h-px w-3"></div>
                <div className="bg-gray h-px w-3"></div>
              </div>
              <div className="text-gray font-bold">Link #{linkNumber}</div>
            </div>
            <button className="text-gray" onClick={() => onRemove(id)}>
              Remove
            </button>
          </div>
          <div className="grid gap-3">
            <div className="grid gap-1 relative">
              <label
                htmlFor={`platform-button-${id}`}
                className="text-xs text-dark-gray"
              >
                Platform
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0.5 flex items-center pl-3">
                  <img
                    src={
                      platforms.find(
                        (platform) => platform.name === link.platform
                      ).logo
                    }
                    alt="Platform Logo"
                    width="20"
                    height="20"
                  />
                </div>
                <button
                  id={`platform-button-${id}`}
                  className="rounded-lg text-left pl-11 p-3 border-light-gray border bg-white text-dark-gray w-full"
                  onClick={toggleDropdown}
                  ref={buttonRef}
                >
                  {link.platform}
                  <span className="absolute top-5 right-3.5">
                    {showDropdown ? (
                      <img src={arrowUpIcon} alt="Arrow Up" />
                    ) : (
                      <img src={arrowDownIcon} alt="Arrow Down" />
                    )}
                  </span>
                </button>
                {showDropdown && (
                  <div className="absolute mt-2">
                    <Dropdown
                      handlePlatformSelection={(platform) => {
                        updatePlatformForLink(id, platform);
                        setShowDropdown(false);
                      }}
                      closeDropdown={() => setShowDropdown(false)}
                      buttonWidth={buttonWidth}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="grid gap-1 relative">
              <label className="text-xs text-dark-gray" htmlFor={`link-${id}`}>
                Link
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0.5 flex items-center pl-3">
                  <img src={linksmallIcon} alt="icon" />
                </div>
                <input
                  className={`pl-10 rounded-lg p-3 caret-dark-purple border-light-gray text-dark-gray border w-full focus:border-dark-purple focus:outline-none focus:ring-0 ${
                    savePressed &&
                    (link.text.trim() === "" ||
                      !validateURL(link.text, link.platform))
                      ? "border-red text-red"
                      : ""
                  }`}
                  id={`link-${id}`}
                  type="text"
                  style={linkBoxShadow}
                  onFocus={handleLinkFocus}
                  onBlur={handleLinkBlur}
                  value={link.text}
                  placeholder={
                    platforms.find(
                      (platform) => platform.name === link.platform
                    ).placeholder
                  }
                  onChange={(e) => updateTextForLink(id, e.target.value)}
                />
                {savePressed &&
                (link.text.trim() === "" ||
                  !validateURL(link.text, link.platform)) ? (
                  <p className="text-red text-xs absolute bottom-14 right-2">
                    {link.text.trim() === ""
                      ? "Can't be empty"
                      : "Please check the URL"}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
