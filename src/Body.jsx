import { useState } from "react";
import phoneIcon from "./assets/phone.svg";
import Links from "./Links";

export default function Body() {
  const [isDivHidden, setDivHidden] = useState(false);

  const hideDiv = () => {
    if (!isDivHidden) {
      setDivHidden(true);
    }
  };
  const [links, setLinks] = useState([]);

  const addLinks = () => {
    const newLink = (
      <div key={links.length}>
        <Links />
      </div>
    );
    setLinks([...links, newLink]);
  };
  return (
    <div className="p-4">
      <div className="bg-white min-h-77v pt-7 p-5 rounded-tr-xl rounded-tl-xl border-opacity-50 border-b border-gray">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold text-dark-gray">
            Customize your links
          </h1>
          <div className="grid gap-10">
            <p className="text-gray">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <div className="grid gap-6">
              <button
                onClick={() => {
                  hideDiv();
                  addLinks();
                }}
                className="font-bold border-dark-purple p-3 border rounded-lg text-dark-purple"
              >
                + Add new link
              </button>
              {links}
              {!isDivHidden && (
                <div className="bg-lighter-gray px-7 py-11 grid gap-6 text-center rounded-xl">
                  <img className="m-auto" src={phoneIcon} alt="phone icon" />
                  <h2 className="font-bold text-dark-gray text-2xl">
                    Let's get you started
                  </h2>
                  <p className="text-gray">
                    Use the "Add new link" button to get started. Once you have
                    more than one link, you can reorder and edit them. We're
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex justify-center items-center rounded-bl-xl rounded-br-xl">
        <button className="text-white bg-dark-purple px-36 opacity-30 py-2.5 rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
}
