import React, { useEffect, useState } from "react";
import "./Dropdown.css";
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

export default function Dropdown({
  handlePlatformSelection,
  closeDropdown,
  buttonWidth,
}) {
  const selectPlatform = (platform) => {
    handlePlatformSelection(platform);
    closeDropdown(); // Call the function to close the dropdown
  };

  const [width, setWidth] = useState(buttonWidth);

  useEffect(() => {
    setWidth(buttonWidth);
  }, [buttonWidth]);

  const dropdownStyle = {
    width: width, // Use the updated width
  };

  useEffect(() => {
    const handleResize = () => {
      if (buttonWidth !== width) {
        setWidth(buttonWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [buttonWidth, width]);

  return (
    <div
      className="bg-white z-10 absolute overflow-y-auto h-60 rounded-lg shadow border border-zinc-300 items-start grid"
      style={dropdownStyle}
    >
      <button
        onClick={() => selectPlatform("GitHub")}
        className="w-full gap-3 p-3 pr-32 h-full flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={githubIcon} alt="GitHub icon" />
        GitHub
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Frontend Mentor")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={frontendmentorIcon} alt="Frontend Mentor icon" />
        Frontend Mentor
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Twitter")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={twitterIcon} alt="Twitter icon" />
        Twitter
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("LinkedIn")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={linkedinIcon} alt="LinkedIn icon" />
        LinkedIn
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("YouTube")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={youtubeIcon} alt="YouTube icon" />
        YouTube
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Facebook")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={facebookIcon} alt="Facebook icon" />
        Facebook
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Twitch")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={twitchIcon} alt="Twitch icon" />
        Twitch
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Dev.to")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={devtoIcon} alt="Dev.to icon" />
        Dev.to
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Codewars")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={codewarsIcon} alt="Codewars icon" />
        Codewars
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Codepen")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={codepenIcon} alt="Codepen icon" />
        Codepen
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("freeCodeCamp")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={freecodecampIcon} alt="freeCodeCamp icon" />
        freeCodeCamp
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("GitLab")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={gitlabIcon} alt="GitLab icon" />
        GitLab
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Hashnode")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={hashnodeIcon} alt="Hashnode icon" />
        Hashnode
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onClick={() => selectPlatform("Stack Overflow")}
        className="w-full gap-3 p-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal"
      >
        <img src={stackoverflowIcon} alt="Stack Overflow icon" />
        Stack Overflow
      </button>
    </div>
  );
}
