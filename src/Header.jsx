import React, { useState } from "react";
import devlinksLogo from "./assets/devlinks.svg";
import linkIcon from "./assets/link.svg";
import userIcon from "./assets/user.svg";
import purpleLinkIcon from "./assets/purplelink.svg";
import purpleUserIcon from "./assets/purpleuser.svg";
import eyeIcon from "./assets/eye.svg";
import Details from "./Details";
import Body from "./Body";
import { Link } from "react-router-dom";

export default function Header() {
  const [showDetails, setShowDetails] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const [isLinkIconHovered, setIsLinkIconHovered] = useState(false);
  const [isUserIconHovered, setIsUserIconHovered] = useState(false);

  const toggleIcon = (selected) => {
    setShowDetails(selected);
    setShowBody(!selected);
  };

  return (
    <div className="md:grid md:gap-5 md:p-5 bg-lighter-gray h-screen">
      <div className="flex justify-between items-center p-4 pl-6 bg-white rounded-br-xl rounded-bl-xl md:rounded-xl">
        <div className="flex items-center gap-1">
          <img src={devlinksLogo} alt="devlinks logo" />
          <p className="hidden md:inline text-3xl font-bold text-dark-gray">
            devlinks
          </p>
        </div>
        <div className="flex">
          <button
            className={`hover:text-dark-purple text-gray bg-${
              showBody ? "dark" : "opacity"
            }-purple bg-opacity-10 px-7 py-3 rounded-lg`}
            onMouseEnter={() => setIsLinkIconHovered(true)}
            onMouseLeave={() => setIsLinkIconHovered(false)}
            onClick={() => toggleIcon(false)}
          >
            <div className="flex gap-2 ">
              <img
                src={isLinkIconHovered || showBody ? purpleLinkIcon : linkIcon}
                alt="link icon"
              />
              <p
                className={`font-bold ${
                  showBody ? "text-dark-purple" : ""
                } hidden md:inline`}
              >
                Links
              </p>
            </div>
          </button>
          <button
            className={`hover:text-dark-purple text-gray bg-${
              showDetails ? "dark" : "opacity"
            }-purple bg-opacity-10 px-7 py-3 rounded-lg`}
            onMouseEnter={() => setIsUserIconHovered(true)}
            onMouseLeave={() => setIsUserIconHovered(false)}
            onClick={() => toggleIcon(true)}
          >
            <div className="flex gap-2">
              <img
                src={
                  isUserIconHovered || showDetails ? purpleUserIcon : userIcon
                }
                alt="user icon"
              />
              <p
                className={`font-bold ${
                  showDetails ? "text-dark-purple" : ""
                } hidden md:inline`}
              >
                Profile Details
              </p>
            </div>
          </button>
        </div>
        <Link to="/preview">
          <button className="border hover:bg-light-purple border-dark-purple py-2.5 px-4 md:px-6 rounded-lg">
            <img className="md:hidden" src={eyeIcon} alt="eye icon" />
            <p className="hidden md:inline text-dark-purple font-bold">
              Preview
            </p>
          </button>
        </Link>
      </div>
      {showDetails ? <Details /> : showBody && <Body />}
    </div>
  );
}
