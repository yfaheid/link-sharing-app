import { Link } from "react-router-dom";
import devlinksLogo from "./assets/devlinks.svg";
import envelopeIcon from "./assets/envelope.svg";
import lockIcon from "./assets/lock.svg";

export default function CreateAccount() {
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
              <label className="text-sm" htmlFor="email">
                Email address
              </label>
              <img
                src={envelopeIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="border rounded-md p-3 pl-10 border-light-gray"
                placeholder="e.g. alex@gmail.com"
                type="text"
                id="email"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="password">
                Create password
              </label>
              <img
                src={lockIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="border rounded-md p-3 pl-10 border-light-gray"
                placeholder="At least 8 characters"
                type="password"
                id="password"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="confirm-password">
                Confirm password
              </label>
              <img
                src={lockIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="border rounded-md p-3 pl-10 border-light-gray"
                placeholder="At least 8 characters"
                type="password"
                id="confirm-password"
              />
            </div>
            <div className="grid gap-5">
              <p className="text-gray text-xs">
                Password must contain at least 8 characters
              </p>
              <button className="bg-dark-purple font-medium text-white rounded-md p-3">
                Create new account
              </button>
              <div className="grid">
                <p className="text-gray text-center">
                  Already have an account?
                </p>
                <Link to="/Login" className="text-center">
                  <button className="text-dark-purple font-medium">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
