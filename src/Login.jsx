import { Link, useNavigate } from "react-router-dom";
import devlinksLogo from "./assets/devlinks.svg";
import envelopeIcon from "./assets/envelope.svg";
import lockIcon from "./assets/lock.svg";
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const navigate = useNavigate();

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

  const emailInputBorderStyle = {
    border: `1px solid ${emailError ? "red" : "light-gray"}`,
  };

  const passwordInputBorderStyle = {
    border: `1px solid ${passwordError ? "red" : "light-gray"}`,
  };

  const errorTextStyle = {
    color: "red",
    fontSize: "0.75rem", // Adjust the font size as needed
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setEmailError("Can't be empty");
      return;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Can't be empty");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect or perform additional actions after successful login
      navigate("/");
    } catch (error) {
      setEmailError("Please check again");
      setPasswordError("Please check again");
      console.error("Error logging in:", error.message);
    }
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
            <h2 className="font-bold text-2xl text-dark-gray">Login</h2>
            <p className="text-gray">
              Add your details below to get back into the app
            </p>
          </div>
          <form className="grid gap-6">
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
                style={{ ...emailInputBoxShadow, ...emailInputBorderStyle }}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p style={errorTextStyle}>{emailError}</p>}
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-dark-gray" htmlFor="password">
                Password
              </label>
              <img
                src={lockIcon}
                className="-mb-14 mt-5 ml-4 z-10 transform scale-110"
                alt="devlinks logo"
              />
              <input
                className="pl-10 rounded-lg p-3 caret-dark-purple border-light-gray text-dark-gray border w-full focus:border-dark-purple focus:outline-none focus:ring-0"
                placeholder="Enter your password"
                type="password"
                id="password"
                style={{
                  ...passwordInputBoxShadow,
                  ...passwordInputBorderStyle,
                }}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <p style={errorTextStyle}>{passwordError}</p>}
            </div>
            <div className="grid gap-5">
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
                onClick={handleLogin}
                type="submit"
              >
                Login
              </button>
              <div className="grid">
                <p className="text-gray text-center">Don't have an account?</p>
                <Link to="/createaccount" className="text-center">
                  <button className="text-dark-purple">Create account</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
