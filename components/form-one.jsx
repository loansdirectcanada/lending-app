import React, { useState } from "react";

const FormOne = ({ setCurrent, formData, setFormData }) => {
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handle_purpose = (value) => {
    setFormData({ ...formData, main_purpose: value });
  };
  const [show, setShow] = useState("");
  return (
    <div>
      <div className="container md-w-100">
        <div className="bg-white border border-[#d4d6d5] rounded-[8px] p-5">
          <div className="flex px-[24px] py-[16px] border-b border-[#f2f2f2]">
            <i className="fa-solid fa-money-bill col_icon mr-3"></i>
            <div className="wrap_con">
              <span className="text-[10px] font-semibold text-[#7D8380] uppercase block font-lato mb-0">
                Section one
              </span>
              <span className="text-[14px] text-[#2A2C2B] font-semibold block font-lato">
                Loan needs
              </span>
            </div>
          </div>
          <div className="max-w-[410px] mx-auto py-[40px]">
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] mb-[15px]"
              >
                How much do you need?
              </h5>
              <div
                className={`relative rounded-[4px] h-[50px] border-animation ${
                  show === "money_need" && "is-focus"
                }`}
              >
                <i className="fa-solid fa-dollar-sign absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] "></i>
                <input
                  type="number"
                  id="text"
                  name="money_need"
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  value={formData.money_need}
                  onChange={handleChanges}
                  onFocus={(e) => setShow(e.target.name)}
                  onBlur={(e) => setShow("")}
                />
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] "
              >
                How long would you like the loan for?
              </h5>
              <p className="mb-[15px] text-[12px] font-medium text-[#2A2C2B] font-lato">
                The shorter the term, the less interest you ll pay.
              </p>
              <div className="flex items-center">
                <div
                  className={`relative rounded-[4px] h-[50px] mr-[10px] border-animation ${
                    show === "time_duration_in_number" && "is-focus"
                  }`}
                >
                  <input
                    type="number"
                    id="text"
                    name="time_duration_in_number"
                    className="w-full h-full px-[10px] focus:border-0 focus:outline-0 bg-transparent"
                    value={formData.time_duration_in_number}
                    onChange={handleChanges}
                    onFocus={(e) => setShow(e.target.name)}
                    onBlur={(e) => setShow("")}
                  />
                  {!formData.time_duration_in_number && (
                    <label className="label-text absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] transition-all pointer-events-none">
                      Type a number
                    </label>
                  )}
                </div>
                <button
                  type="button"
                  className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px]	 ${
                    formData.time_duration === "month"
                      ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                      : "bg-transparent text-[#7d8380]"
                  }`}
                  onClick={() => {
                    console.log("month");
                    setFormData({
                      ...formData,
                      time_duration: "month",
                    });
                  }}
                >
                  Month{" "}
                </button>
                <button
                  type="button"
                  className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                    formData.time_duration === "year"
                      ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                      : "bg-transparent text-[#7d8380]"
                  } `}
                  onClick={() => {
                    console.log("year");
                    setFormData({
                      ...formData,
                      time_duration: "year",
                    });
                  }}
                >
                  Year
                </button>
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] mb-[15px]"
              >
                How soon would you like the loan?
              </h5>

              <div className="mt-2 container_level">
                <label className="radiobtn flex flex-col-reverse text-center items-center mr-10">
                  <input
                    type="radio"
                    className="form-radio h-7 w-7  transition duration-150 ease-in-out "
                    name="loan_rush"
                    value="ASAP"
                    checked={formData.loan_rush === "ASAP"}
                    onChange={handleChanges}
                  />
                  <span className="font-lato text-[14px] font-normal capitalize text-[#2A2C2B] mb-[8px]">
                    ASAP
                  </span>
                  <img
                    className="uncheckimage"
                    src="https://application.lend.com.au/img/global/icons/Pastel/ASAP/ASAP.svg"
                    alt="asap"
                  />
                  <img
                    className="checkimage"
                    src="https://application.lend.com.au/img/global/icons/Pastel/ASAP/ASAP_active.svg"
                    alt="asap"
                  />
                </label>
                <label className="radiobtn flex flex-col-reverse text-center items-center">
                  <input
                    type="radio"
                    className="form-radio h-7 w-7  transition duration-150 ease-in-out "
                    name="loan_rush"
                    value="not in rush"
                    checked={formData.loan_rush === "not in rush"}
                    onChange={handleChanges}
                  />
                  <span className="font-lato text-[14px] font-normal capitalize text-[#2A2C2B] mb-[8px]">
                    Not in rush
                  </span>
                  <img
                    className="uncheckimage"
                    src="https://application.lend.com.au/img/global/icons/Pastel/Relax/Relax.svg"
                    alt="asap"
                  />
                  <img
                    className="checkimage"
                    src="https://application.lend.com.au/img/global/icons/Pastel/Relax/Relax_active.svg"
                    alt="asap"
                  />
                </label>
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] mb-[15px]"
              >
                Lets narrow it down, choose the main purpose of the loan.
              </h5>

              <div className="flex space-x-4 justify-center">
                <div>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Day-to-day Capital"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Day-to-day Capital"
                    onClick={() => {
                      handle_purpose("Day-to-day Capital");
                    }}
                  >
                    Day-to-day Capital
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Vehicles or Transport"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Vehicles or Transport"
                    onClick={() => {
                      handle_purpose("Vehicles or Transport");
                    }}
                  >
                    Vehicles or Transport
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Renovation"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Renovation"
                    onClick={() => {
                      handle_purpose("Renovation");
                    }}
                  >
                    Renovation
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Other"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Other"
                    onClick={() => {
                      handle_purpose("Other");
                    }}
                  >
                    Other
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Start a New Business"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Other"
                    onClick={() => {
                      handle_purpose("Start a New Business");
                    }}
                  >
                    Start a New Business
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Purchase Existing Business"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Purchase Existing Business"
                    onClick={() => {
                      handle_purpose("Purchase Existing Business");
                    }}
                  >
                    Purchase Existing Business
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Expansion"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Expansion"
                    onClick={() => {
                      handle_purpose("Expansion");
                    }}
                  >
                    Expansion
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "New Fit-out"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="New Fit-out"
                    onClick={() => {
                      handle_purpose("New Fit-out");
                    }}
                  >
                    New Fit-out
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Machinery or Equipment"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Machinery or Equipment"
                    onClick={() => {
                      handle_purpose("Machinery or Equipment");
                    }}
                  >
                    Machinery or Equipment
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose ===
                      "Pay domestic or international suppliers"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Pay domestic or international suppliers"
                    onClick={() => {
                      handle_purpose("Pay domestic or international suppliers");
                    }}
                  >
                    Pay domestic or international suppliers
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Pay for goods or services"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Pay for goods or services"
                    onClick={() => {
                      handle_purpose("Pay for goods or services");
                    }}
                  >
                    Property
                  </button>
                  <button
                    type="button"
                    className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                      formData.main_purpose === "Development & Construction"
                        ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                        : "bg-transparent text-[#7d8380]"
                    } `}
                    name="Development & Construction"
                    onClick={() => {
                      handle_purpose("Development & Construction");
                    }}
                  >
                    Development & Construction
                  </button>
                </div>
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] mb-[15px]"
              >
                And finally, please specify the reason in a few words.
              </h5>
              <div
                className={`relative rounded-[4px] h-[50px] border-animation ${
                  show === "reason_description" && "is-focus"
                }`}
              >
                <input
                  type="text"
                  id="text"
                  name="reason_description"
                  value={formData.reason_description}
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  placeholder="Reason Description"
                  onChange={handleChanges}
                  onFocus={(e) => setShow(e.target.name)}
                  onBlur={(e) => setShow("")}
                />
              </div>
            </div>
            <button
              className="block w-full px-[10px] py-[12px] rounded-[4px] bg-[#ec3b37] text-[#ffffff] text-[15px] font-semibold transition hover:text-[#ffffff] hover:bg-[#051a8f] cursor-pointer"
              disabled={
                !formData.money_need ||
                !formData.time_duration ||
                !formData.time_duration_in_number ||
                !formData.main_purpose ||
                !formData.reason_description ||
                !formData.loan_rush
              }
              onClick={() => {
                setCurrent(2);
                console.log(formData);
              }}
            >
              Continue to section two
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
