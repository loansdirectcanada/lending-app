import React from "react";

const formOne = ({ setCurrent, formData, setFormData }) => {
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handle_purpose = (value) => {
    setFormData({ ...formData, main_purpose: value });
  };

  return (
    <div>
      <div className="container px-5 py-24 mx-auto flex p-10">
        <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Section one
          </h2>

          <div className="relative mb-4">
            <label
              htmlFor="text"
              className="leading-7 text-md  text-black font-medium"
            >
              How much do you need?
            </label>
            <input
              type="text"
              id="text"
              name="money_need"
              className="w-full bg-white rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formData.money_need}
              onChange={handleChanges}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-relaxed text-md mb-5 text-black font-medium"
            >
              How long would you like the loan for?
            </label>
            <div className="flex flex-wrap mt-4 align-middle">
              <input
                type="text"
                id="text"
                name="time_duration_in_number"
                className="w-1/4 bg-white rounded border border-gray-300  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={formData.time_duration_in_number}
                onChange={handleChanges}
              />
              <button
                type="button"
                className={`py-2.5 px-5 ml-5 text-sm font-medium  rounded-lg border border-gray-200 ${
                  formData.time_duration === "month"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-900"
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
                className={`py-2.5 px-5 ml-5 text-sm font-medium  bg-white rounded-lg border border-gray-200 ${
                  formData.time_duration === "year"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-900"
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
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-relaxed mb-5 text-md text-black font-medium"
            >
              How soon would you like the loan?
            </label>

            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="loan_rush"
                  value="ASAP"
                  checked={formData.loan_rush === "ASAP"}
                  onChange={handleChanges}
                />
                <span className="ml-2 text-black">ASAP</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="loan_rush"
                  value="not in rush"
                  checked={formData.loan_rush === "not in rush"}
                  onChange={handleChanges}
                />
                <span className="ml-2 text-black">Not in rush</span>
              </label>
            </div>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-relaxed mb-5 text-md text-black font-medium"
            >
              Lets narrow it down, choose the main purpose of the loan.
            </label>
            <div className="flex space-x-2 justify-center">
              <div>
                <button
                  type="button"
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Day-to-day Capital"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Vehicles or Transport"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Renovation"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Other"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Start a New Business"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Purchase Existing Business"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Expansion"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "New Fit-out"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Machinery or Equipment"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose ===
                    "Pay domestic or international suppliers"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Pay for goods or services"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
                  className={`py-2.5 px-5 ml-3 mt-2 text-sm font-medium  rounded-lg border border-gray-200 ${
                    formData.main_purpose === "Development & Construction"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-900"
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
          <div className="relative mb-4">
            <label
              htmlFor="text"
              className="leading-7 text-md  text-black font-medium"
            >
              And finally, please specify the reason in a few words.
            </label>
            <input
              type="text"
              id="text"
              name="reason_description"
              value={formData.reason_description}
              className="w-full bg-white rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Reason Description"
              onChange={handleChanges}
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
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
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default formOne;
