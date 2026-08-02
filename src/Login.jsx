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
    <div className="bg-lighter-gray min-h-screen flex flex-col items-center py-16 px-4">
      <div className="flex items-center gap-2 font-bold text-dark-gray mb-10">
        <img src={devlinksLogo} alt="devlinks logo" />
        <h1 className="text-3xl">devlinks</h1>
      </div>
      <div className="bg-white rounded-xl p-10 w-full max-w-md">
        <div className="grid gap-2 mb-10">
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
              className="text-white hover:bg-[#BEADFF] bg-dark-purple w-full p-3 rounded-lg font-medium"
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
            <p className="text-gray text-center">
              Don&apos;t have an account?{" "}
              <Link to="/createaccount" className="text-dark-purple font-medium">
                Create account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
