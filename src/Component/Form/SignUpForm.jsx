import React, { useState } from "react";
import Account_typePage from "./SignUpPages/Account_type";
import JobStatusPage from "./SignUpPages/Job_status";
import IndustryPage from "./SignUpPages/Industry";
import PersonalDetailsPage from "./SignUpPages/PersonalDetails";
import SignupHeader from "./SignUpPages/SignupHeader";

export default function SignUpForm() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    account_type: '',
    job_status: '',
    employment_type: '',
    job_role: '',
    country: '',
    industry: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    agree: ''

  })

  const titles = ["account_type", "job_Status", "industry", "personal_details"];

  const pageDisplay = () => {
    if (page == 0) {
      return <Account_typePage data={data} setData={setData} />;
    } else if (page == 1) {
      return <JobStatusPage data={data} setData={setData} />;
    } else if (page == 2) {
      return <IndustryPage data={data} setData={setData} />;
    } else {
      return <PersonalDetailsPage data={data} setData={setData} />;
    }
  };
  return (
    <>
      <SignupHeader />

      <form action="">

        <div className="w-[608px] mx-auto">{pageDisplay()}</div>
        
      </form>



    {page == titles.length - 1  ? 

    <div className="w-[660px] mx-auto flex my-[24px] justify-center">
        <button className='bg-black w-[608px] text-[20px] py-[8px] text-white ml-[50px]'>Join PayCentral</button>
    </div>
    
    
  :
  <div className="w-[560px] mx-auto flex justify-between my-[24px]">
    <button className="w-[117px]"> </button>

    <button
      onClick={() => {
        if (page == titles.length - 1) {
          alert("submitted");
        } else {
          setPage((currentPage) => currentPage + 1);
        }
      }}
      className="w-[128px] h-[40px] bg-[#151515] flex justify-center items-center cursor-pointer text-white text-[20px] font-[500] text-center"
    >
      Next
    </button>
  </div>
    }




      {/* {page == 0 || 1 || 2 ? (
        <div className="w-[560px] mx-auto flex justify-between my-[24px]">
          <button className="w-[117px]"> </button>

          <button
            onClick={() => {
              if (page == titles.length - 1) {
                alert("submitted");
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
            className="w-[128px] h-[40px] bg-[#151515] flex justify-center items-center cursor-pointer text-white text-[20px] font-[500] text-center"
          >
            {page == titles.length - 1 ? "Sam" : "Next"}
          </button>
        </div>
      ) : (
        <button className=""></button>
      )} */}

      {/* {page == titles.length - 1? <button className='w-[660px] p-[8px] bg-black text-white mx-auto'>Join PayCentral</button> : <button className='hidden w-[660px] p-[8px] bg-black text-white mx-auto'>Join PayCentral</button>} */}
    </>
  );
}
