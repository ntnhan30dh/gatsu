import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import gatsu_guy from "../images/gatsu_guy.png"
import devour_pic from "../images/devour_pic.png"
import devour_pic_mobile from "../images/devour_pic_mobile.png"
import killer_pic from "../images/killer_pic.png"

import Circle from "./circle"
import Marquee from "./marquee"
import StoryBg from "./story_bg"

const Story = props => {
  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "bg_story.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.bgBig.childImageSharp.fluid

  return (
    <section className="storyContainer">
      <StoryBg page={props.page} />
      <div className="DevourContainer relative bg-skin p-8 md:p-16 lg:px-40 md:flex">
        <div className="textWrap md:w-2/3">
        <div className="headline ">
          <h1 className="ginto  text-blue text-4xl xsm:text-6xl md:text-7xl lg:text-9xl pr-20 xsm:pr-40 md:pr-60">READY STEADY DEVOUR</h1>
          <div className=" w-40 absolute -top-10 right-0 md:hidden">
            <img src={gatsu_guy} alt="logo" />
          </div>
        </div>
        <div className="text md:mr-20 md:mt-10">
          <p className="text-justify text-sm md:text-lg lg:text-xl text-orange tracking-widest uppercase">
            Your hunger won’t win against our assortment of classic Asian dishes
            and street food munchies. what are you watiting for?
          </p>
        </div>
        </div>
        <div className="picContainer relative md:w-1/3">
          <div className=" w-full my-6">
            <img className="hidden md:block" src={devour_pic} alt="dish" />
            <img className=" md:hidden" src={devour_pic_mobile} alt="dish" />
          </div>
          <div className="md:hidden circleDiv absolute -bottom-6 -right-6">
            <Circle color="yellow" text="CHECK OUT THE MENU" />
          </div>
          <div className=" hidden md:block circleDiv absolute -bottom-10 -left-20">
            <Circle color="orange" text="CHECK OUT THE MENU" />
          </div>
          <div className=" hidden md:block w-48 lg:w-52 absolute -top-10 -left-48">
          <img src={gatsu_guy} alt="logo" />
          </div>
          <div className=" hidden md:block w-48 lg:w-52 absolute -bottom-10 -right-20">
          <img src={gatsu_guy} alt="logo" />
          </div>
          <div className=" hidden md:block w-48 lg:w-52 absolute -bottom-30 left-10 z-20 transform rotate-25">
          <img src={gatsu_guy} alt="logo" />
          </div>
        </div>
      </div>

      <Marquee bg="bg-blue" />
      <div className="killerContainer bg-blue p-8 md:p-16 lg:px-40  md:flex flex-row-reverse">
        <div className="headlineDiv flex justify-between md:w-2/3	">
          <div className="circleDiv md:hidden">
            <Circle color="" text="ORDER DELIVERY NOW!" />
          </div>
          <div className="text text-right md:mr-20 lg:mr-36">
            <h1 className="ginto text-skin  pl-10 text-4xl xsm:text-6xl md:text-7xl lg:text-9xl">
              KILLER ASIAN STREET FOOD!
            </h1>
          </div>
        </div>
        
        <div className=" w-full my-6 md:w-1/3 relative">
          <img className="w-full" src={killer_pic} alt="pic" />
          <div className="circleDiv hidden md:block absolute -bottom-10 -right-10">
            <Circle color="yellow" text="ORDER DELIVERY NOW!" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
