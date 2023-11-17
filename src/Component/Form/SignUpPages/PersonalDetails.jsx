import React from "react";

export default function PersonalDetails({data, setData}) {
  return (
    <div>
        <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
        </div>

        <div className="w-[660px] text-[24px] mx-auto px-[24px]">
          <h2 className="text-[24px] font-[500]">
            Connect with our friendly community exploring and sharing payment
            innovations.
          </h2>
          <p className="text-[16px] font-[500] mt-4">
            Already have an account?{" "}
            <span className="text-[#312ECB] cursor-pointer">Login</span>
          </p>

          {/* form details */}
          <div className="my-[40px]">
            <form action="">
              <div className="flex flex-col gap-[30px] mb-[32px]">
                <div className="flex gap-[13px]">
                  <div>
                    <label
                      htmlFor="first name"
                      className="text-[14px] mb-[10px] font-[500]"
                    >
                      Frist name*
                    </label>
                    <input
                      type="text"
                      name="First name"
                      id=""
                      placeholder="Enter your first name"
                      className="h-[48px] px-[16px] border-[1.2px] border-black w-full text-[18px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Last name"
                      className="text-[14px] mb-[10px] font-[500]"
                    >
                      Last name*
                    </label>
                    <input
                      type="text"
                      name="Last name"
                      id=""
                      placeholder="Enter your first name"
                      className="h-[48px] px-[16px] border-[1.2px] border-black w-full text-[18px]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="Email address"
                    className="text-[14px] mb-[10px] font-[500]"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    name="email address"
                    id=""
                    placeholder="Enter your email address"
                    className="h-[48px] px-[16px] border-[1.2px] border-black w-full text-[18px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Password"
                    className="text-[14px] mb-[10px] font-[500]"
                  >
                    Password*
                  </label>
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Create a Password"
                    className="h-[48px] px-[16px] border-[1.2px] border-black w-full text-[18px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-[24px] h-[24px]"
                  />
                  <p className="text-[16px] font-[400]">
                    I agree to the{" "}
                    <span className="font-[500] underline cursor-pointer">
                      Terms Of Service
                    </span>{" "}
                    and{" "}
                    <span className=" cursor-pointer font-[500] underline">
                      Privacy Policy
                    </span>{" "}
                  </p>
                </div>
              </div>
              
              
            </form>
          </div>
        </div>
      </div>
  );
}
