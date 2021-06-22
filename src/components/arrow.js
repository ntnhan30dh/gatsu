import React, {useState} from 'react'
import previous from "../images/arrow_back_border.png"
import next from "../images/arrow_next_border.png"
import previous_blue from "../images/arrow_back_border_blue.png"
import next_blue from "../images/arrow_next_border_blue.png"

const Arrow = (props) => {
    const [isHover, setIsHover] = useState(false); 
    const previousButton = props.bgColour === "bg-orange"? previous:previous_blue
    const nextButton = props.bgColour === "bg-orange"? next:next_blue 

    return (
         <div className={`previousWrap hidden md:flex absolute top-0 ${props.type==="previous"?"left-0":"right-0"} z-20 h-full flex items-center`} >
          <button className="" onClick={props.onClickHandle} onMouseOver={()=>setIsHover(true) } onMouseOut={()=>setIsHover(false)}>
            {" "}
            <div className="w-14 relative mx-16">
            <img src={props.type==="previous"?previousButton:nextButton} alt="arrow"  className=" relative z-20"/>
            <div className={`${props.bgColour} w-full h-full absolute top-2 left-2 z-10  ${isHover?"hidden":""}`}></div>
            </div>
          </button>
        </div>
    )
}

export default Arrow