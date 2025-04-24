import React from "react"
import { Link } from "react-router-dom"


const BrickButton = ({className, text, Id}:{className?:string, Id?:string, text:string}) => {
  const handleScroll = (evt:React.MouseEvent, Id:string | undefined)=> {
    evt.preventDefault();
    const target =  document.getElementById('counter')
    if (target && Id){
        const offset = window.innerHeight * 0.15
        const top = target.getBoundingClientRect().top + window.scrollY - offset

        window.scroll({top, behavior:"smooth"})
    }
}

  return (
   <Link
    onClick={(e)=> handleScroll(e, Id)}
     to="/" 
     className={`cta-wrapper ${className}`}>
   <div className="cta-button group">
    <div className="bg-circle"/>
    <p className=" text">{text}</p>
    <div className="arrow-wrapper">
        <img src="/images/arrow-down.svg" alt="arrow" />
    </div>
   </div>
   </Link>
  )
}

export default BrickButton
