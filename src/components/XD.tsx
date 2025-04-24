
const XD = ({isBottom}:{isBottom:boolean}) => {
  return (
    <div className={`${ isBottom ? "text-white":"text-black"} flex
     items-center gap-x-2 font-clash
     transition-all duration-700
      font-semibold text-xl md:text-2xl

    `}>
      <img
        alt="xd-logo"
       src="/images/xd.svg"
       className={`" h-9 xd relative z-10
        ${ isBottom && "bg-[#f2f2f2e6]"}
       rounded-xl border-[#F92898]
        border-[2.5px]`}
         />
    princely
    </div>
  )
}

export default XD
