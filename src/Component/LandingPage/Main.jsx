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
import { ReactComponent as GreaterThanArrow } from "./../../images/greaterThanArrow.svg";
import MoneyPointLogo from "./../../images/moneyPointLogo.png";
import HeartLandLogo from "./../../images/HeartLandLogo.png";
import StripeLogo from "./../../images/StripeLogo.png";
import HperswitchLogo from "./../../images/HperswitchLogo.png";
import SquareLogo from "./../../images/SquareLogo.png";
import CeeLogo from "./../../images/Cee.png";
import MoonPayLogo from "./../../images/MoonPayLogo.png";
import TranchLogo from "./../../images/tranchLogo.png";
import PapayaLogo from "./../../images/PapayaLogo.png";
import Ng from "./../../images/ng.svg";
import Be from "./../../images/be.svg";
import Gh from "./../../images/gh.svg";
import Cm from "./../../images/cm.svg";
import Venmo from "./../../images/venmoLogo.png";
import Payoneer from "./../../images/PayoneerLogo.png";
import Vagaro from "./../../images/VagaroLogo.png";
import Pic1 from "./../../images/pic1.png";
import Pic2 from "./../../images/pic2.png";
import Pic3 from "./../../images/pic3.png";
import { WaitingList } from "./WaitingList";

export default function Main() {
  
  return (
    <div className="flex justify-evenly">
      <div className="w-[720px] py-[70px] px-[15px] flex flex-col gap-[50px] justify-center">
        <div className="w-[550px] flex flex-col gap-[32px]">
          <div className="w-[550px] font-Spline-Sans flex flex-col gap-[8px]">
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

        <div className="w-[100%] flex flex-col gap-[24px]">
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
            companyLogo={<img src={MoneyPointLogo} alt="Moneypoint" />}
            companyName={"Moniepoint"}
            shortBio={"Powering the dreams of businesses in emerging markets"}
          />

          <PaymentMethod
            companyLogo={<img src={HeartLandLogo} alt="Moneypoint" />}
            companyName={"Heartland Payment Processing"}
            shortBio={"Take Control of Your Crypto & NFTs with Core"}
          />

          <PaymentMethod
            companyLogo={<img src={StripeLogo} alt="Stripe" />}
            companyName={"Stripe"}
            shortBio={"Stripe builds economic infrastructure for the internet"}
          />

          <PaymentMethod
            companyLogo={<img src={HperswitchLogo} alt="Hperswitch" />}
            companyName={"Hperswitch"}
            shortBio={
              "Open Source Payments Switch. Fast, Reliable & Affordable."
            }
          />

          <PaymentMethod
            companyLogo={<img src={SquareLogo} alt="Square" />}
            companyName={"Square"}
            shortBio={"Take Control of Your Crypto & NFTs with Core"}
          />

          <PaymentMethod
            companyLogo={<img src={SquareLogo} alt="Square" />}
            companyName={"Square"}
            shortBio={"Take Control of Your Crypto & NFTs with Core."}
          />
        </div>
        <CuratedMethods/>
        <PopularMethod />
      </div>

      <div className="bg-[#F5F3F3] flex justify-center flex-col px-[40px]">
        <div className="w-[492px] flex flex-col gap-y-[40px] justify-center">
          <Waitlist />
          <DisplayCard />
          <Rating />
          <TopAlternative />
          <PaymentProcessing />
        </div>
      </div>
    </div>
  );
}



export const CuratedMethods = () => {
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="flex justify-between">
        <h2 className=" font-Spline-Sans text-[24px] font-[600]">Free Curated Methods</h2>
        <p className=" font-Spline-Sans text-[#464646] font-[500] flex items-center gap-[8px] text-[16px]">Explore methods curated for you <GreaterThanArrow/></p>
      </div>
      <div className="flex flex-col gap-[24px]">
        <CuratedMethodsContents
        logo1={StripeLogo}
        logo2={CeeLogo}
        logo3={SquareLogo}
        logo4={HeartLandLogo}
        name={'Francis Ubong'}
        shortBio={'Getting payments for tech guys from clients in Africa is a big challenge. I have curated all the methods you need to pay and collect paymnts seamlessly. '}
        remainingCountries={'+8 others'}
        type={'Non-Profit Organisation'}/>
        <CuratedMethodsContents
        logo1={TranchLogo}
        logo2={CeeLogo}
        logo3={MoneyPointLogo}
        logo4={MoonPayLogo}
        name={'Eloi Dahman'}
        shortBio={'Getting payments for clients in Africa is a big challenge. I have curated all the methods you need to pay and collect paymnts seamlessly. '}
        remainingCountries={'+2 others'}
        africaCount={'Supported in: 4 Countries in Africa'}
        country={'Africa'}
        type={'E-commerce'}/>
      </div>
    </div>
  )
}


export const CuratedMethodsContents = ({logo1, logo2, logo3, logo4, name, shortBio, remainingCountries, africaCount, country, type}) => {
  return (
    <div className="p-[16px] w-full flex justify-between bg-white">
        <div className="flex items-center gap-x-[16px]">
          <div className="grid grid-cols-2 w-[124px] h-[130px] content-center">
          <img src={logo1} alt="" className="w-full h-full"/>
          <img src={logo2} alt="" className=""/>
          <img src={logo3} alt="" className=""/>
          <img src={logo4} alt="" className=""/>
        </div>
        <div className="w-[400px]">
          <p className="text-[#6A6A6A] text-[14px] font-Spline-Sans font-[500]">Created by:</p>
          <h3 className="text-[#303538] text-[16px] font-Spline-Sans font-[600]">{name}</h3>
          <p className="text-[#6A6A6A] text-[16px] font-Spline-Sans font-[400] my-[8px] line-clamp-1">{shortBio}</p>
          <div className="flex items-center text-[#736D6D] gap-[8px]">
            <img src={Ng} alt="Nigeria" />
            <img src={Gh} alt="Nigeria" />
            <img src={Cm} alt="Nigeria" />
            <h3 className="text-[14px] font-Spline-Sans py-1 px-2 rounded-full bg-[#F5F3F3]">{remainingCountries}</h3>
            <h3 className="text-[#736D6D] text-[14px] font-[500]">{africaCount}</h3>
          </div>
        </div>
        </div>
        <div className="flex flex-col justify-between items-end w-[128px] h-full">
          <BookMark/>
          <h2 className="py-[4px] px-2 text-[14px] bg-[#F9F9F9] font-[500] text-[#303538] rounded-full">{country}</h2>
          <h2 className="text-[#6184FF] font-[500] text-[14px] bg-[#E6EBFE] px-[8px] py-[4px] rounded-full line-clamp-1">{type}</h2>
        </div>
      </div>
  )
}




export const PopularMethod = () => {
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="flex justify-between">
        <h2 className=" font-Spline-Sans text-[24px] font-[600]">Popular methods</h2>
        <p className=" font-Spline-Sans text-[#464646] font-[500] flex items-center gap-[8px] text-[16px]">Explore popular methods<GreaterThanArrow/></p>
      </div>
      <div className="flex flex-col gap-[24px]">
        <PopularMethodContents
        logo={PapayaLogo}
        name={'Papaya Global'}
        moto={'Global employment solutions at your fingertips'}
        operatingIn={'Countries Operating: Nigeria, Ghana, Egypt, +3 more'}
        services={'Availabele services: POS, Crypto, Virtual card, +4 more'}
        rating={'3.5(1.2K)'}
        />


        <PopularMethodContents
        logo={MoonPayLogo}
        name={'MoonPay'}
        moto={'Buy and sell crypto with one integration'}
        operatingIn={'Countries Operating: Nigeria, Ghana, Egypt, +3 more'}
        services={'Availabele services: POS, Crypto, Virtual card, +4 more'}
        rating={'3.5(1.2K)'}
        />
      </div>
    </div>
  )
}



export const PopularMethodContents = ({logo, name, moto, operatingIn, services, rating, remainingCountries, africaCount, country, type}) => {
  return (
    <div className="p-[16px] w-full flex justify-between bg-white">
        <div className="flex items-center gap-x-[16px]">
          <div className="w-[124px] h-[130px]">
          <img src={logo} alt="" className="w-full h-full"/>
        </div>
        <div className="w-[400px]">
          <h3 className="text-[#303538] text-[20px] font-Spline-Sans font-[600]">{name}</h3>
          <h4 className="text-[18px] font-[500] font-Spline-Sans text-[#4C4848]">{moto}</h4>
          <p className="text-[#6A6A6A] text-[16px] font-Spline-Sans font-[400] mt-[10px]">{operatingIn}</p>
          <p className="text-[#6A6A6A] text-[16px] font-Spline-Sans font-[400] mt-[10px]">{services}</p>
          
        </div>
        </div>
        <div className="flex flex-col justify-between items-end w-[128px] h-full">
          <BookMark/>
          <h2 className="py-[4px] px-2 text-[12px] bg-[#F9F9F9] font-[500] text-[#303538] rounded-full flex gap-2"><FillStar/>{rating}</h2>
        </div>
      </div>
  )
}



export const PaymentMethod = ({ companyLogo, companyName, shortBio }) => {
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
            <div className="w-[28px] h-[28px]">
              <img src={Ng} alt="Nigeria" />
            </div>
            <div className="w-[28px] h-[28px]">
              <img src={Gh} alt="Nigeria" />
            </div>
            <div className="w-[28px] h-[28px]">
              <img src={Be} alt="Nigeria" />
            </div>
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
          <h3 className="text-[12px] text-[#303538] font-Spline-Sans font-[500]">
            3/5(1.2K)
          </h3>
        </div>
      </div>
    </div>
  );
};

export const Waitlist = () => {
  return (
    <div className="w-[492px] px-[16px] py-[24px] flex flex-col gap-[16px] mb-[10px] bg-white">
      <div className="w-[457px]">
        <h2 className="font-Spline-Sans my-[8px] font-[600] text-[20px]">
          👋🏽 Join the waitlist
        </h2>
        <p className="font-Spline-Sans font-[400] text-[16px] text-[#736D6D] leading-[24px]">
          Secure your spot on our exclusive waitlist for early access to the
          finest payment curation experience.
        </p>
      </div>
      <WaitingList />

      {/* <div className="flex flex-col gap-[8px] relative">
        <input
          type="text"
          placeholder="Full Name"
          className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
        />
        <User className="absolute top-[9px] left-[16px]" />
        <input
          type="email"
          placeholder="Enter email"
          className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
        />
        <Mail className="absolute bottom-[62px] left-[16px]" />
        <button className="flex justify-center items-center gap-[8px] w-full h-[44px] bg-[#E35669] text-white font-Spline-Sans font-[600] text-[18px]">
          {" "}
          <h3>Join the waitlist</h3> <ArrowRight />
        </button>
      </div> */}
    </div>
  );
};

export const DisplayCard = () => {
  return (
    <div className="w-full py-[32px] px-[24px] bg-white">
      <div className="flex flex-col items-center justify-center mb-[24px]">
        <img src={HeartLandLogo} alt="" className="w-[124px] h-[130px]" />
        <h2 className="text-[#403A3A] text-[24px] font-[600] leading-[32px] mt-[16px] mb-[8px]">
          Heartland Payment Processing
        </h2>
        <p className="text-[#4C4848] font-[400] text-[16px] font-Spline-Sans mb-[6px]">
          Heartland Payment Systems
        </p>
        <div className="flex gap-[6px]">
          <div className="px-[8px] bg-[#F3F3F3] h-[28px] flex gap-[4px] justify-center items-center rounded-full">
            <MapPin />
            <h2 className="font-[500] text-[12px] leading-[20px]">
              United States
            </h2>
          </div>

          <div className="px-[8px] bg-[#F3F3F3] h-[28px] flex gap-[4px] justify-center items-center rounded-full">
            <Calendar />
            <h2 className="font-[500] text-[12px] leading-[20px]">1997</h2>
          </div>
        </div>
      </div>
      <div className="my-[24px]">
        <h2 className="font-Spline-Sans font-[600] text-[#403A3A]">ABOUT</h2>
        <p className="text-justify font-Spline-Sans text-[16px] leading-[24px] font-[400] mt-[8px] text-[#4C4848]">
          Heartland Payment Processing allows businesses to accept payments
          anywhere, anytime, on any device. Whether in the store or on the go,
          Heartland turns more shoppers into buyers and processes payments
          securely and quickly.
        </p>
      </div>
      <div className="my-[24px] text-[#403A3A]">
        <h2 className="font-Spline-Sans font-[600] uppercase">
          Target Audience
        </h2>
        <p className=" text-justify font-Spline-Sans text-[16px] leading-[24px] font-[400] mt-[8px] text-[#4C4848]">
          Designed to assist{" "}
          <span className="font-[500]">
            {" "}
            medical practices, local governments,{" "}
          </span>
          and <span className="font-[500]">utility providers </span>with an
          integrated payment processing solution.
        </p>
      </div>
      <div className="flex justify-between  gap-[24px]">
        <div className="w-[368px] h-[48px] bg-[#F7E0E2] flex items-center">
          <h3 className="text-[#E35669] font-[600] text-[18px] w-full text-center">
            View All
          </h3>
        </div>
        <div className="w-[48px] h-[48px] bg-[#FAFAFA] flex justify-center items-center">
          <h3 className="text-[24px] font-outfit">•••</h3>
        </div>
      </div>
    </div>
  );
};

export const Rating = () => {
  return (
    <div className="w-full py-[32px] px-[24px] bg-white flex flex-col gap-[24px]">
      <div>
        <h2 className="text-[18px] font-Spline-Sans font-[600] text-[#403A3A] mb-[16px]">
          RATINGS
        </h2>
        <div className="flex justify-between">
          <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">
            Ease of Use
          </h3>
          <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]">
            <FillStar />
            <span>3/5</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">
          Customer Support
        </h3>
        <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]">
          <FillStar />
          <span>4/5</span>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">
          Quick Payment
        </h3>
        <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]">
          <FillStar />
          <span>4/5</span>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#4C4848] font-Spline-Sans text-[18px] font-[500]">
          Value for Money
        </h3>
        <div className="flex items-center gap-[8px] text-[16px] font-Spline-Sans font-[600] text-[#4C4848]">
          <FillStar />
          <span>4/5</span>
        </div>
      </div>
    </div>
  );
};

export const TopAlternative = () => {
  return (
    <div className="py-[32px] px-[24px]  bg-white">
      <h2 className="text-[18px] font-Spline-Sans text-[#403A3A] font-[600] uppercase">
        Top alternatives
      </h2>
      <TopAlternativeContents
        header={"Venmo"}
        shortBio={
          "Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam donec vitae lectus adipiscing"
        }
        starRate={"3/5 (22K)"}
        logo={Venmo}
      />
      <div className="w-full border-[1px] bg-[#EEEEEE]"></div>
      <TopAlternativeContents
        header={"Payoneer"}
        shortBio={
          "Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam donec vitae lectus adipiscing"
        }
        starRate={"3/5 (12K)"}
        logo={Payoneer}
      />
      <div className="w-full border-[1px] bg-[#EEEEEE]"></div>
      <TopAlternativeContents
        header={"Vagaro"}
        shortBio={
          "Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam donec vitae lectus adipiscing"
        }
        starRate={"3/5 (3.2K)"}
        logo={Vagaro}
      />
      <button className="h-[48px] bg-[#FAE8EB] flex items-center justify-center w-full mt-[8px]">
        <h3 className="text-[18px] font-Spline-Sans font-[500] text-[#E04459]">
          View All Alternatives
        </h3>
      </button>
    </div>
  );
};

export const TopAlternativeContents = ({
  header,
  shortBio,
  starRate,
  logo,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[282px] my-[16px]">
        <h3 className="font-[500] font-Spline-Sans text-[18px] text-[#403A3A]">
          {header}
        </h3>
        <p className="text-[14px] font-Spline-Sans font-[400] overflow-hidden whitespace-nowrap hover:whitespace-normal text-ellipsis hover:overflow-visible">
          {shortBio}
        </p>
        <div className="bg-[#F9F9F9] flex items-center gap-[8px] justify-center py-[4px] rounded-full w-[148px] mt-[12px]">
          <div className="flex gap-[4px]">
            <FillStar />
            <FillStar />
            <FillStar />
            <FillStar />
            <EmptyStar />
          </div>
          <h3 className="text-[12px] text-[#303538] font-[500]">{starRate}</h3>
        </div>
      </div>

      <div className="w-[64px] h-[64px]">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export const PaymentProcessing = () => {
  return (
    <div className="py-[32px] px-[24px] bg-white">
      <h2 className="text-[18px] font-[600] font-Spline-Sans">
        LATEST ON HEARTLAND PAYMENT PROCESSING
      </h2>
      <PaymentProcessingContents
        content={
          "Heartland plans to integrate AI in its process to make comparison better and quicker."
        }
        timeRead={"12 min read"}
        pic={Pic1}
      />
      <PaymentProcessingContents
        content={
          "Welcome the new partners of Heartland payment process and learn what this means for your payments."
        }
        timeRead={"12 min read"}
        pic={Pic2}
      />
      <PaymentProcessingContents
        content={
          "Heartland CEO leaves the company as the company appoints new leader."
        }
        timeRead={"12 min read"}
        pic={Pic3}
      />
    </div>
  );
};

export const PaymentProcessingContents = ({ content, timeRead, pic }) => {
  return (
    <div className="flex justify-between items-center mt-[16px]">
      <div className="w-[282px]">
        <h3 className="text-[#4C4848] text-[16px] font-[500] line-clamp-2">
          {content}
        </h3>
        <div className="bg-[#F5F3F3] w-[78px] h-[22px] flex justify-center items-center mt-[12px] rounded-full">
          <h3 className="text-[#303538] text-[12px] font-Spline-Sans ">
            {timeRead}
          </h3>
        </div>
      </div>
      <img src={pic} alt="" className="w-[80px] h-[64px] bg-slate-300" />
    </div>
  );
};
