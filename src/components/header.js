import React from "react"
import logo from "../images/logo.png"
import btnOrder from "../images/btn-order.png"
import btnMenu from "../images/btn-menu.png"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"
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
    <Sticky className="sticky">
      <header className="flex justify-between items-center px-2 bg-skin">
      <Link to="/" >
        <div className=" w-24">
          <img src={btnOrder} alt="logo"  />
        </div>
        </Link>
        <Link to="/" >
        <Plx parallaxData={parallaxScaleDown} className="w-24 -mb-6">
        <img src={logo} alt="logo"  />
          </Plx>
        </Link>
        <Link to="/" >
        <div className=" w-20 ">
          <img src={btnMenu} alt="logo"  />
        </div>
        </Link>
      </header>
    </Sticky>
  )
}

export default Header
