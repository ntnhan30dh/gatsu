import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import gatsu_guy from "../images/gatsu_guy.png"
import devour_pic from "../images/devour_pic.png"
import killer_pic from "../images/killer_pic.png"

import Circle from "./circle"
import Marquee from "./marquee"

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
      logo: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      logo_es: file(relativePath: { eq: "header-logo_es.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      orderNow: file(relativePath: { eq: "order-now.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      iconSet: file(relativePath: { eq: "icon-set.png" }) {
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
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer "
      >
        <div className=" w-full h-full grid grid-rows-6 grid-cols-3 ">
          <div className="row-start-2 col-start-1">
            <Circle color="yellow" text="CHECK OUT THE MENU" />
          </div>
          <div className="circleDiv row-start-5 col-start-3 ">
            <Circle color="" text="ORDER DELIVERY NOW!" />
          </div>
        </div>
      </BackgroundImage>
      <Marquee bg="bg-orange" />
      <div className="DevourContainer relative bg-skin p-8">
        <div className="headline ">
          <h1 className="text-blue text-4xl">READY STEADY DEVOUR</h1>
          <div className=" w-36 absolute -top-10 right-0">
            <img src={gatsu_guy} alt="logo" />
          </div>
        </div>
        <div className="text">
          <p className="text-justify text-sm text-orange">
            Your hunger won’t win against our assortment of classic Asian dishes
            and street food munchies. what are you watiting for?
          </p>
        </div>
        <div className="picContainer relative">
          <div className=" w-full my-6">
            <img src={devour_pic} alt="logo" />
          </div>
          <div className="circleDiv absolute -bottom-6 -right-6">
            <Circle color="yellow" text="CHECK OUT THE MENU" />
          </div>
        </div>
      </div>

        <Marquee bg="bg-blue" />
      <div className="killerContainer bg-blue p-8">
        <div className="headlineDiv flex">
          <div className="circleDiv">
            <Circle color="" text="ORDER DELIVERY NOW!" />
          </div>
          <div className="text">
            <h1 className="text-skin text-4xl w-1/2 text-right">
              KILLER ASIAN STREET FOOD!
            </h1>
          </div>
        </div>
        <div className=" w-full my-6">
          <img src={killer_pic} alt="logo" />
        </div>
      </div>
    </section>
  )
}

export default Story
