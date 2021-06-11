import React from "react"
import circle_yellow from "../images/circle_yellow.png"
import circle_orange from "../images/circle_orange.png"
const Circle = (props) =>{
    return (
   <div className="circleDiv relative w-28 h-28">
            {" "}
            <div className={`absolute ${props.color==="yellow"?"spin_back":"spin"}`}>
              <img src={props.color==="yellow"?circle_yellow:circle_orange} alt="circle_yellow}" />
            </div>
            <div className="content absolute top-0 w-full h-full flex items-center justify-center transform -rotate-12	">
              {" "}
              <span className={`text-center ${props.color==="yellow"?"text-orange":"text-white"}`}> {props.text}</span>
            </div>
          </div>
    )
}

export default Circle 