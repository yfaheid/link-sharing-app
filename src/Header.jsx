import React, { useState } from "react";
import devlinksLogo from "./assets/devlinks.svg";
import linkIcon from "./assets/link.svg";
import userIcon from "./assets/user.svg";
import purpleLinkIcon from "./assets/purplelink.svg";
import purpleUserIcon from "./assets/purpleuser.svg";
import eyeIcon from "./assets/eye.svg";
import Details from "./Details";
import Body from "./Body";

export default function Header() {
  const [showDetails, setShowDetails] = useState(false);
  const [showBody, setShowBody] = useState(true);

  const toggleIcon = (selected) => {
    setShowDetails(selected);
    setShowBody(!selected);
  };

  return (
    <div>
      <div className="flex justify-evenly gap-12 p-4 bg-white rounded-br-xl rounded-bl-xl">
        <img src={devlinksLogo} alt="devlinks logo" />
        <div className="flex">
          <button
            className={`bg-${
              showBody ? "dark" : "opacity"
            }-purple bg-opacity-10 px-7 rounded-lg`}
            onClick={() => toggleIcon(false)}
          >
            <img src={showBody ? purpleLinkIcon : linkIcon} alt="link icon" />
          </button>
          <button
            className={`bg-${
              showDetails ? "dark" : "opacity"
            }-purple bg-opacity-10 px-7 rounded-lg`}
            onClick={() => toggleIcon(true)}
          >
            <img
              src={showDetails ? purpleUserIcon : userIcon}
              alt="user icon"
            />
          </button>
        </div>
        <button className="border border-dark-purple py-2.5 px-4 rounded-lg">
          <img src={eyeIcon} alt="eye icon" />
        </button>
      </div>
      {showDetails ? <Details /> : showBody && <Body />}
    </div>
  );
}
