import Navbar from "../components/navbar";
import FormOne from "../components/form-one";
import FormTwo from "../components/form-two";
import FormThree from "../components/form-three";
import FormFour from "../components/form-four";
import db from "../firebase";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import Oneback from "../components/back/one-back";
import TwoBack from "../components/back/two-back";
import ThreeBack from "../components/back/three-back";
export default function Home() {
  const [current, setCurrent] = useState(1);
  const [summery, setSummery] = useState(2);
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
      <section className="py-11">
        <div className="max-w-[650px] mx-auto">
          {current === 1 && (
            <div className="mb-[60px]">
              <h1 className="text-[32px] leading-[42px] font-lato capitalize text-[#2A2C2B] font-medium mb-[10px]">
                Fill one simple form with four sections to see your funding
                options.
              </h1>
              <p className="text-[16px] leading-[24px] text-[#2A2C2B] font-lato font-normal">
                This will not impact your credit score.
              </p>
            </div>
          )}
          {current === 2 && (
            <Oneback setCurrent={setCurrent} formData={formData} />
          )}

          {current === 3 && (
            <>
              <Oneback setCurrent={setCurrent} formData={formData} />
              <TwoBack setCurrent={setCurrent} formData={formData} />{" "}
            </>
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
