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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="menuContainer bg-orange" id="menu">
      <Marquee bg="bg-orange" />
      <div className="sliderWrap relative">
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

        <Slider {...settings} ref={customeSlider} className="my-8 md:my-16">
          <MenuItem name="Phad Thai" pic="padThai" />
          <MenuItem name="SESAME SALAD" pic="sesame" />
          <MenuItem name="Pad Thai" pic="padThai" />
          <MenuItem name="SESAME SALAD" pic="sesame" />
          <MenuItem name="Pad Thai" pic="padThai" />
          <MenuItem name="SESAME SALAD" pic="sesame" />
          <MenuItem name="Pad Thai" pic="padThai" />
          <MenuItem name="SESAME SALAD" pic="sesame" />
        </Slider>
        <div className=" w-full grid grid-rows-1 grid-cols-3 lg:grid-cols-4 ">
          <div className="row-start-1 col-start-1 md:col-start-3 lg:col-start-4 relative">
            <div className="absolute bottom-0 md:-left-20 mmd:-bottom-16">
              <Link to="/menu">
                <Circle
                  color="yellow"
                  text="CHECK OUT THE MENU"
                  rotate="-rotate-12 md:rotate-12"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Marquee bg="bg-orange" />
    </section>
  )
}

export default Menu
