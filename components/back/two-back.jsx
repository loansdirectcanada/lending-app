import React from "react";

const TwoBack = ({ setCurrent, formData }) => {
  return (
    <div className="container px-2 py-0 mx-auto flex p-0">
      <div className="  rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
        <div className="flex space-x-4 justify-center m-5">
          <h1 className="up_front_heading_ctsm">
            <span className="text-indigo-300">{formData.your_industry} </span>{" "}
            ,works in Carpentry{" "}
            <span className="text-indigo-300"> {formData.business_name} </span>,
            The past 6 months avg. monthly sales was $
            <span className="text-indigo-300">
              {formData.monthly_average_sales}
            </span>
            .
          </h1>
          <button
            type="button"
            className={`py-2 px-8 ml-2 mt-2 text-xs font-medium h-9 w-25  rounded-md border border-gray-400 bg-white text-gray-500  `}
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
