import React from 'react'
import SignUpHeader from './SignUpHeader'

export default function SignUp() {
  return (
    <>
    <div className='max-w-[1024px] mx-auto'>
    <SignUpHeader/>

      <div className='flex w-[284px] justify-between mx-auto my-[3rem]'>
        <div className='bg-[#000] w-[56px] h-[6px] rounded-full'></div>
        <div className='bg-[#D9D9D9] w-[56px] h-[6px] rounded-full'></div>
        <div className='bg-[#D9D9D9] w-[56px] h-[6px] rounded-full'></div>
        <div className='bg-[#D9D9D9] w-[56px] h-[6px] rounded-full'></div>
      </div>

      <div>
        <h3>Welcome to PayCentral!👋🏽</h3>
      </div>
    </div>
    </>
  )
}
