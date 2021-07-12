import React, { useState} from "react"

import circle_yellow from "../images/circle_yellow.png"
import circle_orange from "../images/circle_orange.png"
//import circle_ex from "../images/circle_ex.svg"

const Circle = (props) =>{
  let [isHover, setIsHover] = useState(false);
 
const textColour = props.textColour==="yellow"?"text-yellow":"text-skin"
 let orange=isHover?circle_yellow:circle_orange
 let yellow=isHover?circle_orange:circle_yellow
 let textOrange = isHover?textColour:"text-orange"
 let textSkin = isHover?"text-orange":textColour


    return (
   <div className="circleDiv relative w-28 h-28 md:w-44 md:h-44 xl:w-48 xl:h-48 "  onMouseOver={()=>setIsHover(true) }  onMouseOut={()=>setIsHover(false)} >
            {" "}
            <div className={`absolute w-full h-full  ${props.color==="yellow"?"spin_back":"spin"} `}>
              <img src={props.color==="yellow"?yellow:orange}  alt="circle_yellow}" />
            </div>
            <div className={`content absolute top-0 w-full h-full flex items-center justify-center transform ${props.rotate}	`}>
              {" "}
              <span className={`text-center px-4 text-xxs md:text-base lg:text-xl md:px-8 lg:px-4 xl:px-8 font-bold ${props.color==="yellow"?textOrange:textSkin} `}> {props.text}</span>
            </div>
          </div>
    )
}

export default Circle 