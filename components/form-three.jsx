import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

import { auth, firebase } from "../firebase";
const FormThree = ({
  setCurrent,
  formData,
  setFormData,
  handleSubmit,
  backButton,
}) => {
  const [final, setfinal] = useState("");
  const [otp, setotp] = useState("");
  const [otpState, setotpState] = useState(false);
  const [hideBtnOtp, setHideBtnOtp] = useState(false);
  const [otpError, setotpError] = useState({
    error: false,
    message: "Something went wrong please try again or enter a new number",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const phoneVerification = () => {
    setHideBtnOtp(false);
    let recapcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    let phoneNumber = "+" + formData.phone;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, recapcha)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        setfinal(confirmationResult);
        setotpState(true);
      });
  };

  const verifyOtp = async (otp) => {
    setHideBtnOtp(true);
    final
      .confirm(otp)
      .then((result) => {
        handleSubmit(formData);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.code);
        setotpError({
          error: true,
          message:
            "Something went wrong please try again or enter a new number",
        });
        setotpState(false);
      });
  };

  return (
    <div>
      <div className="container px-2 py-10 mx-auto flex p-10">
        {otpState ? (
          <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="flex flex-wrap mb-6">
              <div className="w-full ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Enter OTP"
                  name="otp"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                />
              </div>
            </div>

            {!hideBtnOtp && (
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={async () => {
                  await verifyOtp(otp);
                }}
              >
                Verify OTP
              </button>
            )}
          </div>
        ) : (
          <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="parent_wrap">
              <i className="fa-solid fa-calendar-day col_icon"></i>
              <div className="wrap_con">
                <span className="up_font">Section Two</span>
                <span className="down_font">Business details</span>
              </div>
            </div>

            <div className="bg-white flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
              <div className="mainWrap_con">
                <div className="">
                  <div className="relative mb-4">
                    {/* <label className="leading-7 text-sm text-gray-600">
                      First Name
                    </label> */}
                    <input
                      type="text"
                      id="name"
                      name="first_name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={formData.first_name}
                      placeholder="First name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative mb-4">
                    {/* <label className="leading-7 text-sm text-gray-600">
                      Last Name
                    </label> */}
                    <input
                      type="text"
                      id="name"
                      name="last_name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={formData.last_name}
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative mb-4">
                  {/* <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Phone number
                  </label>

                  {otpError.error && (
                    <div className="text-red-500 mb-3 ">{otpError.message}</div>
                  )}

                  <PhoneInput
                    country={"us"}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                  />
                  <div id="recaptcha-container"></div>

                  {/* <input
                type="number"
                id="email"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={formData.phone}
                onChange={handleChange}
              /> */}
                </div>

                <button
                  className="text-white bg-indigo-500 border-0 py-2 w-full px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
                  onClick={async () => {
                    // setCurrent(2);
                    // const response = await handleSubmit(formData);
                    // console.log(response);
                    await phoneVerification();
                  }}
                  disabled={
                    !formData.first_name ||
                    !formData.last_name ||
                    !formData.email ||
                    !formData.phone
                  }
                >
                  Send Verification code
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormThree;
