import React from "react"

const RotatedText = props => {
  return (
    <div className="rotatedText text-skin bg-orange max-w-max mx-auto rounded-3xl px-1 my-4">
      {props.text.split("").map(l => {
        return <span> {l}</span>
      })}
    </div>
  )
}

export default RotatedText
