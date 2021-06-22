import React from "react"
import gif from "../images/gif.gif"
//import pic from "../images/gif_pic.png"
import Circle from "./circle"

const Gif = () => {
  return (
    <div className=" w-full session gif relative bg-skin pb-20 ">
      <div className=" w-full relative">
        {/* <img src={gif} alt="gatsu" /> */}
        <img src={gif} alt="gatsu" />
      <div className="absolute -bottom-20 z-40 sm:top-2 sm:left-10">
        <Circle color="" text="ORDER DELIVERY NOW!" />
      </div>
      </div>
    </div>
  )
}

export default Gif
