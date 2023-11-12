import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { useDetailsContext } from "./DetailsContext";
import { useLinkContext } from "./LinksContext";
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
    <div>
      <div className="md:hidden">
        <div className="grid gap-12 font-instrument">
          <div className="flex justify-center gap-4 p-5">
            <Link to="/">
              <button className="hover:bg-light-purple text-dark-purple font-semibold border border-dark-purple rounded-lg px-6 py-2.5">
                Back to Editor
              </button>
            </Link>
            <CopyToClipboard
              text="http://localhost:5173/preview"
              onCopy={copyToClipboard}
            >
              <button
                style={{
                  boxShadow: "none",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0px 0px 32px 0px rgba(99, 60, 255, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
                className="text-white hover:bg-[#BEADFF] font-medium bg-dark-purple rounded-lg px-10 py-2.5"
              >
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
              <div className="rounded-full h-28 w-28 bg-[#EEEEEE] m-auto"></div>
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
            <div className="w-85 flex gap-2 text-lighter-gray font-medium bg-dark-gray p-4 rounded-xl text-sm fixed bottom-8 left-1/2 transform -translate-x-1/2">
              <img src={linkIcon} alt="link icon" />
              The link has been copied to your clipboard!
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid font-instrument">
          <div className="bg-dark-purple pt-5 px-5 pb-64 rounded-br-3xl rounded-bl-3xl">
            <div className="flex justify-between bg-white rounded-xl gap-4 p-5">
              <Link to="/">
                <button className="hover:bg-light-purple text-dark-purple font-semibold border border-dark-purple rounded-lg px-6 py-2.5">
                  Back to Editor
                </button>
              </Link>
              <CopyToClipboard
                text="http://localhost:5173/preview"
                onCopy={copyToClipboard}
              >
                <button
                  style={{
                    boxShadow: "none",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 0px 32px 0px rgba(99, 60, 255, 0.25)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  className="text-white hover:bg-[#BEADFF] font-medium bg-dark-purple rounded-lg px-10 py-2.5"
                >
                  Share Link
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              style={{
                boxShadow: "0px 0px 32px 0px rgba(0, 0, 0, 0.10)",
              }}
              className="grid gap-7 justify-center bg-white w-85 py-12 px-14 rounded-3xl relative -top-32"
            >
              {userDetails.uploadedImage ? (
                <img
                  className="m-auto rounded-full w-28 h-28 object-cover border-4 border-dark-purple"
                  src={userDetails.uploadedImage}
                  alt="profile picture"
                />
              ) : (
                <div className="rounded-full h-28 w-28 bg-[#EEEEEE] m-auto"></div>
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
          </div>

          {isCopied && (
            <div className="w-85 flex gap-2 text-lighter-gray font-medium bg-dark-gray p-4 rounded-xl text-sm fixed bottom-8 left-1/2 transform -translate-x-1/2">
              <img src={linkIcon} alt="link icon" />
              The link has been copied to your clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
