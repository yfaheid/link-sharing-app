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

export const validateURL = (inputURL, platform) => {
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

  const platformPlaceholder = platforms.find(
    (p) => p.name === platform
  )?.placeholder;

  if (platformPlaceholder) {
    const placeholderParts = platformPlaceholder.split("://");
    if (placeholderParts.length > 1) {
      const placeholderDomain = placeholderParts[1].split("/")[0];
      const inputDomain = inputURL.split("://")[1]?.split("/")[0];

      return placeholderDomain === inputDomain;
    }
  }
  return false;
};
