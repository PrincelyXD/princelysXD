import { Link } from "react-router-dom"

const CustomPillButton = ({title, isBottom}:{title:string, isBottom:boolean}) => {
  return (
   <Link
   className={` h-9 w-28 flex
    text-sm sm:text-base items-center
     justify-center font-semibold tracking-[0.5px]
     transition-all duration-700
     ${isBottom? "text-black bg-white":"text-white bg-black" }
      rounded-xl`}
      target="blank"
   to="https://cal.com/princely-kweks">
   {title}
   </Link>
  )
}

export default CustomPillButton
