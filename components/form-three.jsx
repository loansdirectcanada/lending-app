import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactCodeInput = dynamic(import("react-code-input"));

import { auth, firebase } from "../firebase";
const FormThree = ({
  setCurrent,
  formData,
  setFormData,
  handleSubmit,
  backButton,
  hideBtnOtp,
  setHideBtnOtp,
}) => {
  const [final, setfinal] = useState("");
  const [otp, setotp] = useState("");
  const [otpState, setotpState] = useState(false);

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
  const [show, setShow] = useState("");
  return (
    <div>
      <div className="container ">
        {otpState ? (
          <div className=" bg-white border border-[#d4d6d5] rounded-[8px] p-5">
            <div className="max-w-[410px] mx-auto py-[40px]">
              <div className="w-full ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  OTP
                </label>
                {/* <input
                  type="text"
                  id="otp"
                  placeholder="Enter OTP"
                  name="otp"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#ec3b37] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                />
                 */}
                <ReactCodeInput
                  type="number"
                  fields={6}
                  onChange={(e) => setotp(e)}
                  inputStyle={{
                    width: "50px",

                    height: "60px",
                    border: "1px solid #d4d6d5",
                    borderRadius: "8px",
                    outline: "none",
                    padding: "0px 10px",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "0px 5px",
                  }}
                />
              </div>
              {!hideBtnOtp ? (
                <button
                  className="text-white bg-[#ec3b37] border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg mt-5"
                  onClick={async () => {
                    await verifyOtp(otp);
                  }}
                >
                  Verify OTP
                </button>
              ) : (
                <button
                  className="text-white bg-[#ec3b37] border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg mt-5"
                  type="button"
                  disabled={true}
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="ml-5">Processing...</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className=" bg-white border border-[#d4d6d5] rounded-[8px] p-5">
            <div className="flex px-[24px] py-[16px] border-b border-[#f2f2f2]">
              <i className="fa-solid fa-calendar-day col_icon mr-3"></i>
              <div className="wrap_con">
                <span className="text-[10px] font-semibold text-[#7D8380] uppercase block font-lato mb-0">
                  Section Two
                </span>
                <span className="text-[14px] text-[#2A2C2B] font-semibold block font-lato">
                  Business details
                </span>
              </div>
            </div>

            <div className="max-w-[410px] mx-auto py-[40px]">
              <div className="flex gap-x-[15px]">
                <div
                  className={`relative rounded-[4px] h-[50px] mr-[10px] border-animation mb-[15px] ${
                    show === "first_name" && "is-focus"
                  }`}
                >
                  <input
                    type="text"
                    id="name"
                    name="first_name"
                    className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                    value={formData.first_name}
                    onChange={handleChange}
                    onFocus={(e) => setShow(e.target.name)}
                    onBlur={(e) => setShow("")}
                  />
                  {!formData.first_name && (
                    <label className="label-text absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] transition-all pointer-events-none">
                      First Name
                    </label>
                  )}
                </div>
                <div
                  className={`relative rounded-[4px] h-[50px] mr-[10px] border-animation mb-[15px] ${
                    show === "last_name" && "is-focus"
                  }`}
                >
                  <input
                    type="text"
                    id="name"
                    name="last_name"
                    className="w-full h-full px-[10px] focus:border-0 focus:outline-0 bg-transparent"
                    value={formData.last_name}
                    onChange={handleChange}
                    onFocus={(e) => setShow(e.target.name)}
                    onBlur={(e) => setShow("")}
                  />
                  {!formData.last_name && (
                    <label className="label-text absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] transition-all pointer-events-none">
                      Last Name
                    </label>
                  )}
                </div>
              </div>
              <div
                className={`relative rounded-[4px] h-[50px] mr-[10px] border-animation mb-[15px] ${
                  show === "email" && "is-focus"
                }`}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={(e) => setShow(e.target.name)}
                  onBlur={(e) => setShow("")}
                />
                {!formData.email && (
                  <label className="label-text absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] transition-all pointer-events-none">
                    Email
                  </label>
                )}
              </div>
              {/* <div
                className={`relative rounded-[4px] h-[50px] mr-[10px] border-animation mb-[15px] ${
                  show === "phone" && "is-focus"
                }`}
              >
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={(e) => setShow(e.target.name)}
                  onBlur={(e) => setShow("")}
                />
                {!formData.phone && (
                  <label className="label-text absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] transition-all pointer-events-none">
                    Phone number
                  </label>
                )}
              </div> */}
              <div id="recaptcha-container"></div>
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

                {/* <input
                  type="number"
                  id="email"
                  name="phone"
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                /> */}
              </div>

              <button
                className="block w-full px-[10px] py-[12px] rounded-[4px] bg-[#ec3b37] text-[#ffffff] text-[15px] font-semibold transition hover:text-[#ffffff] hover:bg-[#ff6c6a] cursor-pointer"
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
        )}
      </div>
    </div>
  );
};

export default FormThree;
