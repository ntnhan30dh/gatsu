import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Slider from "react-slick"

import MenuMenuItem from "./menu-menu-item"
import Circle from "./circle"
import Arrow from "./arrow"

import previous from "../images/arrow_back.png"
import next from "../images/arrow_next.png"
import gatsu_guy from "../images/gatsu_guy.png"
import arrowDown from "../images/arrow_down.png"

const Menu_menuPage = () => {
  const data = useStaticQuery(graphql`
    {
      padThai: file(relativePath: { eq: "menu_padthai.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
   
  }

  const arrow = "w-6 mx-1"

  return (
    <section className="menuContainer bg-orange" id="menu">
      <div className="top relative bg-skin p-6 sm:p-10 md:p-20 lg:p-30 xl:px-72">
        <div className="headline ">
          <h1 className=" ginto uppercase text-blue text-4xl xsm:text-6xl md:text-7xl lg:text-8xl max-w-max relative">
            CHeck <br /> out our <br /> Menu{" "}
          <span className="hidden md:block absolute bottom-0 right-0 w-14 ">
          <img src={arrowDown} alt="arrow" />
        </span>
          </h1>
          <div className=" w-40 md:w-52 lg:w-64 absolute -top-10 md:top-1/20 right-0 md:right-1/20 ">
          <div className="relative">
            <img src={gatsu_guy} alt="logo" />
            <div className=" hidden md:block absolute top-1/3 right-2/3">
            <Circle color="orange" text="ORDER DELIVERY NOW" rotate="-rotate-12"/>
          </div>
          </div>
          </div>
        </div>
        <div className="text my-10">
          <p className="uppercase tracking-widest text-justify text-sm md:text-lg lg:text-xl text-orange ">
            all the classic dishes you know+love, like pad thai and curries,
            join forces with tasty street food finds like Thai Burgers and
            waffle fries.
          </p>
          <span className="block uppercase text-blue text-2xl ginto text-right pr-10 md:hidden">
            swipe
          </span>
        </div>
        <div className="buttons text-right py-2 md:hidden">
          <button onClick={() => gotoPrev()}>
            {" "}
            <div className={arrow}>
              <img src={previous} alt="arrow" />
            </div>
          </button>
          <button onClick={() => gotoNext()}>
            <div className={arrow}>
              <img src={next} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
      <div className="siderWrap relative">
          <Arrow
          onClickHandle={() => gotoNext()}
          type="next"
          bgColour="bg-blue"
        />
        <Arrow
          onClickHandle={() => gotoPrev()}
          type="previous"
          bgColour="bg-blue"
        />
        <Slider {...settings} ref={customeSlider} className="">
          <MenuMenuItem name="SPICY SOUR CHICKEN " pic="sourChicken" text="We have all the asian classic dishes and streetfod munchies you coiting foGet EatinG!" />
          <MenuMenuItem name="Sweet SOUR CHICKEN " pic="sourChicken" text="We have all the asian classic dishes and streetfod munchies you coiting foGet EatinG!" />
          {/* <MenuMenuItem name="Pad Thai" pic="padThai" />
          <MenuMenuItem name="SESAME SALAD" pic="sesame" /> */}
        </Slider>
      </div>
    </section>
  )
}

export default Menu_menuPage
