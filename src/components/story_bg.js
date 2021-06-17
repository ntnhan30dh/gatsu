import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Circle from "./circle"
import Marquee from "./marquee"

const StoryBg = props => {
  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "bg_story.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bgBig_menu: file(relativePath: { eq: "bg_story_menu.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
const mainPage = props.page === "main"?true:false
  const imageData =
    
  mainPage? data.bgBig.childImageSharp.fluid
      : data.bgBig_menu.childImageSharp.fluid

  return (
    <section className="storyContainer">
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer h-wFull"
      >
        <div className=" w-full h-full grid grid-rows-2 grid-cols-2 ">
          <div className="row-start-1 col-start-1 relative">
            <div className="absolute left-6 top-6">
            <Circle color={mainPage?"yellow":"orange"} text={mainPage?"CHECK OUT THE MENU":"YUMMY"} />
            </div>
          </div>
          <div className="circleDiv row-start-2 col-start-2 relative">
            <div className="absolute right-6 bottom-4">
            <Circle color="" text="ORDER DELIVERY NOW!" />
            </div>
          </div>
        </div>
      </BackgroundImage>
      <Marquee bg="bg-orange" />
    </section>
  )
}

export default StoryBg
