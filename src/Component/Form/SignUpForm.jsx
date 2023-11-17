import React, { useState } from 'react'
import Account_type from './SignUpPages/Account_type'
import JobStatus from './SignUpPages/Job_status'
import Industry from './SignUpPages/Industry'
import PersonalDetails from './SignUpPages/PersonalDetails'
import SignupHeader from './SignUpPages/SignupHeader'

export default function SignUpForm() {

    const [page, setPage] = useState(0)

    const titles = ["account_type", "job_Status", "industry", "personal_details"]

    const pageDisplay = () => {
        if (page == 0) {
            return <Account_type />
        } else if (page == 1) {
            return <JobStatus />
        } else if (page == 2) {
            return <Industry />
        } else {
            return <PersonalDetails />
        }
    }
  return (
    <>
        <SignupHeader/>

        <form action="">

        <div className='w-[608px] mx-auto'>
            {pageDisplay()}
        </div>



        </form>


        




        {page == 0 || 1 || 2? 
        <div className='w-[560px] mx-auto flex justify-between my-[24px]'>
        <button className='w-[117px]'> </button>


        <button
            onClick={(e) => {
              if (page == titles.length - 1) {
                alert("submitted");
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
            className="w-[128px] h-[40px] bg-[#151515] flex justify-center items-center cursor-pointer text-white text-[20px] font-[500] text-center"
          >
            {page == titles.length - 1 ? "" : "Next"}
          </button>
        </div>
        
        
         : <button className='hidden'></button>}


        {/* {page == titles.length - 1? <button className='w-[660px] p-[8px] bg-black text-white mx-auto'>Join PayCentral</button> : <button className='hidden w-[660px] p-[8px] bg-black text-white mx-auto'>Join PayCentral</button>} */}
    </>
  )
}
