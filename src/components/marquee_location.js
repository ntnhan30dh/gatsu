import React from "react"

const MarqueeLocation = (props) =>{

  const spanClass ="whitespace-nowrap marquee_item flex items-center mr-2"
    return (
     <div className={`marquee flex relative  overflow-hidden py-2 flex-nowrap text-orange ${props.bg}`}>
        <div className="marquee_list flex">
          <span className={spanClass}>
            {props.text}
          </span>
          <span className={spanClass}>
           {props.text}
          </span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>
           {props.text}
          </span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>{props.text}</span>
        </div>

        <div className="marquee_list flex">
          <span className={spanClass}>
            {props.text}
          </span>
          <span className={spanClass}>
           {props.text}
          </span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>
           {props.text}
          </span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>{props.text}</span>
        </div>

        <div className="marquee_list flex">
          <span className={spanClass}>
            {props.text}
          </span>
          <span className={spanClass}>
           {props.text}
          </span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>
           {props.text}
          </span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>{props.text}</span>
          <span className={spanClass}>{props.text}</span>
        </div>
      </div>
    )
}

export default MarqueeLocation