import { useRef, useState } from "react";
import imageIcon from "./assets/image.svg";
import whiteImageIcon from "./assets/whiteimage.svg";
import { useDetailsContext } from "./DetailsContext";
import saveIcon from "./assets/save.svg";
import phoneOutside from "./assets/phoneoutside.svg";
import phoneInside from "./assets/phoneinside.svg";
import Phone from "./Phone";

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
    <div className="p-4 md:p-0 max-h-screen">
      <div className="lg:flex lg:gap-5 lg:justify-center">
        <div className="hidden lg:grid bg-white rounded-xl justify-center items-center min-w-[43%]  max-h-screen overflow-y-scroll relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full">
            <img
              src={phoneOutside}
              alt="phone outside"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={phoneInside}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="phone inside"
            />
          </div>
          <div className="relative right-[2px]">
            <Phone />
          </div>
        </div>
        <div className="lg:min-w-[55.5%] lg:max-w-[55.5%]">
          <div className="bg-white max-h-77v overflow-y-scroll md:min-h-75v md:max-h-75v md:px-10 md:py-12 p-6 rounded-tr-xl rounded-tl-xl">
            <div className="grid gap-2">
              <h1 className="text-2xl font-bold text-dark-gray md:text-3xl">
                Profile Details
              </h1>
              <div className="grid gap-10">
                <p className="text-gray">
                  Add your details to create a personal touch to your profile.
                </p>
                <div className="grid gap-6">
                  <div className="bg-lighter-gray p-5 grid gap-4 md:justify-between rounded-xl md:flex md:items-center">
                    <h2 className="text-gray text-base">Profile picture</h2>
                    <div className="md:flex md:items-center grid gap-6 md:gap-5">
                      <div className="grid gap-6">
                        <button
                          className="bg-light-purple py-15 w-9/12 rounded-xl grid gap-2 md:w-48 justify-center relative"
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
                      <p className="text-gray text-xs md:w-32 lg:w-52">
                        Image must be below 1024x1024px. Use PNG or JPG format.
                      </p>
                    </div>
                  </div>
                  <div className="bg-lighter-gray p-5 grid gap-4 rounded-xl">
                    <div className="grid gap-3">
                      <label
                        className="text-xs text-dark-gray grid gap-1 md:text-gray md:text-base md:flex md:justify-between md:items-center relative"
                        htmlFor="first-name"
                      >
                        First name*
                        <input
                          className={`border-light-gray caret-dark-purple border text-base pl-4 rounded-lg p-2.5 focus:border-dark-purple focus:outline-none focus:ring-0 shadow-dark-purple focus:shadow-md md:w-[340px] lg:w-[420px] ${
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
                          <p className="text-red text-xs absolute right-3">
                            Can't be empty
                          </p>
                        )}
                      </label>
                      <label
                        className="text-xs text-dark-gray grid gap-1 md:text-gray md:text-base md:flex md:justify-between md:items-center relative"
                        htmlFor="last-name"
                      >
                        Last name*
                        <input
                          className={`border-light-gray caret-dark-purple border text-base pl-4 rounded-lg p-2.5 focus:border-dark-purple focus:outline-none focus:ring-0 md:w-[340px] lg:w-[420px] ${
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
                          <p className="text-red text-xs absolute right-3">
                            Can't be empty
                          </p>
                        )}
                      </label>
                      <label
                        className="text-xs text-dark-gray grid gap-1 md:text-gray md:text-base md:flex md:justify-between md:items-center"
                        htmlFor="first-name"
                      >
                        Email
                        <input
                          className="border-light-gray caret-dark-purple border text-base pl-4 rounded-lg p-2.5 focus:border-dark-purple focus:outline-none focus:ring-0 md:w-[340px] lg:w-[420px]"
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
          <div className="h-px bg-light-gray"></div>
          <div className="bg-white p-4 md:px-10 md:py-6 flex justify-center items-center rounded-bl-xl md:justify-end rounded-br-xl">
            <button
              onClick={handleSave}
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
      </div>
    </div>
  );
}
