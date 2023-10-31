import devlinksLogo from "./assets/devlinks.svg";
import linkIcon from "./assets/link.svg";
import userIcon from "./assets/user.svg";
import eyeIcon from "./assets/eye.svg";

export default function Header() {
  return (
    <div>
      <div className="flex justify-evenly gap-12 p-4 bg-white rounded-br-xl rounded-bl-xl">
        <img src={devlinksLogo} alt="devlinks logo" />
        <div className="flex">
          <button className="bg-dark-purple bg-opacity-10 px-7 rounded-lg">
            <img src={linkIcon} alt="link icon" />
          </button>
          <button className="bg-opacity-10 px-7 rounded-lg">
            <img src={userIcon} alt="user icon" />
          </button>
        </div>
        <button className="border border-dark-purple py-2.5 px-4 rounded-lg">
          <img src={eyeIcon} alt="eye icon" />
        </button>
      </div>
    </div>
  );
}
