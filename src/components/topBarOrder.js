import React from "react"


const codeStyles = {
  letterSpacing: "3.2px",
}
const TopBarOrder = () =>{


    return(
        <div className="bar bg-orange w-full">
        <span  style={codeStyles} className="block text-sm lg:text-base text-yellow font-bold italic mx-auto max-w-max lg:py-1"> ORDER DELIVERY NOW!</span>
        </div>
    )
}

export default TopBarOrder