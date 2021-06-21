import React from "react"
import logo from "../images/logo.png"
import RotatedText from "./rotatedText"
import { Link } from "gatsby"
//import Sticky from "react-sticky-el"
import Plx from "react-plx"

const Header = () => {

  const parallaxScaleDown = [
    {
      start:'self',
      duration: 100,
      properties: [
        {
        startValue: 1,
        endValue: 0.7,
        property: "scale"
        },
        {
          startValue: 0,
          endValue: -10,
          property: "translateY"
        },
      ],
    },
  ];
  return (
    <div className=" sticky top-0 z-50">
      <header className="  flex justify-between items-center px-4 md:px-10 lg:px-20 bg-skin">
      <Link to="http://www.mjam.net/restaurant/wien/gatsu-gatsu" target="_blank" >
        <RotatedText text="ORDER" hover="hover:bg-blue" />
        </Link>
        <Link to="/" >
        <Plx parallaxData={parallaxScaleDown} className="w-24 md:w-28 lg:w-36 -mb-6">
        <img src={logo} alt="logo"  />
          </Plx>
        </Link>
        <Link to="/menu" >
        <RotatedText text="MENU" hover="hover:bg-blue"  />
        </Link>
      </header>
    </div>
  )
}

export default Header
