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
      <div className="container px-2 py-10 mx-auto flex p-10">
        <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div className="parent_wrap">
            <i className="fa-solid fa-calendar-day col_icon"></i>
            <div className="wrap_con">
              <span className="up_font">Section Two</span>
              <span className="down_font">Business details</span>
            </div>
          </div>
          <div className="mainWrap_con">
            <div className="relative mb_Bottom">
              <h5 htmlFor="text" className="field_title">
                What best describes your industry?
              </h5>

              <div className="field_con rounded border border-gray-300">
                <i className="fa-solid fa-align-center col_icon_Doll "></i>
                <input
                  type="text"
                  id="text"
                  name="your_industry"
                  className="w-full bg-white   focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="e.g. Retail"
                  value={formData.your_industry}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5 htmlFor="text" className="field_title">
                What’s the name of your business?
              </h5>
              <input
                type="text"
                id="text"
                name="business_name"
                className="w-full bg-white rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Start typing the business name, entity name or ABN..."
                value={formData.business_name}
                onChange={handleChange}
              />
            </div>
            <div className="relative mb_Bottom">
              <h5 htmlFor="text" className="field_title">
                What’s the average monthly sales?
              </h5>
              <p className="field_subtitle text-gray-600 text-xs">
                Lenders need to know the average monthly sales, over the last 6
                months.
              </p>
              <div className="field_con rounded border border-gray-300">
                <i className="fa-solid fa-dollar-sign col_icon_Doll "></i>
                <input
                  type="number"
                  id="text"
                  name="monthly_average_sales"
                  className="w-full bg-white   focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formData.monthly_average_sales}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5 htmlFor="text" className="field_title">
                Do you invoice customers?
              </h5>
              <div className="flex flex-wrap mt-4 align-middle">
                <button
                  type="button"
                  className={`py-2 px-8 ml-2 mt-2 text-xs font-medium  rounded-md border border-gray-400 ${
                    formData.do_you_invoice === "yes"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-500"
                  } `}
                  onClick={() =>
                    setFormData({ ...formData, do_you_invoice: "yes" })
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`py-2 px-8 ml-2 mt-2 text-xs font-medium  rounded-md border border-gray-400 ${
                    formData.do_you_invoice === "no"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-500"
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
              className="text-white bg-indigo-500 border-0 py-2 w-full px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
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
              Continue to section three
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default formOne;
