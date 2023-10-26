import React, { useState } from "react";
import "./Links.css";
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

export default function Links({ onRemove, id, linkNumber }) {
  const platforms = [
    {
      name: "GitHub",
      logo: githubIcon,
      placeholder: "https://github.com/johnappleseed",
    },
    {
      name: "Frontend Mentor",
      logo: frontendmentorIcon,
      placeholder: "https://frontendmentor.io/johnappleseed",
    },
    {
      name: "Twitter",
      logo: twitterIcon,
      placeholder: "https://twitter.com/johnappleseed",
    },
    {
      name: "LinkedIn",
      logo: linkedinIcon,
      placeholder: "https://linkedin.com/johnappleseed",
    },
    {
      name: "YouTube",
      logo: youtubeIcon,
      placeholder: "https://youtube.com/johnappleseed",
    },
    {
      name: "Facebook",
      logo: facebookIcon,
      placeholder: "https://facebook.com/johnappleseed",
    },
    {
      name: "Twitch",
      logo: twitchIcon,
      placeholder: "https://twitch.tv/johnappleseed",
    },
    {
      name: "Dev.to",
      logo: devtoIcon,
      placeholder: "https://dev.to/johnappleseed",
    },
    {
      name: "Codewars",
      logo: codewarsIcon,
      placeholder: "https://codewars.com/johnappleseed",
    },
    {
      name: "Codepen",
      logo: codepenIcon,
      placeholder: "https://codepen.io/johnappleseed",
    },
    {
      name: "freeCodeCamp",
      logo: freecodecampIcon,
      placeholder: "https://freecodecamp.org/johnappleseed",
    },
    {
      name: "GitLab",
      logo: gitlabIcon,
      placeholder: "https://gitlab.com/johnappleseed",
    },
    {
      name: "Hashnode",
      logo: hashnodeIcon,
      placeholder: "https://hashnode.com/johnappleseed",
    },
    {
      name: "Stack Overflow",
      logo: stackoverflowIcon,
      placeholder: "https://stackoverflow.com/johnappleseed",
    },
  ];

  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0].name);

  const toggleSelect = (event) => {
    const selectElement = event.target;
    selectElement.classList.toggle("open");
  };

  return (
    <div className="bg-lighter-gray rounded-lg p-5 grid gap-3">
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
        <div className="grid gap-1">
          <label htmlFor={`platform-${id}`} className="text-xs text-dark-gray">
            Platform
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0.5 flex items-center pl-3">
              <img
                src={
                  platforms.find(
                    (platform) => platform.name === selectedPlatform
                  ).logo
                }
                alt="Platform Logo"
                width="20"
                height="20"
              />
            </div>
            <select
              className="custom-select rounded-lg p-3 border-light-gray border text-dark-gray pl-10 w-full"
              name={`platform-${id}`}
              id={`platform-${id}`}
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              onClick={toggleSelect}
            >
              {platforms.map((platform) => (
                <option key={platform.name} value={platform.name}>
                  {platform.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-1">
          <label className="text-xs text-dark-gray" htmlFor={`link-${id}`}>
            Link
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0.5 flex items-center pl-3">
              <img src={linksmallIcon} alt="icon" />
            </div>
            <input
              className="pl-10 rounded-lg p-3 border-light-gray border text-dark-gray w-full"
              id={`link-${id}`}
              type="text"
              placeholder={
                platforms.find((platform) => platform.name === selectedPlatform)
                  .placeholder
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
