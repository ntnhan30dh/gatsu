import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
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
  const mainPage = props.page === "main" ? true : false
  const imageData = mainPage
    ? data.bgBig.childImageSharp.fluid
    : data.bgBig_menu.childImageSharp.fluid

  return (
    <section className="storyContainer">
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer h-wFull lg:h-vh "
      >
        <div className=" w-full h-full grid grid-rows-2 grid-cols-2 ">
          <div className="row-start-1 col-start-1 relative">
            <div className="absolute left-6 xsm:left-20 lg:left-60 top-6 xsm:top-20">
            <Link to="/menu" target="_blank" >
              <Circle
                color={mainPage ? "yellow" : "orange"}
                text={mainPage ? "CHECK OUT THE MENU" : "YUMMY"}
              />
        </Link>
            </div>
          </div>
          <div className="circleDiv row-start-2 col-start-2 relative">
            <div className="absolute lg:hidden right-6 xsm:right-20 bottom-4 xsm:bottom-20">
            <Link to="http://www.mjam.net/restaurant/wien/gatsu-gatsu" target="_blank" >
              <Circle color="" text="ORDER DELIVERY NOW!" />
        </Link>
            </div>
          </div>
          
          <div className="circleDiv row-start-1 col-start-2 relative">
            <div className=" hidden lg:block absolute right-40  top-40 ">
              <Circle color="" text="CRUNCHY" textColour="yellow" />
            </div>
          </div>
          <div className="circleDiv row-start-2 col-start-1 relative">
            <div className=" hidden lg:block absolute left-20  bottom-20 ">
              <Circle color="" text="DELICIOUS" textColour="yellow" />
            </div>
          </div>
        </div>
      </BackgroundImage>
      <Marquee bg="bg-orange" />
    </section>
  )
}

export default StoryBg
