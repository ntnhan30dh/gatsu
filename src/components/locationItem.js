import React from "react"
import MarqueeLocation from "./marquee_location"


const LocationItem = (props) => {
    return (
        <div className="itemWrap relative max-w-max mx-auto my-10 ">
            <div className=" relative skinDiv bg-skin w-64 border-4  border-solid border-orange z-20">
                <span className="text-4xl text-orange ">  {props.first}<br /> {props.second}</span>
                <MarqueeLocation bg="bg-skin" text={props.text}/>
                {/* <h1 className="text-black">{props.text}</h1> */}
            </div>
            <div className="bg-orange w-full h-full absolute top-2 left-2 z-10 "></div>
        </div>
    )
}

export default LocationItem