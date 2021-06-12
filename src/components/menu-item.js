import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MenuItem = props => {
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
    }
  `)

  const pic = picName => {
    switch (picName) {
      case "padThai":
        return data.padThai.childImageSharp.fluid
      case "sesame":
        return data.sesame.childImageSharp.fluid
      default:
        return data.padThai.childImageSharp.fluid
    }
  }

  return (
    <div className="menuItem relative w-full  px-4">
      <Img fluid={pic(props.pic)} className="menu-pic border-6  border-solid border-skin" />
      <div className="text absolute bottom-0  w-full flex justify-center text-skin mb-4"> {props.name}</div>
    </div>
  )
}

export default MenuItem
