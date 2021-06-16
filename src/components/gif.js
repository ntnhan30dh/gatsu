import React from "react"
import gif from "../images/gif.gif"
//import pic from "../images/gif_pic.png"
import Circle from "./circle"

const Gif = () => {
  return (
    <div className=" w-full session gif relative bg-skin pb-20 ">
      <div className=" w-full">
        {/* <img src={gif} alt="gatsu" /> */}
        <img src={gif} alt="gatsu" />
      </div>
      <div className="absolute -bottom-6 z-40 ">
        <Circle color="" text="ORDER DELIVERY NOW!" />
      </div>
    </div>
  )
}

export default Gif
