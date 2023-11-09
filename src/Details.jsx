import { useRef, useState } from "react";
import imageIcon from "./assets/image.svg";
import whiteImageIcon from "./assets/whiteimage.svg";
import { useDetailsContext } from "./DetailsContext";
import saveIcon from "./assets/save.svg";

export default function Details() {
  const { userDetails, updateDetails, uploadedImage, updateUploadedImage } =
    useDetailsContext();

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFirstNameChange = (e) => {
    updateDetails({ firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    updateDetails({ lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    updateDetails({ email: e.target.value });
  };

  const fileInput = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInput.current.click();
  };

  const handleSave = () => {
    const hasFirstNameError = userDetails.firstName.trim() === "";
    const hasLastNameError = userDetails.lastName.trim() === "";

    setFirstNameError(hasFirstNameError);
    setLastNameError(hasLastNameError);

    if (!hasFirstNameError && !hasLastNameError) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  };

  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const firstNameBoxShadow = {
    boxShadow: isFirstNameFocused
      ? "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
      : "none",
  };

  const lastNameBoxShadow = {
    boxShadow: isLastNameFocused
      ? "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
      : "none",
  };

  const emailBoxShadow = {
    boxShadow: isEmailFocused
      ? "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
      : "none",
  };

  const handleFirstNameFocus = () => {
    setIsFirstNameFocused(true);
  };

  const handleFirstNameBlur = () => {
    setIsFirstNameFocused(false);
  };

  const handleLastNameFocus = () => {
    setIsLastNameFocused(true);
  };

  const handleLastNameBlur = () => {
    setIsLastNameFocused(false);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  return (
    <div className="p-4">
      <div className="bg-white min-h-77v py-7 px-5 rounded-tr-xl rounded-tl-xl border-opacity-20 border-b border-gray">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold text-dark-gray">Profile Details</h1>
          <div className="grid gap-10">
            <p className="text-gray">
              Add your details to create a personal touch to your profile.
            </p>
            <div className="grid gap-6">
              <div className="bg-lighter-gray p-5 grid gap-4 rounded-xl">
                <h2 className="text-gray text-base">Profile picture</h2>
                <div className="grid gap-6">
                  <button
                    className="bg-light-purple py-15 w-9/12 rounded-xl grid gap-2 justify-center relative"
                    onClick={handleUploadClick}
                  >
                    <div
                      className="absolute w-full h-full rounded-xl z-10"
                      style={{
                        backgroundImage: `url(${uploadedImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(70%)",
                      }}
                    ></div>
                    <img
                      src={uploadedImage ? whiteImageIcon : imageIcon}
                      alt="image icon"
                      className="m-auto z-20"
                    />
                    <p
                      className={`${
                        uploadedImage ? "text-white" : "text-dark-purple"
                      } font-bold  z-20`}
                    >
                      {uploadedImage ? "Change Image" : "+ Upload Image"}
                    </p>
                  </button>
                  <input
                    ref={fileInput}
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                  />
                </div>
                <p className="text-gray text-xs">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
              <div className="bg-lighter-gray p-5 grid gap-4 rounded-xl">
                <div className="grid gap-3">
                  <label className="text-xs grid gap-1" htmlFor="first-name">
                    First name*
                    <input
                      className={`border-light-gray caret-dark-purple border text-base pl-4 rounded-lg p-2.5 focus:border-dark-purple focus:outline-none focus:ring-0 shadow-dark-purple focus:shadow-md ${
                        firstNameError ? "border-red" : ""
                      }`}
                      id="first-name"
                      type="text"
                      value={userDetails.firstName}
                      style={firstNameBoxShadow}
                      onFocus={handleFirstNameFocus}
                      onBlur={handleFirstNameBlur}
                      onChange={handleFirstNameChange}
                      required
                      placeholder="e.g. John"
                    />
                    {firstNameError && (
                      <p className="text-red text-xs">Can't be empty</p>
                    )}
                  </label>
                  <label className="text-xs grid gap-1" htmlFor="last-name">
                    Last name*
                    <input
                      className={`border-light-gray caret-dark-purple border text-base pl-4 rounded-lg p-2.5 focus:border-dark-purple focus:outline-none focus:ring-0 ${
                        lastNameError ? "border-red" : ""
                      }`}
                      id="last-name"
                      type="text"
                      style={lastNameBoxShadow}
                      onFocus={handleLastNameFocus}
                      onBlur={handleLastNameBlur}
                      value={userDetails.lastName}
                      onChange={handleLastNameChange}
                      required
                      placeholder="e.g. Appleseed"
                    />
                    {lastNameError && (
                      <p className="text-red text-xs">Can't be empty</p>
                    )}
                  </label>
                  <label className="text-xs grid gap-1" htmlFor="first-name">
                    Email
                    <input
                      className="border-light-gray caret-dark-purple border text-base pl-4 rounded-lg p-2.5 focus:border-dark-purple focus:outline-none focus:ring-0"
                      id="email"
                      type="email"
                      style={emailBoxShadow}
                      onFocus={handleEmailFocus}
                      onBlur={handleEmailBlur}
                      value={userDetails.email}
                      onChange={handleEmailChange}
                      placeholder="e.g. email@example.com"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex justify-center items-center rounded-bl-xl rounded-br-xl">
        <button
          onClick={handleSave}
          className="text-white w-full hover:bg-[#BEADFF] bg-dark-purple px-36 py-2.5 rounded-lg"
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
          Save
        </button>
      </div>
      {showSuccessMessage && (
        <div className="w-90 flex gap-2 text-lighter-gray font-medium bg-dark-gray p-4 rounded-xl text-sm fixed bottom-24 left-1/2 transform -translate-x-1/2">
          <img src={saveIcon} alt="save icon" />
          Your changes have been successfully saved!
        </div>
      )}
    </div>
  );
}
