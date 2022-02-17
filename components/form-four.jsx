import React from "react";

const formFour = ({ setCurrent, formData, setFormData }) => {
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handle_purpose = (value) => {
    setFormData({ ...formData, main_purpose: value });
  };

  return (
    <div className=" bg-white border border-[#d4d6d5] rounded-[8px]">
      <div className="max-w-[410px] mx-auto py-[40px]">
        <div className="w-full ">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://www.pngplay.com/wp-content/uploads/12/Congratulations-Gifs-PNG-Free-File-Download.gif"
              />
              <div className="text-center  w-full">
                <h1 className="text-[24px] font-lato font-semibold text-[#2A2C2B] mb-[15px]">
                  Congratulations Your Submission is successful
                </h1>
                <p className="mb-[15px] text-[12px] font-medium text-[#2A2C2B] font-lato">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  malesuada lorem maximus mauris scelerisque, at rutrum nulla
                  fermentum.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default formFour;
