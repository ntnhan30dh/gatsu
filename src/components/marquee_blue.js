import React from "react"

const MarqueeBlue = (props) =>{

  const spanClass ="whitespace-nowrap marquee_item flex items-center mr-2 uppercase"
    return (
     <div className={`marquee flex relative  overflow-hidden py-2 md:py-6 flex-nowrap text-yellow ${props.bg} lg:text-xl` }>
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

export default MarqueeBlue 