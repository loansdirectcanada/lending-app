import React from "react";

const Oneback = ({ setCurrent, formData }) => {
  return (
    <div className="container px-2 py-0 mx-auto flex p-0">
      <div className="  rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
        <div className="flex space-x-4 justify-center m-5">
          <h1 className="up_front_heading_ctsm">
            I’m looking for{" "}
            <span className="text-indigo-300">${formData.money_need}</span>,
            Loan duration
            <span className="text-indigo-300"> {formData.time_duration}</span>,
            and to be paid over
            <span className="text-indigo-300">
              {" "}
              {formData.time_duration_in_number} {formData.time_duration}
            </span>
          </h1>
          <button
            type="button"
            className={`py-2 px-8 ml-2 mt-2 text-xs font-medium h-9 w-25  rounded-md border border-gray-400 bg-white text-gray-500  `}
            onClick={() => {
              setCurrent(1);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oneback;
