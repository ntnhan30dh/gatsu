import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import star from "../images/star_yellow.png"

const MenuMenuItem = props => {
  const data = useStaticQuery(graphql`
    {
      padThai: file(relativePath: { eq: "menu_padthai.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sesame: file(relativePath: { eq: "menu_sesame.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sourChicken: file(relativePath: { eq: "menu-menu_sourChicken.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const pic = picName => {
    switch (picName) {
      case "padThai":
        return data.padThai.childImageSharp.fluid
      case "sesame":
        return data.sesame.childImageSharp.fluid
      case "sourChicken":
        return data.sourChicken.childImageSharp.fluid
      default:
        return data.padThai.childImageSharp.fluid
    }
  }

  return (
    <div className="menuMenuItemWrap relative w-full flex">
      <div className="text w-1/2 my-auto p-2 xsm:p-4 md:px-24 lg:px-40 xl:px-44">
        <div className=" w-6 lg:w-10 xl:w-16">
          <img src={star} alt="star" />
        </div>
        <h1 className=" name ginto  uppercase text-xl md:text-5xl lg:text-7xl xl:text-9xl text-blue my-6  ">{props.name}</h1>
        <p className="md:description font-bold text-white text-xs xsm:text-sm md:text-base xl:text-xl uppercase tracking-widest bold xxsm:my-4 lg:my-10 xl:pr-40 ">
        {props.text}
        </p>
      </div>
      <Img fluid={pic(props.pic)} className="menu-pic w-1/2" />
    </div>
  )
}

export default MenuMenuItem
