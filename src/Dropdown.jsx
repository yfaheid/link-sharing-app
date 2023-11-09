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
import purpleGithubIcon from "./assets/purple icons/github.svg";
import purpleFrontendmentorIcon from "./assets/purple icons/frontendmentor.svg";
import purpleTwitterIcon from "./assets/purple icons/twitter.svg";
import purpleLinkedinIcon from "./assets/purple icons/linkedin.svg";
import purpleYoutubeIcon from "./assets/purple icons/youtube.svg";
import purpleFacebookIcon from "./assets/purple icons/facebook.svg";
import purpleTwitchIcon from "./assets/purple icons/twitch.svg";
import purpleDevtoIcon from "./assets/purple icons/devto.svg";
import purpleCodewarsIcon from "./assets/purple icons/codewars.svg";
import purpleCodepenIcon from "./assets/purple icons/codepen.svg";
import purpleFreecodecampIcon from "./assets/purple icons/freecodecamp.svg";
import purpleGitlabIcon from "./assets/purple icons/gitlab.svg";
import purpleHashnodeIcon from "./assets/purple icons/hashnode.svg";
import purpleStackoverflowIcon from "./assets/purple icons/stackoverflow.svg";

export default function Dropdown({
  handlePlatformSelection,
  closeDropdown,
  buttonWidth,
}) {
  const selectPlatform = (platform) => {
    handlePlatformSelection(platform);
    closeDropdown();
  };

  const [width, setWidth] = useState(buttonWidth);

  useEffect(() => {
    setWidth(buttonWidth);
  }, [buttonWidth]);

  const dropdownStyle = {
    width: width,
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

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const isIconHovered = (icon) => hoveredIcon === icon;

  return (
    <div
      className="bg-white z-10 absolute overflow-y-auto h-60 rounded-lg shadow border border-zinc-300 items-start grid"
      style={dropdownStyle}
    >
      <button
        onMouseEnter={() => handleMouseEnter("GitHub")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("GitHub")}
        className={`w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal`}
      >
        <img
          src={
            isIconHovered("GitHub")
              ? purpleGithubIcon
              : isIconHovered("GitHub")
              ? purpleGithubIcon
              : githubIcon
          }
          alt="GitHub icon"
        />
        GitHub
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Frontend Mentor")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Frontend Mentor")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={
            isIconHovered("Frontend Mentor")
              ? purpleFrontendmentorIcon
              : frontendmentorIcon
          }
          alt="Frontend Mentor icon"
        />
        Frontend Mentor
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Twitter")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Twitter")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("Twitter") ? purpleTwitterIcon : twitterIcon}
          alt="Twitter icon"
        />
        Twitter
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("LinkedIn")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("LinkedIn")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("LinkedIn") ? purpleLinkedinIcon : linkedinIcon}
          alt="LinkedIn icon"
        />
        LinkedIn
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("YouTube")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("YouTube")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("YouTube") ? purpleYoutubeIcon : youtubeIcon}
          alt="YouTube icon"
        />
        YouTube
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Facebook")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Facebook")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("Facebook") ? purpleFacebookIcon : facebookIcon}
          alt="Facebook icon"
        />
        Facebook
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Twitch")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Twitch")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("Twitch") ? purpleTwitchIcon : twitchIcon}
          alt="Twitch icon"
        />
        Twitch
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Dev.to")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Dev.to")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("Dev.to") ? purpleDevtoIcon : devtoIcon}
          alt="Dev.to icon"
        />
        Dev.to
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Codewars")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Codewars")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("Codewars") ? purpleCodewarsIcon : codewarsIcon}
          alt="Codewars icon"
        />
        Codewars
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Codepen")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Codepen")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("Codepen") ? purpleCodepenIcon : codepenIcon}
          alt="Codepen icon"
        />
        Codepen
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("freeCodeCamp")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("freeCodeCamp")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={
            isIconHovered("freeCodeCamp")
              ? purpleFreecodecampIcon
              : freecodecampIcon
          }
          alt="freeCodeCamp icon"
        />
        freeCodeCamp
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("GitLab")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("GitLab")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("GitLab") ? purpleGitlabIcon : gitlabIcon}
          alt="GitLab icon"
        />
        GitLab
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Hashnode")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Hashnode")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={isIconHovered("Hashnode") ? purpleHashnodeIcon : hashnodeIcon}
          alt="Hashnode icon"
        />
        Hashnode
      </button>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <button
        onMouseEnter={() => handleMouseEnter("Stack Overflow")}
        onMouseLeave={handleMouseLeave}
        onClick={() => selectPlatform("Stack Overflow")}
        className="w-full gap-3 p-3 flex pl-3 items-center hover:text-dark-purple text-zinc-800 text-base font-normal leading-normal"
      >
        <img
          src={
            isIconHovered("Stack Overflow")
              ? purpleStackoverflowIcon
              : stackoverflowIcon
          }
          alt="Stack Overflow icon"
        />
        Stack Overflow
      </button>
    </div>
  );
}
