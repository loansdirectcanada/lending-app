import React from "react";

const TwoBack = ({ setCurrent, formData }) => {
  return (
    <div className="container px-2 py-0 mx-auto flex p-0">
      <div className="  rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
        <div className="flex space-x-4 justify-between items-start mb-5">
          <h1 className="text-[24px] font-lato font-medium text-white mb-[15px]">
            Business industry
            <span className="text-[#2e2e2e]">{formData.your_industry} ,</span>
            Business name is
            <span className="text-[#2e2e2e]"> {formData.business_name},</span>
            And the past 6 months avg monthly sales was $
            <span className="text-[#2e2e2e]">
              {formData.monthly_average_sales}
            </span>
            .
          </h1>
          <button
            type="button"
            className={`inline-block w-full px-[16px] w-[75px] py-[8px] rounded-[4px] border border-[#fff] text-[#fff] text-[15px] font-medium leading-none transition hover:text-[#ffffff] hover:bg-red hover:border-[#051a8f] cursor-pointer  `}
            onClick={() => {
              setCurrent(2);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoBack;
