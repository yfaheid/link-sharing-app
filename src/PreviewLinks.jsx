import githubIcon from "./assets/white icons/github.svg";
import frontendmentorIcon from "./assets/white icons/frontendmentor.svg";
import twitterIcon from "./assets/white icons/twitter.svg";
import linkedinIcon from "./assets/white icons/linkedin.svg";
import youtubeIcon from "./assets/white icons/youtube.svg";
import facebookIcon from "./assets/white icons/facebook.svg";
import twitchIcon from "./assets/white icons/twitch.svg";
import devtoIcon from "./assets/white icons/devto.svg";
import codewarsIcon from "./assets/white icons/codewars.svg";
import codepenIcon from "./assets/white icons/codepen.svg";
import freecodecampIcon from "./assets/white icons/freecodecamp.svg";
import gitlabIcon from "./assets/white icons/gitlab.svg";
import hashnodeIcon from "./assets/white icons/hashnode.svg";
import stackoverflowIcon from "./assets/white icons/stackoverflow.svg";
import arrowRightIcon from "./assets/arrowright.svg";
import arrowRightGrayIcon from "./assets/arrowrightgray.svg";

export default function PreviewLinks({ link }) {
  const renderLink = () => {
    switch (link.platform) {
      case "GitHub":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-black text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={githubIcon} alt="GitHub" />
                GitHub
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Frontend Mentor":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 border-light-gray border rounded-lg bg-white text-dark-gray"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={frontendmentorIcon} alt="Frontend Mentor" />
                Frontend Mentor
              </div>

              <img src={arrowRightGrayIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Twitter":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#43B7E9] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={twitterIcon} alt="Twitter" />
                Twitter
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "LinkedIn":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#2D68FF] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={linkedinIcon} alt="LinkedIn" />
                LinkedIn
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "YouTube":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#EE3939] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={youtubeIcon} alt="YouTube" />
                YouTube
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Facebook":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#2442AC] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={facebookIcon} alt="Facebook" />
                Facebook
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Twitch":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#EE3FC8] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={twitchIcon} alt="Twitch" />
                Twitch
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Dev.to":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#333333] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={devtoIcon} alt="Dev.to" />
                Dev.to
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Codewars":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#8A1A50] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={codewarsIcon} alt="Codewars" />
                Codewars
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Codepen":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-dark-gray text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={codepenIcon} alt="Codepen" />
                Codepen
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "freeCodeCamp":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#302267] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={freecodecampIcon} alt="freeCodeCamp" />
                freeCodeCamp
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "GitLab":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#EB4925] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={gitlabIcon} alt="GitLab" />
                GitLab
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Hashnode":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#0330D1] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={hashnodeIcon} alt="Hashnode" />
                Hashnode
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
      case "Stack Overflow":
        return (
          <div>
            <a
              className="flex p-4 justify-between w-60 rounded-lg bg-[#EC7100] text-white"
              href={link.text}
            >
              <div className="flex gap-3">
                <img src={stackoverflowIcon} alt="hashnodeIcon" />
                Stack Overflow
              </div>

              <img src={arrowRightIcon} alt="arrow right" />
            </a>
          </div>
        );
    }
  };

  return <div>{renderLink()}</div>;
}
