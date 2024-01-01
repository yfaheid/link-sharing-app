import { Link } from "react-router-dom";
import devlinksLogo from "./assets/devlinks.svg";
import envelopeIcon from "./assets/envelope.svg";
import lockIcon from "./assets/lock.svg";

export default function Login() {
  return (
    <div className="bg-white h-screen">
      <div className="grid p-8 gap-16">
        <div className="flex gap-2 font-bold text-dark-gray">
          <img src={devlinksLogo} alt="devlinks logo" />
          <h1 className="text-4xl">devlinks</h1>
        </div>
        <div className="grid gap-10">
          <div className="grid gap-2">
            <h2 className="font-bold text-2xl text-dark-gray">Login</h2>
            <p className="text-gray">
              Add your details below to get back into the app
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
                Password
              </label>
              <img
                src={lockIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="border rounded-md p-3 pl-10 border-light-gray"
                placeholder="Enter your password"
                type="password"
                id="password"
              />
            </div>
            <div className="grid gap-5">
              <button
                className="text-white hover:bg-[#BEADFF] bg-dark-purple w-full p-2.5 md:w-auto md:px-7 md:py-3 rounded-lg"
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
                Login
              </button>
              <div className="grid">
                <p className="text-gray text-center">Don't have an account?</p>
                <Link to="/CreateAccount" className="text-center">
                  <button className="text-dark-purple font-medium">
                    Create account
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
