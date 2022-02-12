import Navbar from "../components/navbar";
import FormOne from "../components/form-one";
import FormTwo from "../components/form-two";
import FormThree from "../components/form-three";
import FormFour from "../components/form-four";
import db from "../firebase";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
export default function Home() {
  const [current, setCurrent] = useState(1);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    money_need: "",
    time_duration: "month",
    time_duration_in_number: "",
    loan_rush: "",
    main_purpose: "",
    reason_description: "",
    your_industry: "",
    business_name: "",
    monthly_average_sales: "",
    do_you_invoice: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (formData) => {
    // e.preventDefault();
    db.collection("loans_applications")
      .add({
        ...formData,
      })
      .then((res) => {
        console.log(res);
        setCurrent(current + 1);
      });
  };
  const backButton = () => {
    if (current < 1 || current > 4) return;
    setCurrent(current - 1);
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="css-container">
          {current !== 4 && (
            <div className="sm:text-center">
              <h1 className="title-font font-medium text-3xl text-white">
                Slow-carb next level shoindcgoitch ethical authentic, poko
                scenester
              </h1>
              <p className="leading-relaxed mt-4">
                Poke slow-carb mixtape knausgaard, typewriter street art
                gentrify hammock starladder roathse. Craies vegan tousled etsy
                austin.
              </p>
            </div>
          )}

          {current === 1 ? (
            <FormOne
              setCurrent={setCurrent}
              setFormData={setFormData}
              formData={formData}
              backButton={backButton}
            />
          ) : current === 2 ? (
            <FormTwo
              setCurrent={setCurrent}
              setFormData={setFormData}
              formData={formData}
              backButton={backButton}
            />
          ) : current === 3 ? (
            <FormThree
              setCurrent={setCurrent}
              setFormData={setFormData}
              formData={formData}
              handleSubmit={handleSubmit}
              backButton={backButton}
            />
          ) : (
            <FormFour
              setCurrent={setCurrent}
              setFormData={setFormData}
              formData={formData}
              handleSubmit={handleSubmit}
              backButton={backButton}
            />
          )}
        </div>
      </section>
    </>
  );
}
