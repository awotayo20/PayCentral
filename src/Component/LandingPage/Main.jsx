import { ReactComponent as SearchIcon } from "./../../images/searchIcon.svg";
import { ReactComponent as WorldGlobe } from "./../../images/WorldGlobe.svg";
import { ReactComponent as DropDown } from "./../../images/dropdown.svg";
import { ReactComponent as ArrowRight } from "./../../images/arrow-right.svg";
import { ReactComponent as BookMark } from "./../../images/bookmark.svg";
import { ReactComponent as FillStar } from "./../../images/starFill.svg";
import { ReactComponent as EmptyStar } from "./../../images/starEmpty.svg";
import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Mail } from "./../../images/mail.svg";
import { ReactComponent as MapPin } from "./../../images/map-pin.svg";
import { ReactComponent as Calendar } from "./../../images/calendar.svg";
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
      <div className="bg-[#F5F3F3]">
        <div className="w-[492px]">
        <Waitlist />
        <DisplayCard/>
        <Rating/>
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





export const Waitlist = () => {
  return (
    <div className="w-[492px] px-[16px] py-[24px] flex flex-col gap-[16px] mb-[10px] bg-white">
      <div className="w-[457px]">
      <h2 className="font-Spline-Sans my-[8px] font-[600] text-[20px]">👋🏽 Join the waitlist</h2>
      <p className="font-Spline-Sans font-[400] text-[16px] text-[#736D6D] leading-[24px]">Secure your spot on our exclusive waitlist for early access to the finest payment curation experience.</p>
      </div>
      <div className="flex flex-col gap-[8px] relative">
        <input type="text" placeholder="Full Name" className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"/>
        <User className="absolute top-[9px] left-[16px]"/>
        <input type="email" placeholder="Enter email" className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"/>
        <Mail className="absolute bottom-[62px] left-[16px]"/>
        <button className="flex justify-center items-center gap-[8px] w-full h-[44px] bg-[#E35669] text-white font-Spline-Sans font-[600] text-[18px]"> <h3>Join the waitlist</h3>{" "}<ArrowRight/></button>
      </div>
    </div>
  )
}





export const DisplayCard = () => {
  return (
    <div className="w-full py-[32px] px-[24px] bg-white">
      <div className="flex flex-col items-center justify-center mb-[24px]">
        <img src={HeartLandLogo} alt="" className="w-[124px] h-[130px]"/>
        <h2 className="text-[#403A3A] text-[24px] font-[600] leading-[32px] mt-[16px] mb-[8px]">Heartland Payment Processing</h2>
        <p className="text-[#4C4848] font-[400] text-[16px] font-Spline-Sans mb-[6px]">Heartland Payment Systems</p>
        <div className="flex gap-[6px]">
          <div className="px-[8px] bg-[#F3F3F3] h-[28px] flex gap-[4px] justify-center items-center rounded-full">
          <MapPin/>
          <h2 className="font-[500] text-[12px] leading-[20px]">United States</h2>
          </div>

          <div className="px-[8px] bg-[#F3F3F3] h-[28px] flex gap-[4px] justify-center items-center rounded-full">
          <Calendar/>
          <h2 className="font-[500] text-[12px] leading-[20px]">1997</h2>
          </div>
        </div>
      </div>
      <div className="my-[24px]">
        <h2 className="font-Spline-Sans font-[600] text-[#403A3A]">ABOUT</h2>
        <p className=" font-Spline-Sans text-[16px] leading-[24px] font-[400] mt-[8px] text-[#4C4848]">Heartland Payment Processing allows businesses to accept payments anywhere, anytime, on any device. Whether in the store or on the go, Heartland turns more shoppers into buyers and processes payments securely and quickly.</p>
      </div>
      <div className="my-[24px] w-[444px] text-[#403A3A]">
        <h2 className="font-Spline-Sans font-[600] uppercase">Target Audience</h2>
        <p className=" font-Spline-Sans text-[16px] leading-[24px] font-[400] mt-[8px] text-[#4C4848]">Designed to assist <span className="font-[500]"> medical practices, local governments, </span>and <span className="font-[500]">utility providers </span>with an integrated payment processing solution.</p>
      </div>
      <div className="flex justify-between">
      <div className="w-[368px] h-[48px] bg-[#F7E0E2] flex items-center">
        <h3 className="text-[#E35669] font-[600] text-[18px] w-full text-center">View All</h3>
      </div>
      <div className="w-[48px] h-[48px] bg-[#FAFAFA] flex justify-center items-center">
          <h3 className="text-[24px] font-outfit">•••</h3>
        </div>
    </div>
      </div>
  )
}




export const Rating = () => {
  return (
    <div className="w-full py-[32px] px-[24px] bg-white flex flex-col gap-[24px]">
      <div>
        <h2 className="text-[18px] font-Spline-Sans font-[600] text-[#403A3A] mb-[16px]">RATINGS</h2>
        <div className="flex justify-between">
          <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">Ease of Use</h3>
          <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]"><FillStar/><span>3/5</span></div>
        </div>
      </div>
      <div className="flex justify-between">
          <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">Customer Support</h3>
          <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]"><FillStar/><span>4/5</span></div>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">Quick Payment</h3>
          <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]"><FillStar/><span>4/5</span></div>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">Value for Money</h3>
          <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]"><FillStar/><span>4/5</span></div>
        </div>
    </div>
  )
}



