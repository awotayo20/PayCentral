import { ReactComponent as Logo } from "./../../images/logo.svg";
import { ReactComponent as DropDownArrow } from "./../../images/dropdown.svg";
import { ReactComponent as RightArrow } from "./../../images/arrow-right.svg";
import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Mail } from "./../../images/mail.svg";
import { ReactComponent as ArrowRight } from "./../../images/arrow-right.svg";
import { ReactComponent as CancelButton } from "./../../images/CancelButton.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Header() {
  const [waitlist, setWaitlist] = useState(false);

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
      <div className="sm:w-full lg:min-w-[1024px] h-[80px] flex items-center justify-around">
        <div className="flex gap-[16px]">
          <Logo />
          <h2 className="hidden lg:block font-Spline-Sans text-[24px] font-[700] text-[#E35669]">
            PayCentral
          </h2>
        </div>

        <div className="flex items-center gap-[32px] text-[16px] font-[500] text-[#332C2D]">
          <div className="p-[8px]">Why PayCentral</div>
          <div className="flex items-center gap-[8px] p-[8px]">
            Categories{" "}
            <span>
              <DropDownArrow />
            </span>
          </div>
        </div>

        <Link to="">
          <div
            className="bg-[#E35669] text-white px-[16px] py-[8px] flex gap-[8px]
        "
            onClick={(e) => {
              setWaitlist(!waitlist);
            }}
          >
            <h2>Join the waitlist</h2>
            <span>
              <RightArrow />
            </span>
          </div>
        </Link>
      </div>
      {waitlist == false ? (
        ""
      ) : (
        <div
          onClick={(e) => setWaitlist(!waitlist)}
          className="fixed z-20 top-0 bottom-0 bg-black/50 w-full duration-150"
        ></div>
      )}

      <div
        className={
          waitlist
            ? "fixed z-30 left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] duration-300"
            : "fixed z-30 left-[300%] translate-x-[-50%] translate-y-[-50%] top-[50%] duration-300"
        }
      >
        <CancelButton
          onClick={(e) => setWaitlist(!waitlist)}
          className="absolute right-3 top-3 cursor-pointer"
        />
        <div className="bg-[#F5F3F3] p-[48px] text-center">
          <h2 className="font-[600] text-[29px] font-Spline-Sans">
            👋🏽 Join the waitlist for PayCentral
          </h2>
          <p className="w-[457px]">
            Secure your spot on our exclusive waitlist for early access to the
            finest payment curation experience.
          </p>
          <div className="flex flex-col gap-[8px] relative mt-[24px] px-[16px]">
            <input
              type="text"
              onChange={(e) => {
                e.preventDefault();

                setFormData({ ...formData, fullName: e.target.value });
              }}
              placeholder="Full Name"
              className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
            />
            {formErrors.fullNameError && (
              <span style={{ color: "red" }}>{formErrors.fullNameError}</span>
            )}
            <User className="absolute top-[9px] left-[32px]" />
            <div className="relative">
              <input
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
              className="flex justify-center items-center gap-[8px] w-full h-[44px] bg-[#E35669] text-white font-Spline-Sans font-[600] text-[18px]"
            >
              {" "}
              <h3>Join the waitlist</h3> <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
