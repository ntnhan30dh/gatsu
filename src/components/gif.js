import React from "react"
import gif from "../images/gif.gif"
import gifM from "../images/gifMobile.gif"
//import pic from "../images/gif_pic.png"
import Circle from "./circle"
import { Link } from "gatsby"

const Gif = () => {
  return (
    <div className=" w-full session gif relative bg-skin ">
      <div className=" w-full relative ">
        {/* <img src={gif} alt="gatsu" /> */}
        <img className="hidden md:block" src={gif} alt="gatsu"  />
        <img className=" md:hidden" src={gifM} alt="gatsu"  />
      <div className="absolute bottom-0 md:-bottom-20 z-40 //sm:top-1/20 sm:left-1/20">
      <Link to="http://www.mjam.net/restaurant/wien/gatsu-gatsu" target="_blank" >
        <Circle color="" text="ORDER DELIVERY NOW!" rotate="-rotate-12"/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Gif
