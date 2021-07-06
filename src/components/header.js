import React from "react"
import logo from "../images/logo.png"
import menuBtn from "../images/btn-menu.png"
import orderBtn from "../images/btn-order.png"
//import RotatedText from "./rotatedText"
import { Link } from "gatsby"
//import Sticky from "react-sticky-el"
import Plx from "react-plx"

const Header = () => {
  const { innerWidth: width} = window;

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
    <div className=" sticky top-0 z-50 border-b-2 border-solid border-orange">
      <header className="  flex justify-between items-center px-4 md:px-10 lg:px-20 bg-skin //lg:h-20">
      <Link to="http://www.mjam.net/restaurant/wien/gatsu-gatsu" target="_blank" >
        {/* <RotatedText text="ORDER" hover="hover:bg-blue" /> */}
        <div className="btn h-6 md:h-8 lg:h-9 ">
        <img src={orderBtn} alt="logo"  />
          </div>
        </Link>
        <Link to="/">
        <Plx parallaxData={parallaxScaleDown} className="w-24 md:w-28 lg:w-44 -mb-6 //lg:-mb-24">
        <img src={logo} alt="logo"  />
          </Plx>
        </Link>
        <Link to="/menu" >
        {/* <RotatedText text="MENU" hover="hover:bg-blue"  /> */}
        <div className=" btn h-6 md:h-8 lg:h-9">
        <img src={menuBtn} alt="logo"  />
          </div>
        </Link>
      </header>
    </div>
  )
}

export default Header
