import React, { useState} from "react"

import circle_yellow from "../images/circle_yellow.png"
import circle_orange from "../images/circle_orange.png"
//import circle_ex from "../images/circle_ex.svg"

const Circle = (props) =>{
  let [isHover, setIsHover] = useState(false);
 // let [yellow, setOrange] = useState(circle_yellow);
 let orange=isHover?circle_yellow:circle_orange
 let yellow=isHover?circle_orange:circle_yellow

    return (
      // onMouseOver={e => (e.currentTarget.src = circle_yellow) }  onMouseOut={e => (e.currentTarget.src = circle_orange) }
   <div className="circleDiv relative w-28 h-28 "  onMouseOver={()=>setIsHover(true) }  onMouseOut={()=>setIsHover(false)} >
            {" "}
            <div className={`absolute ${props.color==="yellow"?"spin_back":"spin"} `}>
              <img src={props.color==="yellow"?yellow:orange}  alt="circle_yellow}" />
            </div>
            <div className="content absolute top-0 w-full h-full flex items-center justify-center transform -rotate-12	">
              {" "}
              <span className={`text-center ${props.color==="yellow"?"text-orange":"text-white"} `}> {props.text}</span>
            </div>
          </div>
    )
}

export default Circle 