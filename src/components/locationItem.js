import React from "react"
import MarqueeLocation from "./marquee_location"


const LocationItem = (props) => {
    return (
        <div className="itemWrap relative w-3/4 xsm:w-1/2 sm:w-5/12 md:w-2/7 mx-auto md:mx-0 my-10  lg:mt-20 ">
            <div className=" relative skinDiv bg-skin  border-4  border-solid border-orange z-20 ">
                <div className="ml-4 mt-4 ">
                <span className="ginto text-6xl md:text-5xl xl:text-6xl 2xl:text-7xl text-orange ">  {props.first}<br /> {props.second}</span>
                </div>
                <MarqueeLocation bg="bg-skin" text={props.text}/>
                {/* <h1 className="text-black">{props.text}</h1> */}
            </div>
            <div className="bg-orange w-full h-full absolute top-2 left-2 z-10 "></div>
        </div>
    )
}

export default LocationItem