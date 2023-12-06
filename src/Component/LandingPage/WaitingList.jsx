import React from "react";
import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Mail } from "./../../images/mail.svg";
import { ReactComponent as ArrowRight } from "./../../images/arrow-right.svg";
import { useState } from "react";
import axios from "axios";
import { ReactComponent as CancelBotton } from "./../../images/CancelButton.svg"


export const WaitingList = () => {
  const [showSuccess, setShowSuccess ] = useState(false)
  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullNameError: '',
    emailError: '',
  });

  const handleClick = async () => {
    const validate = () => {
      let errors = {};
      let hasErrors = false;
  
      if (!formData.fullName.trim()) {
        errors.fullNameError = 'Full Name is required';
        hasErrors = true;
      }
  
      if (!formData.email.trim()) {
        errors.emailError = 'Email is required';
        hasErrors = true;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.emailError = 'Please enter a valid email';
        hasErrors = true;
      }
  
      setFormErrors(errors);
      return !hasErrors;
    };

    if (validate()) {
      try {
        const csrfToken =
          "di94qpGDLYi5pCqd9S3osQL4qdfLKmOzpntUx2n0aoXHSoAUS2l9kEhWGZ5MmvEO";
        const data = {
          full_name: `${formData.fullName}`,
          email: `${formData.email}`,
        };

        const headers = {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        };

        const response = await axios.post(
          "https://davidinmichael.pythonanywhere.com/account/waitlist/",
          data,
          {
            headers: headers,
          }
        );
        setShowSuccess(true)
        console.log("Response:", response.data.message);
      } catch (error) {
        console.error(error.message);
        // alert("wait list with this email already exists.")
        if (error.message == "Request failed with status code 400") {
          alert("wait list with this email already exists.");
        } else {
          alert("Network Error");
        }
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-[8px] relative">
        <input
          onChange={(e) => {
            e.preventDefault();

            setFormData({ ...formData, fullName: e.target.value });
          }}
          type="text"
          placeholder="Full Name"
          className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
        />
        <User className="absolute top-[9px] left-[16px]" />
        {formErrors.fullNameError && (
            <span className="text-[12px] text-[#912018] font-Spline-Sans font-[400] px-[16px] text-left">{formErrors.fullNameError}</span>
          )}
        <div className="relative">
              <input
                type="email"
                onChange={(e) => {
                  e.preventDefault();
      
                  setFormData({ ...formData, email: e.target.value });
                }}
                placeholder="Enter email"
                className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
                required
              />
              <Mail className="absolute top-[10px] left-[16px]" />
            </div>
            {formErrors.emailError && (
            <span className="text-[12px] text-[#912018] font-Spline-Sans font-[400] px-[16px] text-left">{formErrors.emailError}</span>
          )}
        <button 
              onClick={handleClick}
        
        className="flex justify-center items-center gap-[8px] w-full h-[44px] bg-[#E35669] text-white font-Spline-Sans font-[600] text-[18px]">
          {" "}
          <h3>Join the waitlist</h3> <ArrowRight />
        </button>
      </div>



      {showSuccess == true && (
        <div className='fixed top-0 bg-black/50 h-full w-full z-[500] left-0'>
        <div className='px-[16px] py-[24px] lg:p-[48px] bg-[#E5E1E1] flex flex-col gap-[16px] text-center w-[98%] max-w-[588px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
         <div className="flex justify-end">
             <CancelBotton 
             onClick={(e)=>{
              e.preventDefault()

              setShowSuccess(false)
             }}
             className="cursor-pointer"/>
             
         </div>
         <div>
             <h2 className="text-[40px] font-Spline-Sans font-[500] text-center">👍🏽</h2>
         </div>
         <div>
         <h3 className="text-[24px] lg:text-[32px] font-[700] font-Spline-Sans">We have added you to our waiting list!</h3>
         <p className="text-[#403A3A] text-[15px] font-Spline-Sans">We’ll let you know when PayCentral is ready</p>
         </div>
         <input type="text" value={formData.email} className="px-[16px] py-[8px] bg-white w-full border h-[44px] text-[#403A3A] font-Spline-Sans text-[14px]"/>
         <p className="text-[14px] font-Spline-Sans text-[#736D6D] ">PayCentral is coming to your internet soon.</p>
        </div>
 
     </div>
      )}
    </div>
  );
};
