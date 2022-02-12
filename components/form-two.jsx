import React from "react";

const formOne = ({ setCurrent, formData, setFormData, backButton }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="container px-5 py-24 mx-auto flex p-10">
        <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2
            className="text-gray-500 text-lg mb-1 font-medium title-font"
            onClick={backButton}
          >
            <i className="fa-solid fa-arrow-left-long"></i> Back
          </h2>

          <div className="relative mb-4">
            <label
              htmlFor="text"
              className="leading-7 text-md  text-black font-medium"
            >
              What best describes your industry?
            </label>
            <input
              type="text"
              id="text"
              name="your_industry"
              className="w-full bg-white rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="e.g. Retail"
              value={formData.your_industry}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="text"
              className="leading-7 text-md  text-black font-medium"
            >
              What’s the name of your business?
            </label>
            <input
              type="text"
              id="text"
              name="business_name"
              className="w-full bg-white rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="e.g. My Business"
              value={formData.business_name}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="text"
              className="leading-7 text-md  text-black font-medium"
            >
              What’s the average monthly sales?
            </label>
            <input
              type="text"
              id="text"
              name="monthly_average_sales"
              className="w-full bg-white rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="e.g. $1,000,000"
              value={formData.monthly_average_sales}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-relaxed text-md mb-5 text-black font-medium"
            >
              Do you invoice customers?
            </label>
            <div className="flex flex-wrap mt-4 align-middle">
              <button
                type="button"
                className={`py-2.5 px-5  text-sm font-medium  rounded-lg border border-gray-200 ${
                  formData.do_you_invoice === "yes"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-900"
                } `}
                onClick={() =>
                  setFormData({ ...formData, do_you_invoice: "yes" })
                }
              >
                Yes
              </button>
              <button
                type="button"
                className={`py-2.5 px-5  text-sm font-medium  rounded-lg border border-gray-200 ${
                  formData.do_you_invoice === "no"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-900"
                } `}
                onClick={() =>
                  setFormData({ ...formData, do_you_invoice: "no" })
                }
              >
                No
              </button>
            </div>
          </div>

          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
            disabled={
              !formData.your_industry ||
              !formData.business_name ||
              !formData.monthly_average_sales ||
              !formData.do_you_invoice
            }
            onClick={() => {
              setCurrent(3);
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
