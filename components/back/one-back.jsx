import React from "react";

const Oneback = ({ setCurrent, formData }) => {
  return (
    <div className="container px-2 py-0 mx-auto flex p-0">
      <div className="  rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
        <div className="flex space-x-4 justify-between items-start m-5">
          <h1 className="text-[24px] font-lato font-medium text[#2a2c2b] mb-[15px]">
            I’m looking for{" "}
            <span className="text-[#304ff8]">${formData.money_need}</span>,
            Loan duration
            <span className="text-[#304ff8]"> {formData.time_duration}</span>,
            and to be paid over
            <span className="text-[#304ff8]">
              {" "}
              {formData.time_duration_in_number} {formData.time_duration}
            </span>
          </h1>
          <button
            type="button"
            className={`inline-block w-full w-[75px] px-[16px] py-[8px] rounded-[4px] border border-[#7d8380]  text-[#535755] text-[15px] font-medium leading-none transition hover:text-[#ffffff] hover:bg-[#051a8f] hover:border-[#051a8f] cursor-pointer  `}
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
