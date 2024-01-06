import devlinksLogo from "./assets/devlinks.svg";
import envelopeIcon from "./assets/envelope.svg";
import lockIcon from "./assets/lock.svg";
import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError("");
  };

  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Validate email
    if (!email.trim()) {
      setEmailError("Can't be empty");
      return;
    }

    // Validate password
    if (password.length < 8) {
      setPasswordError("Must be at least 8 characters");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError("Please check again");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);

      // Redirect to the desired route after successful registration
      navigate("/");
    } catch (error) {
      console.error("Error creating account:", error.message);
    }
  };

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

  const emailInputBorderStyle = {
    border: `1px solid ${emailError ? "red" : "light-gray"}`,
  };

  const passwordInputBorderStyle = {
    border: `1px solid ${passwordError ? "red" : "light-gray"}`,
  };

  const confirmInputBorderStyle = {
    border: `1px solid ${passwordError ? "red" : "light-gray"}`,
  };

  const errorTextStyle = {
    color: "red",
    fontSize: "0.75rem", // Adjust the font size as needed
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
                onChange={handleEmailChange}
                required
              />
              {emailError && <p style={errorTextStyle}>{emailError}</p>}
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
                style={{
                  ...passwordInputBoxShadow,
                  ...passwordInputBorderStyle,
                }}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && <p style={errorTextStyle}>{passwordError}</p>}
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
                style={{ ...confirmInputBoxShadow, ...confirmInputBorderStyle }}
                onFocus={handleConfirmFocus}
                onBlur={handleConfirmBlur}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {passwordError && <p style={errorTextStyle}>{passwordError}</p>}
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
                onClick={(e) => handleCreateAccount(e)}
                type="submit"
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
          </form>
        </div>
      </div>
    </div>
  );
}
