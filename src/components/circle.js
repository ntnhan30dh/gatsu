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
      // onMouseOver={e => (e.currentTarget.src = circle_yellow) }  onMouseOut={e => (e.currentTarget.src = circle_orange) }
   <div className="circleDiv relative w-28 h-28 md:w-40 md:h-40 "  onMouseOver={()=>setIsHover(true) }  onMouseOut={()=>setIsHover(false)} >
            {" "}
            <div className={`absolute w-full h-full  ${props.color==="yellow"?"spin_back":"spin"} `}>
              <img src={props.color==="yellow"?yellow:orange}  alt="circle_yellow}" />
            </div>
            <div className="content absolute top-0 w-full h-full flex items-center justify-center transform -rotate-12	">
              {" "}
              <span className={`text-center px-4 lg:text-xl md:px-8 ${props.color==="yellow"?textOrange:textSkin} `}> {props.text}</span>
            </div>
          </div>
    )
}

export default Circle 