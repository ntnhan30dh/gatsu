import React from "react"
import logo from "../images/logo.png"
import btnOrder from "../images/btn-order.png"
import btnMenu from "../images/btn-menu.png"
import RotatedText from "./rotatedText"
import { Link } from "gatsby"
//import Sticky from "react-sticky-el"
import Plx from "react-plx"

const Header = () => {

  const parallaxScaleDown = [
    {
      start:'self',
      duration: 200,
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
      <header className="  flex justify-between items-center px-2 bg-skin">
      <Link to="/" >
        <RotatedText text="ORDER" hover="hover:bg-blue" />
        </Link>
        <Link to="/" >
        <Plx parallaxData={parallaxScaleDown} className="w-24 -mb-6">
        <img src={logo} alt="logo"  />
          </Plx>
        </Link>
        <Link to="/" >
        <RotatedText text="MENU" hover="hover:bg-blue"  />
        </Link>
      </header>
    </div>
  )
}

export default Header
