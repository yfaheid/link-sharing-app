import React from "react";
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

export default function Dropdown() {
  return (
    <div className="w-[400px] h-[686px] py-3 bg-white rounded-lg shadow border border-zinc-300 flex-col justify-center items-start gap-3 inline-flex">
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={githubIcon} alt="github icon" />
          GitHub
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={frontendmentorIcon} alt="github icon" />
          Frontend Mentor
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={twitterIcon} alt="github icon" />
          Twitter
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={linkedinIcon} alt="github icon" />
          LinkedIn
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={youtubeIcon} alt="github icon" />
          YouTube
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={facebookIcon} alt="github icon" />
          Facebook
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={twitchIcon} alt="github icon" />
          Twitch
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={devtoIcon} alt="github icon" />
          Dev.to
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={codewarsIcon} alt="github icon" />
          Codewars
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={codepenIcon} alt="github icon" />
          Codepen
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={freecodecampIcon} alt="github icon" />
          freeCodeCamp
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={gitlabIcon} alt="github icon" />
          GitLab
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={hashnodeIcon} alt="github icon" />
          Hashnode
        </button>
      </div>
      <div
        className="self-stretch h-px bg-zinc-300"
        style={{ width: "95%", margin: "0 auto" }}
      />
      <div className="h-[25px] justify-start w-full items-center inline-flex">
        <button className="w-full gap-3 flex pl-3 items-center text-zinc-800 text-base font-normal leading-normal">
          <img src={stackoverflowIcon} alt="github icon" />
          Stack Overflow
        </button>
      </div>
    </div>
  );
}
