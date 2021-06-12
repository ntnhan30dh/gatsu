import React from "react"

const MarqueeBlue = (props) =>{
    return (
     <div className={`marquee flex relative  overflow-hidden py-2 flex-nowrap text-yellow ${props.bg}`}>
        <div className="marquee_list flex">
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            {props.text}
          </span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
           {props.text}
          </span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
           {props.text}
          </span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
        </div>

        <div className="marquee_list flex">
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            {props.text}
          </span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
           {props.text}
          </span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className=" whitespace-nowrap marquee_item flex items-center mr-2">
           {props.text}
          </span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
        </div>

        <div className="marquee_list flex">
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            {props.text}
          </span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
           {props.text}
          </span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className=" whitespace-nowrap marquee_item flex items-center mr-2">
           {props.text}
          </span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
          <span className="marquee_item flex items-center mr-2">{props.text}</span>
        </div>
      </div>
    )
}

export default MarqueeBlue 