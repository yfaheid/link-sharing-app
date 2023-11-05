import { Link } from "react-router-dom";
import { useDetailsContext } from "./DetailsContext";
import { useLinkContext } from "./LinksContext";
import purpleUserIcon from "./assets/purpleuser.svg";
import PreviewLinks from "./PreviewLinks";

export default function Preview() {
  const { userDetails } = useDetailsContext();
  const { links } = useLinkContext();

  return (
    <div className="grid gap-12 font-instrument">
      <div className="flex justify-center gap-4 p-5">
        <Link to="/">
          <button className="text-dark-purple font-semibold border border-dark-purple rounded-lg px-6 py-2.5">
            Back to Editor
          </button>
        </Link>

        <button className="text-white font-medium bg-dark-purple rounded-lg px-10 py-2.5">
          Share Link
        </button>
      </div>
      <div className="grid gap-6 justify-center">
        {userDetails.uploadedImage ? (
          <img
            className="m-auto rounded-full w-32 h-32 object-cover border-4 border-dark-purple"
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
        <div className="grid gap-2.5">
          <h1 className="text-center text-3xl font-bold text-dark-gray">{`${userDetails.firstName} ${userDetails.lastName}`}</h1>
          <h2 className="text-gray text-center">{userDetails.email}</h2>
        </div>

        <button className="grid gap-3">
          {links.map((link) => (
            <PreviewLinks key={link.id} link={link} />
          ))}
        </button>
      </div>
    </div>
  );
}
