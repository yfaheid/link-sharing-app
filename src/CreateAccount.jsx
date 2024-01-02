import { Link } from "react-router-dom";
import devlinksLogo from "./assets/devlinks.svg";
import envelopeIcon from "./assets/envelope.svg";
import lockIcon from "./assets/lock.svg";
import { useState } from "react";

export default function CreateAccount() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState(false);

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleConfirmFocus = () => {
    setIsConfirmFocused(true);
  };

  const handleConfirmBlur = () => {
    setIsConfirmFocused(false);
  };

  const emailInputBoxShadow = {
    boxShadow: isEmailFocused
      ? "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
      : "none",
  };

  const passwordInputBoxShadow = {
    boxShadow: isPasswordFocused
      ? "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
      : "none",
  };

  const confirmInputBoxShadow = {
    boxShadow: isConfirmFocused
      ? "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
      : "none",
  };

  return (
    <div className="bg-white h-screen">
      <div className="grid p-8 gap-16">
        <div className="flex gap-2 font-bold text-dark-gray">
          <img src={devlinksLogo} alt="devlinks logo" />
          <h1 className="text-4xl">devlinks</h1>
        </div>
        <div className="grid gap-10">
          <div className="grid gap-2">
            <h2 className="font-bold text-2xl text-dark-gray">
              Create account
            </h2>
            <p className="text-gray">
              Let's get you started sharing your links!
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <label className="text-sm text-dark-gray" htmlFor="email">
                Email address
              </label>
              <img
                src={envelopeIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="pl-10 rounded-lg p-3 caret-dark-purple border-light-gray text-dark-gray border w-full focus:border-dark-purple focus:outline-none focus:ring-0"
                placeholder="e.g. alex@gmail.com"
                type="text"
                id="email"
                style={emailInputBoxShadow}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-dark-gray" htmlFor="password">
                Create password
              </label>
              <img
                src={lockIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="pl-10 rounded-lg p-3 caret-dark-purple border-light-gray text-dark-gray border w-full focus:border-dark-purple focus:outline-none focus:ring-0"
                placeholder="At least 8 characters"
                type="password"
                id="password"
                style={passwordInputBoxShadow}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
            </div>
            <div className="grid gap-1">
              <label
                className="text-sm text-dark-gray"
                htmlFor="confirm-password"
              >
                Confirm password
              </label>
              <img
                src={lockIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="pl-10 rounded-lg p-3 caret-dark-purple border-light-gray text-dark-gray border w-full focus:border-dark-purple focus:outline-none focus:ring-0"
                placeholder="At least 8 characters"
                type="password"
                id="confirm-password"
                style={confirmInputBoxShadow}
                onFocus={handleConfirmFocus}
                onBlur={handleConfirmBlur}
              />
            </div>
            <div className="grid gap-5">
              <p className="text-gray text-xs">
                Password must contain at least 8 characters
              </p>
              <button
                className="text-white hover:bg-[#BEADFF] bg-dark-purple w-full p-2.5 md:w-auto md:px-7 md:py-3 rounded-lg font-medium"
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
              >
                Create new account
              </button>
              <div className="grid">
                <p className="text-gray text-center">
                  Already have an account?
                </p>
                <Link to="/Login" className="text-center">
                  <button className="text-dark-purple">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
