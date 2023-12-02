import React from "react";
import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Mail } from "./../../images/mail.svg";
import { ReactComponent as ArrowRight } from "./../../images/arrow-right.svg";
import { useState } from "react";
import axios from "axios";

export const WaitingList = () => {
  

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullNameError: "",
    emailError: "",
  });

  const handleClick = async () => {
    let errors = {};
    let hasErrors = false;

    if (!formData.fullName.trim()) {
      errors.fullNameError = "Full Name is required";
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      errors.emailError = "Email is required";
      hasErrors = true;
    } else if (!formData.email.includes("@")) {
      errors.emailError = "Please enter a valid email";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
    } else {
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
        alert(response.data.message);
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
              <span style={{ color: "red" }}>{formErrors.fullNameError}</span>
            )}
        <div className="relative">
              <input
                type="email"
                
                placeholder="Enter email"
                className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
                required
              />
              <Mail className="absolute top-[10px] left-[16px]" />
            </div>
        {formErrors.emailError && (
              <span style={{ color: "red" }}>{formErrors.emailError}</span>
            )}
        <button 
              onClick={handleClick}
        
        className="flex justify-center items-center gap-[8px] w-full h-[44px] bg-[#E35669] text-white font-Spline-Sans font-[600] text-[18px]">
          {" "}
          <h3>Join the waitlist</h3> <ArrowRight />
        </button>
      </div>
    </div>
  );
};
