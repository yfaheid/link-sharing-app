import devlinksLogo from "./assets/devlinks.svg";
import linkIcon from "./assets/link.svg";
import userIcon from "./assets/user.svg";
import eyeIcon from "./assets/eye.svg";

export default function Header() {
  return (
    <div>
      <div className="flex justify-evenly gap-16 p-4 bg-white rounded-br-xl rounded-bl-xl">
        <img src={devlinksLogo} alt="devlinks logo" />
        <div className="flex">
          <img
            className="bg-dark-purple bg-opacity-10 rounded-lg px-7"
            src={linkIcon}
            alt="link icon"
          />
          <img className="rounded-lg px-7" src={userIcon} alt="user icon" />
        </div>
        <img
          className="border border-dark-purple py-2.5 px-4 rounded-lg"
          src={eyeIcon}
          alt="eye icon"
        />
      </div>
    </div>
  );
}
