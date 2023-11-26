import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ReactComponent as DropDownArrow } from "./../../images/arrowDown.svg";

export default function Header() {
  const [dropDown, setDropDown] = useState(false)
  console.log(dropDown)

  return (
    <div className="header h-[68px] min-w-[1024px] flex items-center justify-evenly">
      <h2 className="font-[500] text-2xl text-[#464646]">Pay Central</h2>

      <form className="relative">
        <input
          placeholder="Search services, categories, industry..."
          type="text"
          className=" border-[1.2px] border-solid border-[#A0A0A0] w-[336px] p-[8px] pl-8"
        />
        <AiOutlineSearch
          size={24}
          className="absolute top-[50%] translate-y-[-50%] left-1 fill-[var(--main-color)] cursor-pointer"
        />
      </form>

      <div className="menuList">
        <ul>
          <li>Why PayCentral</li>
          <li>Product</li>
          <li>Resources</li>
          <li 
          onClick={(e)=> setDropDown(!dropDown)}
          className="flex items-center gap-[8px]">Categories <span><DropDownArrow /></span></li>
        </ul>
      </div>

      <div className="flex gap-[15px] registration items-center">
        <button className="flex items-center gap-[8px] text-[#1E1E1E]">
          Log in{" "}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.25 12C3.25 12.1989 3.32902 12.3897 3.46967 12.5303C3.61032 12.671 3.80109 12.75 4 12.75L13.25 12.75L13.25 11.25L4 11.25C3.586 11.25 3.25 11.586 3.25 12Z"
                fill="#1E1E1E"
              />
              <path
                d="M13.25 6.00007C13.2501 5.85183 13.2942 5.70696 13.3766 5.58374C13.459 5.46052 13.5761 5.3645 13.7131 5.30779C13.85 5.25107 14.0007 5.23622 14.1461 5.26511C14.2915 5.29399 14.4251 5.36532 14.53 5.47007L20.53 11.4701C20.6704 11.6107 20.7493 11.8013 20.7493 12.0001C20.7493 12.1988 20.6704 12.3894 20.53 12.5301L14.53 18.5301C14.4251 18.6348 14.2915 18.7062 14.1461 18.735C14.0007 18.7639 13.85 18.7491 13.7131 18.6924C13.5761 18.6356 13.459 18.5396 13.3766 18.4164C13.2942 18.2932 13.2501 18.1483 13.25 18.0001L13.25 6.00007Z"
                fill="#1E1E1E"
              />
            </svg>
          </div>
        </button>
        <Link to='/SignUpForm'>
          <button className="text-[#fff] bg-[#464646] p-[8px]"><a href="/SignUp">Sign Up</a></button>
        </Link>
        
      </div>
    </div>
  );
  
}
