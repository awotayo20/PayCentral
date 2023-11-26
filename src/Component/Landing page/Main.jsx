import { ReactComponent as SearchIcon } from "./../../images/searchIcon.svg";
import { ReactComponent as WorldGlobe } from "./../../images/WorldGlobe.svg";
import { ReactComponent as DropDown } from "./../../images/dropdown.svg";
import { ReactComponent as BookMark } from "./../../images/bookmark.svg";
import { ReactComponent as FillStar } from "./../../images/starFill.svg";
import { ReactComponent as EmptyStar } from "./../../images/starEmpty.svg";
import MoneyPointLogo from "./../../images/moneyPointLogo.png"
import HeartLandLogo from "./../../images/HeartLandLogo.png"
import StripeLogo from "./../../images/StripeLogo.png"
import HperswitchLogo from "./../../images/HperswitchLogo.png"
import SquareLogo from "./../../images/SquareLogo.png"
import Ng from "./../../images/ng.svg"
import Be from "./../../images/be.svg"
import Gh from "./../../images/gh.svg"
export default function Main() {
  return (
    <div className="">
      <div className="bg-[#FAFAFA] pt-[70px] px-[40px] flex flex-col gap-[50px]">
        <div className="w-[754px] flex flex-col gap-[32px]">
          <div className="w-[607px] font-Spline-Sans flex flex-col gap-[8px]">
            <h2 className="font-[700] text-[40px] leading-[48px]">
              Empower Your Global Transactions with PayCentral
            </h2>
            <p className="font-[500] text-[20px] leading-[28px] text-[#403A3A]">
              Curate and tailor payment methods based on your industry,
              preferences, and global transactions.
            </p>
          </div>
          <div className="flex gap-[16px] relative">
            <SearchIcon className="absolute top-[50%] translate-y-[-50%] left-[8px]" />
            <input
              type="text"
              placeholder="Search product, services, category, industry..."
              className="w-full pl-[40px] pr-[16px] py-[8px] border-[1.6px] border-[#4C4848] rounded-lg"
            />
            <button className="bg-white flex gap-[8px] items-center px-[16px] py-[8px] border-[1.6px] border-[#4C4848] rounded-lg">
              <WorldGlobe />
              Global
              <DropDown />
            </button>
          </div>
        </div>

        <div className="w-[754px] flex flex-col gap-[24px]">
          <div className="flex justify-between items-center font-Spline-Sans">
            <h2 className="font-[600] text-[24px]">
              Featured payment products
            </h2>
            <button className="flex gap-[8px] items-center px-[16px] py-[8px] border-[1.6px] border-[#4C4848] rounded-lg text-[14px]">
              Feature
              <DropDown />
            </button>
          </div>
          <PaymentMethod
          companyLogo={<img src={MoneyPointLogo} alt="Moneypoint"/>}
          companyName={'Moniepoint'}
          shortBio={'Powering the dreams of businesses in emerging markets'}
          />

          <PaymentMethod
          companyLogo={<img src={HeartLandLogo} alt="Moneypoint"/>}
          companyName={'Heartland Payment Processing'}
          shortBio={'Take Control of Your Crypto & NFTs with Core'}
          />
          
          <PaymentMethod
          companyLogo={<img src={StripeLogo} alt="Stripe"/>}
          companyName={'Stripe'}
          shortBio={'Stripe builds economic infrastructure for the internet'}
          />
          
          <PaymentMethod
          companyLogo={<img src={HperswitchLogo} alt="Hperswitch"/>}
          companyName={'Hperswitch'}
          shortBio={'Open Source Payments Switch. Fast, Reliable & Affordable.'}
          />
          
          <PaymentMethod
          companyLogo={<img src={SquareLogo} alt="Square"/>}
          companyName={'Square'}
          shortBio={'Take Control of Your Crypto & NFTs with Core'}
          />
          
          <PaymentMethod
          companyLogo={<img src={SquareLogo} alt="Square"/>}
          companyName={'Square'}
          shortBio={'Take Control of Your Crypto & NFTs with Core.'}
          />
          
        </div>
      </div>
    </div>
  );
}

export const PaymentMethod = ({companyLogo, companyName, shortBio}) => {
  return (
    <div className="p-[16px] bg-white flex justify-between">
      <div className="flex items-center gap-[16px]">
        <div className="w-[124px] h-[130px] bg-slate-400">{companyLogo}</div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[8px]">
            <div className="font-Spline-Sans flex flex-col gap-[4px]">
              <h2 className="font-[600] text-[18px] text-[#332C2D]">
                {companyName}
              </h2>
              <p className="font-[400] text-[16px] text-[#403A3A]">
                {shortBio}
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#F5F3F3] px-[8px] py-[4px] rounded-[16px] flex justify-center text-[#736D6D] text-[14px] font-[400]">
                POS
              </div>
              <div className="bg-[#F5F3F3] px-[8px] py-[4px] rounded-[16px] flex justify-center text-[#736D6D] text-[14px] font-[400]">
                Cash
              </div>
              <div className="bg-[#F5F3F3] px-[8px] py-[4px] rounded-[16px] flex justify-center text-[#736D6D] text-[14px] font-[400]">
                Virtual Card
              </div>
              <div className="text-[#736D6D] text-[14px] font-[400]">+3</div>
            </div>
          </div>
          <div className="flex gap-[4px]">
            <div className="w-[28px] h-[28px]"><img src={Ng} alt="Nigeria" /></div>
            <div className="w-[28px] h-[28px]"><img src={Gh} alt="Nigeria" /></div>
            <div className="w-[28px] h-[28px]"><img src={Be} alt="Nigeria" /></div>
            <h3 className="text-[#736D6D] text-[14px] font-[400]">+8</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <BookMark />

        <div className="p-[8px] rounded-[24px] bg-[#F9F9F9] flex items-center gap-[8px]">
          <div className="flex gap-[4px]">
            <FillStar />
            <FillStar />
            <FillStar />
            <FillStar />
            <EmptyStar />
          </div>
          <h3 className="text-[12px] text-[#303538] font-Spline-Sans font-[500]">3/5 (1.2K)</h3>
        </div>
      </div>
    </div>
  );
};
