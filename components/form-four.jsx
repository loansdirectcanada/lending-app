import React from "react";

const formFour = ({ setCurrent, formData, setFormData }) => {
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handle_purpose = (value) => {
    setFormData({ ...formData, main_purpose: value });
  };

  return (
    <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md mb-10">
      <div className="flex flex-wrap mb-6">
        <div className="w-full ">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://www.pngplay.com/wp-content/uploads/12/Congratulations-Gifs-PNG-Free-File-Download.gif"
              />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Congratulations Your Submission is successful
                </h1>
                <p className="mb-8 leading-relaxed">
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
