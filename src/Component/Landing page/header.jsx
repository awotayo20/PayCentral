import { ReactComponent as Logo } from "./../../images/logo.svg"
import { ReactComponent as DropDownArrow} from "./../../images/dropdown.svg"
import { ReactComponent as RightArrow} from "./../../images/arrow-right.svg"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='min-w-[1024px] h-[80px] flex items-center justify-around'>
        <div className="flex gap-[16px]">
          <Logo />
          <h2 className="font-Spline-Sans text-[24px] font-[700] text-[#E35669]">PayCentral</h2>
        </div>

        <div className="flex items-center gap-[32px] text-[16px] font-[500] text-[#332C2D]">
          <div className="p-[8px]">Why PayCentral</div>
          <div className="flex items-center gap-[8px] p-[8px]">Categories <span><DropDownArrow /></span></div>
        </div>

        <Link to="">
        <div className="bg-[#E35669] text-white px-[16px] py-[8px] flex gap-[8px]">
          <h2>Join the waitlist</h2>
          <span><RightArrow /></span>
        </div>
        </Link>
    </div>
  )
}
