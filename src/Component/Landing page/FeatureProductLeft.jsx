import { Link } from "react-router-dom";
import { ReactComponent as Bookmark } from "./../../images/bookmark.svg";


export default function FeatureProductLeft(props) {
  return (
    <>
      <div className="p-4 border-[1px] border-solid border-[#EEE]">
        <div className="flex justify-between">


          <div className="flex gap-4 items-center">
            <div className="w-[120px] h-[123px] bg-[#D9D9D9]">
              {props.companyLogo}
            </div>
            <div className=" flex flex-col gap-3">
              <div>
              <Link to={props.Link}>

                <h2 className="font-Spline-Sans font-[600] text-[18px]">
                  {props.companyName}
                </h2>
                <p className="font-Spline-Sans text-[16px] font-[400] text-[#6A6A6A] w-full">
                  {props.shortBio}
                </p>
                </Link>
              </div>

              <div className="flex items-center gap-1">
                {props.paymentMethods}
              </div>

              {props.countriesSupported}
            </div>
          </div>

          

          <div className="w-[85px] flex flex-col gap-10 justify-between items-end">
            <div className="w-[30px] h-[32px] flex items-center justify-center">
              <Bookmark/>
            </div>

            {props.ratings}
          </div>
        </div>
      </div>
    </>
  );
}
