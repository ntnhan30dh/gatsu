import React from "react"

const RotatedText = props => {
  return (
    <div className={`rotatedText text-skin bg-orange ${props.hover} max-w-max mx-auto rounded-3xl px-2 md:px-4 my-4 text-xl lg:text-2xl`}>
      {props.text.split("").map(l => {
        return <span> {l}</span>
      })}
    </div>
  )
}

export default RotatedText
