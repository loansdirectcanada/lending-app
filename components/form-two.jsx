import React, { useState } from "react";

const FormOne = ({ setCurrent, formData, setFormData, backButton }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [show, setShow] = useState("");
  return (
    <div>
      <div className="container">
        <div className="bg-white border border-[#d4d6d5] rounded-[8px] p-5">
          <div className="flex px-[24px] py-[16px] border-b border-[#f2f2f2]">
            <i className="fa-solid fa-calendar-day fa-solid fa-money-bill col_icon mr-3"></i>
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
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] mb-[15px]"
              >
                What best describes your industry?
              </h5>

              <div
                className={`relative rounded-[4px] h-[50px] border-animation ${
                  show === "your_industry" && "is-focus"
                }`}
              >
                <i className="fa-solid fa-align-center absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa]"></i>
                <input
                  type="text"
                  id="text"
                  name="your_industry"
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  placeholder="e.g. Retail"
                  value={formData.your_industry}
                  onChange={handleChange}
                  onFocus={(e) => setShow(e.target.name)}
                  onBlur={(e) => setShow("")}
                />
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] mb-[15px]"
              >
                What’s the name of your business?
              </h5>
              <div
                className={`relative rounded-[4px] h-[50px] border-animation ${
                  show === "business_name" && "is-focus"
                }`}
              >
                <input
                  type="text"
                  id="text"
                  name="business_name"
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  placeholder="Start typing the business name, entity name or ABN..."
                  value={formData.business_name}
                  onChange={handleChange}
                  onFocus={(e) => setShow(e.target.name)}
                  onBlur={(e) => setShow("")}
                />
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B]"
              >
                What’s the average monthly sales?
              </h5>
              <p className="mb-[15px] text-[12px] font-medium text-[#2A2C2B] font-lato">
                Lenders need to know the average monthly sales, over the last 6
                months.
              </p>
              <div
                className={`relative rounded-[4px] h-[50px] border-animation ${
                  show === "monthly_average_sales" && "is-focus"
                }`}
              >
                <i className="fa-solid fa-dollar-sign absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa]"></i>
                <input
                  type="number"
                  id="text"
                  name="monthly_average_sales"
                  className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                  value={formData.monthly_average_sales}
                  onChange={handleChange}
                  onFocus={(e) => setShow(e.target.name)}
                  onBlur={(e) => setShow("")}
                />
              </div>
            </div>
            <div className="relative mb_Bottom">
              <h5
                htmlFor="text"
                className="text-[20px] font-lato font-semibold text-[#2A2C2B] mb-[15px]"
              >
                Do you invoice customers?
              </h5>
              <div className="flex flex-wrap mt-4 align-middle">
                <button
                  type="button"
                  className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                    formData.do_you_invoice === "yes"
                      ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                      : "bg-transparent text-[#7d8380]"
                  } `}
                  onClick={() =>
                    setFormData({ ...formData, do_you_invoice: "yes" })
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`text-[12px] px-[16px] py-[8px] rounded-[4px] min-w-[80px] border border-[#7d8380] leading-none text-[#7d8380] m-[4px] ${
                    formData.do_you_invoice === "no"
                      ? "bg-[#ec3b37] text-[#ffffff] border-[#ec3b37]"
                      : "bg-transparent text-[#7d8380]"
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
              className="block w-full px-[10px] py-[12px] rounded-[4px] bg-[#ec3b37] text-[#ffffff] text-[15px] font-semibold transition hover:text-[#ffffff] hover:bg-[#ff6c6a] cursor-pointer"
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

export default FormOne;
