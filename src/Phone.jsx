import React from "react";
import { useDetailsContext } from "./DetailsContext";
import { useLinkContext } from "./LinksContext";
import PreviewLinks from "./PreviewLinks";

const Phone = () => {
  const { userDetails } = useDetailsContext();
  const { links } = useLinkContext();

  return (
    <div className="w-[237px] h-[514px] z-10">
      <div className="grid gap-14">
        <div className="grid gap-6">
          {userDetails.uploadedImage ? (
            <img
              className="rounded-full h-28 w-28 object-cover m-auto border-4 border-dark-purple"
              src={userDetails.uploadedImage}
              alt="profile picture"
            />
          ) : (
            <div className="rounded-full h-28 w-28 bg-[#EEEEEE] m-auto"></div>
          )}
          <div className="grid gap-1 h-[50px]">
            {userDetails.firstName ? (
              <h1 className="text-center text-lg leading-normal font-semibold text-dark-gray">{`${userDetails.firstName} ${userDetails.lastName}`}</h1>
            ) : (
              <div className="rounded-full h-4 w-40 bg-[#EEEEEE] m-auto"></div>
            )}
            {userDetails.email ? (
              <h2 className="text-gray text-center">{userDetails.email}</h2>
            ) : (
              <div className="rounded-full h-2 w-[72px] bg-[#EEEEEE] m-auto"></div>
            )}
          </div>
        </div>
        <div className="grid gap-5">
          {links.slice(0, 4).map((link) => (
            <PreviewLinks key={link.id} link={link} />
          ))}
          {[...Array(Math.max(0, 4 - links.length))].map((_, index) => (
            <div
              key={index}
              className="rounded-lg h-[56px] w-[240px] bg-[#EEEEEE] m-auto"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phone;
