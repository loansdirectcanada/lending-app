import React, { useState } from "react";
import Navbar from "../components/navbar";
import Scrollspy from 'react-scrollspy';
import db from "../firebase";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Oneback from "../components/back/one-back";
import TwoBack from "../components/back/two-back";

export default function Session() {
  const [current, setCurrent] = useState(1);
  const [summery, setSummery] = useState(2);
  const [hideBtnOtp, setHideBtnOtp] = useState(false);
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
        axios
          .post(
            `https://imperial-capital.herokuapp.com/email/${formData.email}/${formData.first_name}`
          )
          .then((res) => {
            setCurrent(current + 1);
            setHideBtnOtp(false);
          });
      });
  };
  const backButton = () => {
    if (current < 1 || current > 4) return;
    setCurrent(current - 1);
  };
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handle_purpose = (value) => {
    setFormData({ ...formData, main_purpose: value });
  };
  const [show, setShow] = useState("");
  return (
    <>
      <Navbar />
      <div className="session-area py-11">
          <div className="container md:max-w-[1170px] mx-auto">
            <div className="py-[25px] border-b border-[#DEDEDE] mb-[35px]">
              <h2 className="text-[32px] font-medium text-[#ffffff] capitalize">Non-profit Application Form</h2>
              <p className="text-[14px] text-[#f9f9f9]">Summer 2022</p>
            </div>
            <div className="flex gap-8">
              <div className="w-2/3 p-11 bg-[#ffffff]">
                <form action="#">
                  <section id="Organization" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">1. ORGANIZATION</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="Organization" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >  Organization name:</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "Organization" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="Organization"
                          name="Organization"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.Organization}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="Organizationurl" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > Organization url, if any:</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "Organizationurl" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="Organizationurl"
                          name="Organizationurl"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.Organizationurl}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="productwork" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > If you have a demo, what's the url? Demo can be anything that shows us how the product works. Usually that's a video or screen recording.</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "productwork" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="productwork"
                          name="productwork"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.productwork}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="Describe" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > Describe your organization in 50 characters or less.</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "Describe" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="Describe"
                          name="Describe"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.Describe}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="organization" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > What will your organization do?</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "organization" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="organization"
                          name="organization"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.organization}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="basedyc" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > Where do you live now, and where would the organization be based after YC?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "basedyc" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="basedyc"
                          name="basedyc"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.basedyc}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                  </section>
                  <section id="Contact" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">2. CONTACT</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="Organization" className="block text-[16px] font-lato font-medium text-[#000000] " >  Personal email address of the founder who is filling out this application:</label>
                      <p className="text-[14px] text-[#555555] mb-[10px]">Please enter an email address that you check often and that you will have access to for a long time.</p>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "Organization" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="Organization"
                          name="Organization"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.Organization}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="phone" className="block text-[16px] font-lato font-medium text-[#000000] " >  Phone number:</label>
                      <p className="text-[14px] text-[#555555] mb-[10px]">International numbers will be called with WhatsApp.</p>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "phone" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.phone}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                      <p className="p-[12px] my-[15px] bg-[rgba(0,0,0,0.03)] text-[#DC322F] text-[12px] font-normal">Your founder profile is incomplete. Please enter your email address.</p>
                    </div>
                  </section>
                  <section id="Founders" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">3. Founders</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <p className="p-[12px] my-[15px] bg-[rgba(0,0,0,0.03)] text-[16px] font-lato font-medium text-[#000000]">Please provide the personal email addresses of the other cofounders in the organization. No need to add yours again.</p>
                      <label htmlFor="videoGuidelines" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px]" >Please enter the url of a 1 minute unlisted (not private) YouTube video introducing the founder(s). This video is an important part of the application. <a href="#" className="text-[#268bd2]">(Follow the Video Guidelines.)</a></label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "videoGuidelines" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="videoGuidelines"
                          name="videoGuidelines"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.videoGuidelines}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="team" className="block text-[16px] font-lato font-medium text-[#000000] " >How many founders are on the team?</label>
                      <p className="text-[14px] text-[#555555] mb-[10px]">(Fill out this number of founder profiles)</p>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "team" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="team"
                          name="team"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.team}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                        </select>
                      </div>
                    </div>
                  </section>
                  <section id="Category" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">4. Category</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="category" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >Which category best applies to your organization?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "category" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="category"
                          name="category"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.category}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="no">no</option>
                          <option value="yes">yes</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="located" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >Where will most of your initial users be located?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "located" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="located"
                          name="located"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.located}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="no">no</option>
                          <option value="yes">yes</option>
                        </select>
                      </div>
                    </div>
                  </section>
                  <section id="Progress" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">5. Progress</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="along" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > How far along are you?</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "along" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="along"
                          name="along"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.along}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="working" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > How long have each of you been working on this? How much of that has been full-time? Please explain.</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "working" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="working"
                          name="working"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.working}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="product" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >Are people using your product?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "product" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="product"
                          name="product"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.product}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="yes">yes</option>
                          <option value="no">no</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="revenue" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >Do you have revenue?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "revenue" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="revenue"
                          name="revenue"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.revenue}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="yes">yes</option>
                          <option value="no">no</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="previous" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > If you are applying with the same idea as a previous batch, did anything change? If you applied with a different idea, why did you pivot and what did you learn from the last idea?</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "previous" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="previous"
                          name="previous"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.previous}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="accelerator" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > If you have already participated or committed to participate in an incubator, "accelerator" or "pre-accelerator" program, please tell us about it.</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "accelerator" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="accelerator"
                          name="accelerator"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.accelerator}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                  </section>
                  <section id="Idea" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">6. Idea</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="expertise" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > Why did you pick this idea to work on? Do you have domain expertise in this area? How do you know this is going to work?</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "expertise" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="expertise"
                          name="expertise"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.expertise}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="understand" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" > What do you understand about your space that other organizations just don't get?</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "understand" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="understand"
                          name="understand"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.understand}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="team" className="block text-[16px] font-lato font-medium text-[#000000] " >How do or will you make money? How much could you make?</label>
                      <p className="text-[14px] text-[#555555] mb-[10px]">(We realize you can't know precisely, but give your best estimate.)</p>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "team" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="team"
                          name="team"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.team}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                  </section>
                  <section id="Formation" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">7. Formation</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="formed" className="block text-[16px] font-lato font-medium text-[#000000] " >Have you formed ANY legal entity yet?</label>
                      <p className="text-[14px] text-[#555555] mb-[10px]">This may be in the US, in your home country or in another country.</p>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "formed" && "is-focus"
                        }`}
                      >
                        <select 
                          id="formed"
                          name="formed"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.formed}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="no">no</option>
                          <option value="yes">yes</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="investors" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >Have you issued stock to investors?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "investors" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="investors"
                          name="investors"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.investors}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="yes">yes</option>
                          <option value="no">no</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="raised" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >Have you raised money using crowdfunding?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "raised" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="raised"
                          name="raised"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.raised}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="yes">yes</option>
                          <option value="no">no</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="spend" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >How much money do you spend per month?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "spend" && "is-focus"
                        }`}
                      >
                        <i className="fa-solid fa-dollar-sign absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] "></i>
                        <input
                          type="text"
                          id="spend"
                          name="spend"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.spend}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="company" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >How much money does your company have in the bank now?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "company" && "is-focus"
                        }`}
                      >
                        <i className="fa-solid fa-dollar-sign absolute left-[10px] top-[50%] -translate-y-[50%] text-[10px] text-[#a8acaa] "></i>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.company}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="runway" className="block text-[16px] font-lato font-medium text-[#000000] " >  How long is your runway?</label>
                      <p className="text-[14px] text-[#555555] mb-[10px]">(e.g. 5 months)</p>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "runway" && "is-focus"
                        }`}
                      >
                        <input
                          type="text"
                          id="runway"
                          name="runway"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.runway}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}
                        />
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="revenue" className="block text-[16px] font-lato font-medium text-[#000000] mb-[10px] " >Have you obtained your 501(c)(3) tax-exempt status yet?</label>
                      <div
                        className={`relative rounded-[4px] h-[50px] border-animation ${
                          show === "revenue" && "is-focus"
                        }`}
                      >
                        
                        <select 
                          id="revenue"
                          name="revenue"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.revenue}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")}>
                          <option value="yes">yes</option>
                          <option value="no">no</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="formation" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >Please provide any other relevant information about the structure or formation of the company.</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "formation" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="formation"
                          name="formation"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.formation}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>
                  </section>
                  <section id="Legal" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">8. Legal</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="nonFounder" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >Who writes code, or does other technical work on your product? Was any of it done by a non-founder? Please explain.</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "nonFounder" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="nonFounder"
                          name="nonFounder"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.nonFounder}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>  
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="government" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >Have you received any government grants? If so, list the grants you've received, including the terms of the grant, who it's from, what it covers, and when you received it.</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "government" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="government"
                          name="government"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.government}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>  
                  </section>
                  <section id="Others" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">9. OTHERS</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="considered" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >If you had any other ideas you considered applying with, please list them. One may be something we've been waiting for.</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "considered" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="considered"
                          name="considered"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.considered}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>  
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="discovered" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >Please tell us something surprising or amusing that one of you has discovered.</label>
                      <p className="text-[14px] text-[#555555] mb-[10px]">(The answer need not be related to your project.)</p>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "discovered" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="discovered"
                          name="discovered"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.discovered}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div>  
                  </section>
                  <section id="Curious" className="border-b border-[#DEDEDE] py-[35px]">
                    <h3 className="text-[20px] capitalize font-semibold text-[#F0652F] mb-[10px]">10. Curious</h3>
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="encourage" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >What convinced you to apply to Y Combinator? Did someone encourage you to apply?</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "encourage" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="encourage"
                          name="encourage"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.encourage}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div> 
                    <div className="relative mb-[20px] last:mb-0">
                      <label htmlFor="Combinator" className="block text-[16px] font-lato font-medium text-[#000000] mb-[5px]" >How did you hear about Y Combinator?</label>
                      <div
                        className={`relative rounded-[4px] h-[100px] border-animation ${
                          show === "Combinator" && "is-focus"
                        }`}
                      >
                        <textarea 
                          id="Combinator"
                          name="Combinator"
                          className="w-full h-full px-[20px] focus:border-0 focus:outline-0 bg-transparent"
                          value={formData.Combinator}
                          onChange={handleChanges}
                          onFocus={(e) => setShow(e.target.name)}
                          onBlur={(e) => setShow("")} rows="4" cols="50">
                        </textarea>
                      </div>
                    </div> 
                    <p className="text-[16px] landscape-[26px] text-[#000000] mb-[15px]">Please ensure that this application is complete and all founders have filled out their profiles before submitting your application for review. The answer to this question must match the number of profiles filled.</p>
                    <p className="text-[16px] landscape-[26px] text-[#000000] mb-[15px]">Once you submit your application you will not be able to edit it. It will be reviewed, regardless of whether the deadline has passed or not.</p>
                    <p className="text-[16px] landscape-[26px] font-medium text-[#dc322f] mb-[30px]">Applications must have at least one founder to be submitted.Founder intro must be a valid YouTube video URL. Number of founders stated does not match number of profiles filled.</p>
                    <button className="px-[10px] py-[6px] rounded-[7px] text-[18px] capitalize font-medium bg-[#FDA942] text-[#ffffff] mr-2">Save for later</button>
                    <button className="px-[10px] py-[6px] rounded-[7px] text-[18px] capitalize font-medium bg-[#6CC544] text-[#ffffff]">Submit  Application</button>
                  </section>
              </form>
            </div>
            <div className="w-1/3">
              <div className="sticky top-0 p-5 b-[#ffffff] border border-[#E3E3DC] bg-[#ffffff]">
                <h3 className="text-[15px] text-[#999999] capitalize mb-[10px]">Contents</h3>
                <Scrollspy items={ ['Organization', 'Contact', 'Founders', 'Category', 'Progress','Idea','Formation','Others', 'Legal','Curious'] } className="mb-[15px] list-decimal pl-[20px]" currentClassName="is-current">
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Organization">Organization</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Contact">Contact</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Founders">Founders</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Category">Category</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Founders">Progress</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Idea">Idea</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Founders">Formation</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Legal">Legal</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Others">Others</a></li>
                  <li><a className="block rounded-[5px] px-[5px] py-[4px] text-[#555] text-[15px] font-semibold capitalize hover:bg-[#a3cfee]" href="#Curious">Curious</a></li>
                </Scrollspy>
                <h3 className="text-[15px] text-[#999999] capitalize mb-[10px]">Elsewhere</h3>
                <ul className="list-disc pl-[20px] text-[15px] font-semibold capitalize ">
                  <li className="mb-[5px] last:mb-0"><a className="text-[#268bd2]" href="#">How to Apply Successfully</a></li>
                  <li className="mb-[5px] last:mb-0"><a className="text-[#268bd2]" href="#">Frequently Asked Questions</a></li>
                  <li className="mb-[5px] last:mb-0"><a className="text-[#268bd2]" href="#">About Y Combinator</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
