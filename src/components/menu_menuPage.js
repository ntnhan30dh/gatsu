import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Slider from "react-slick"

import MenuMenuItem from "./menu-menu-item"
import previous from "../images/arrow_back.png"
import next from "../images/arrow_next.png"
import gatsu_guy from "../images/gatsu_guy.png"

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
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  }

  const arrow = "w-6 mx-1"

  return (
    <section className="menuContainer bg-orange" id="menu">
      <div className="top relative bg-skin p-8">
        <div className="headline ">
          <h1 className=" ginto uppercase text-blue text-4xl">
            CHeck out our Menu{" "}
          </h1>
          <div className=" w-36 absolute -top-10 right-0">
            <img src={gatsu_guy} alt="logo" />
          </div>
        </div>
        <div className="text">
          <p className="uppercase tracking-widest text-justify text-sm text-orange">
            all the classic dishes you know+love, like pad thai and curries,
            join forces with tasty street food finds like Thai Burgers and
            waffle fries.
          </p>
          <span className="block uppercase text-blue text-2xl ginto text-right pr-10">
            swipe
          </span>
        </div>
        <div className="buttons text-right py-2">
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
