import React, { useRef } from "react"

import { Link } from "gatsby"
//import Img from "gatsby-image"
import Slider from "react-slick"

// import Img from "gatsby-image"
import MenuItem from "./menu-item"
import Circle from "./circle"
import Marquee from "./marquee"
import Arrow from "./arrow"

const Menu = () => {
  //creating the ref
  const customeSlider = useRef()
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '5%',
        },
      },
    ],
  }
  return (
    <section className="menuContainer bg-orange " id="menu">
      <Marquee bg="bg-orange" />
      <div className="sliderWrap  mb-12 md:mb-16 lg:mb-20">
        <div className="relative">
          <Arrow
            onClickHandle={() => gotoNext()}
            type="next"
            bgColour="bg-orange"
          />
          <Arrow
            onClickHandle={() => gotoPrev()}
            type="previous"
            bgColour="bg-orange"
          />

          <Slider {...settings} ref={customeSlider} className="my-8 md:my-16 ">
            <MenuItem name="Oh My,*Pad Thai" pic="padThai" />
            <MenuItem name="Glass Noodle* Salad Bowl" pic="GlassNoodle" />
            <MenuItem name="Katsu Katsu* Bowl" pic="Katsu" />
            <MenuItem name="Lucky Teriyaki* Bowl" pic="Lucky" />
            <MenuItem name="Happy Yogi* Bowl" pic="HappyYogi" />
            <MenuItem name="Go Nuts* Red Curry" pic="GoNuts" />
            <MenuItem name="Green Delight* Curry" pic="GreenDelight" />

            <MenuItem name="Tasty Thai* Burger" pic="ThaiBurger" />
            <MenuItem name="Spice it* Up Burger" pic="SpiceItUp" />
            <MenuItem name="Lucky Teriyaki *Burger" pic="TeriyakiBurger" />
            <MenuItem name="Golden* Gate Fries" pic="GoldenGate" />
            <MenuItem name="K-Pop* Chicken" pic="KPop" />

            <MenuItem name="Rock'n'*Rolls" pic="Rock_n_Rolls" />
            <MenuItem name="Cheeky Chicken * Dumplings" pic="Dumplings" />
            <MenuItem name="Gatsu *Side Salad" pic="GatsuSide" />
          </Slider>
        </div>
        <div className=" w-full relative /grid grid-rows-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
          {/* <div className="row-start-1 col-start-1 xsm:col-start-2 md:col-start-3 lg:col-start-4 relative"> */}
          {/* <div className="absolute bottom-0 xsm:-left-10 md:-left-24 lg:-left-16 lg:-bottom-12 z-20"> */}
          <div className="absolute -bottom-6 z-20 w-full">
            <div className=" w-full xsm:max-w-max xsm:mx-auto md:ml-auto md:mr-1/4 lg:mr-19% /xsm:-left-10 /md:-left-24 /lg:-left-16 -lg:-bottom-12 z-20">
              <Link to="/menu">
                <Circle
                  color="yellow"
                  text="CHECK OUT THE MENU"
                  rotate="-rotate-12 md:rotate-12"
                />
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Marquee bg="bg-orange" />
    </section>
  )
}

export default Menu
