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
    <div className="menuItem relative w-full flex">
      <div className="text w-1/2 my-auto p-2">
        <div className=" w-6">
          <img src={star} alt="star" />
        </div>
        <span className=" name ginto  uppercase text-xl text-blue my-6">{props.name}</span>
        <p className="description text-white text-sm uppercase tracking-widest bold">
        {props.text}
        </p>
      </div>
      <Img fluid={pic(props.pic)} className="menu-pic w-1/2" />
    </div>
  )
}

export default MenuMenuItem
