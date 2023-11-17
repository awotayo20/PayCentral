import { ReactComponent as IndustrySvg } from "../../../images/industry.svg"

export default function Industry() {
  return (
    <div>
        <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        </div>

        <div className="w-[608px] mx-auto p-[24px]">
          <div>
            <label htmlFor="" className="text-[24px] font-[600]">
              What is your industry?
            </label>
            <p className="text-[18px] font-[400] mb-[24px]">
              Select the industry relevant to your current role. We use your
              industry to shape your feed.
            </p>

            <select
              name="industry"
              id=""
              className="industry py-[6px] h-[56px] w-full outline-none bg-[#DEDEDE] text-[18px] font-[500]"
            >
              <option value="">
                <div>
                  <IndustrySvg />
                </div>{" "}
                Select your industry
              </option>
              <option value="">Engineering</option>
              <option value="">Product Management</option>
              <option value="">Design</option>
              <option value="">Sales</option>
              <option value="">Data Science</option>
              <option value="">Engineering</option>
            </select>
            <p className="text-[14px] font-[400]">
              E.g Tech, Finance, Marketing, Healthcare
            </p>
          </div>
        </div>
      </div>
  );
}
