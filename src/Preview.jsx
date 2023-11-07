import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { useDetailsContext } from "./DetailsContext";
import { useLinkContext } from "./LinksContext";
import purpleUserIcon from "./assets/purpleuser.svg";
import PreviewLinks from "./PreviewLinks";
import linkIcon from "./assets/link.svg";

export default function Preview() {
  const { userDetails } = useDetailsContext();
  const { links } = useLinkContext();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="grid gap-12 font-instrument">
      <div className="flex justify-center gap-4 p-5">
        <Link to="/">
          <button className="text-dark-purple font-semibold border border-dark-purple rounded-lg px-6 py-2.5">
            Back to Editor
          </button>
        </Link>

        <CopyToClipboard
          text="http://localhost:5173/preview"
          onCopy={copyToClipboard}
        >
          <button className="text-white font-medium bg-dark-purple rounded-lg px-10 py-2.5">
            Share Link
          </button>
        </CopyToClipboard>
      </div>
      <div className="grid gap-7 justify-center">
        {userDetails.uploadedImage ? (
          <img
            className="m-auto rounded-full w-28 h-28 object-cover border-4 border-dark-purple"
            src={userDetails.uploadedImage}
            alt="profile picture"
          />
        ) : (
          <img
            className="m-auto h-36"
            src={purpleUserIcon}
            alt="profile picture placeholder"
          />
        )}
        <div className="grid gap-14">
          <div className="grid gap-3">
            <h1 className="text-center text-3xl font-bold text-dark-gray">{`${userDetails.firstName} ${userDetails.lastName}`}</h1>
            <h2 className="text-gray text-center">{userDetails.email}</h2>
          </div>
          <button className="grid gap-5">
            {links.map((link) => (
              <PreviewLinks key={link.id} link={link} />
            ))}
          </button>
        </div>
      </div>
      {isCopied && (
        <div className="w-11/12 flex gap-2 text-lighter-gray font-medium bg-dark-gray p-4 rounded-xl text-sm fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <img src={linkIcon} alt="link icon" />
          The link has been copied to your clipboard!
        </div>
      )}
    </div>
  );
}
