import React from "react"
import { Link } from "gatsby"

import gatsu_guy from "../images/gatsu_guy.png"
import devour_pic from "../images/devour_pic.png"
import devour_pic_mobile from "../images/devour_pic_mobile.png"
import killer_pic from "../images/killer_pic.png"

import Circle from "./circle"
import Marquee from "./marquee"
import StoryBg from "./story_bg"

const Story = props => {



  return (
    <section className="storyContainer">
      <StoryBg page={props.page} />
      <div className="DevourContainer relative bg-skin p-8 md:p-16 lg:px-40 2xl:px-60 md:flex ">
        <div className="textWrap md:w-2/3">
        <div className="headline ">
          <h1 className="ginto xl:leading-90	 text-blue  text-4xl xsm:text-6xl lg:text-7xl xl:text-7vw 2xl:text-9xl pr-20 xsm:pr-40 md:pr-60">READY <br /> STEADY <br /> DEVOUR</h1>
          <div className=" w-40 absolute -top-10 right-0 md:hidden">
            <img src={gatsu_guy} alt="logo" />
          </div>
        </div>
        <div className="text md:mr-20 md:mt-10">
          <p className="text-left text-sm md:text-lg lg:text-xl xl:pr-40 text-orange font-bold uppercase">
            Your hunger won’t win against our assortment of classic Asian dishes
            and street food munchies. what are you watiting for?
          </p>
        </div>
        </div>
        <div className="picContainer relative md:w-1/3 xl:w-1/2 ">
          <div className=" w-full my-6  ">
            <img className="hidden md:block " src={devour_pic} alt="dish" />
            <img className=" md:hidden " src={devour_pic_mobile} alt="dish" />
          </div>
          <div className="md:hidden circleDiv absolute -bottom-6 -right-6">
          <Link to="/menu" >
            <Circle color="yellow" text="CHECK OUT THE MENU" rotate="rotate-12" />
        </Link>
          </div>
          <div className=" hidden md:block circleDiv absolute -bottom-10 -left-20">
          <Link to="/menu" >
            <Circle color="orange" text="CHECK OUT THE MENU" rotate="rotate-12" />
        </Link>
          </div>
          <div className=" hidden md:block w-48 lg:w-72  absolute -top-10 -left-48 lg:-top-24 lg:-left-64">
          <img src={gatsu_guy} alt="logo" />
          </div>
          <div className=" hidden md:block w-48 lg:w-72  absolute -bottom-10 -right-20 lg:-bottom-20 lg:-right-40">
          <img src={gatsu_guy} alt="logo" />
          </div>
          <div className=" hidden md:block w-48 lg:w-72  absolute -bottom-40 left-10 z-20 lg:-bottom-52 lg:left-1/5  transform rotate-25">
          <img src={gatsu_guy} alt="logo" />
          </div>
        </div>
      </div>

      <Marquee bg="bg-blue" />
      <div className="killerContainer relative bg-blue p-8 md:p-16 lg:px-40 2xl:px-60   md:flex flex-row-reverse">
      {/* <div className=" hidden md:block w-48 lg:w-52 absolute -top-40 right-1/5 z-20 transform rotate-25">
          <img src={gatsu_guy} alt="logo" />
          </div> */}
        <div className="headlineDiv flex justify-between md:w-2/3	">
          <div className="circleDiv md:hidden">
            <Circle color="" text="ORDER DELIVERY NOW!" rotate="-rotate-12" />
          </div>
          <div className="text  md:mr-20  m-auto lg:mr-0 xl:mr-auto">
            <h1 className="ginto xl:leading-90	 text-right text-skin  text-4xl xsm:text-6xl  lg:text-7xl xl:text-7vw 2xl:text-9xl ">
              KILLER <br /> ASIAN <br /> STREET <br /> FOOD!
            </h1>
          </div>
        </div>
        
        <div className=" w-full my-6 md:w-1/2 lg:w-1/3 relative">
          <img className="w-full" src={killer_pic} alt="pic" />
          <div className="circleDiv hidden md:block absolute -bottom-10 -right-10">
          <Link to="http://www.mjam.net/restaurant/wien/gatsu-gatsu" target="_blank" >
            <Circle color="yellow" text="ORDER DELIVERY NOW!" rotate="-rotate-12" />
        </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
