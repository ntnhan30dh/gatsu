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
  
const pic = (picName) =>{
  switch(picName) {
    case "padThai":
      return data.padThai.childImageSharp.fluid
      case "sesame":
        return data.sesame.childImageSharp.fluid
    default:
      return  data.padThai.childImageSharp.fluid
  }
  
} 
  


  return (
    <div className="menuItem">
            <Img
              fluid={pic(props.pic)}
              className="menu-pic"
            />
            <div className="text"> {props.name}</div>
          </div>
  )
}

export default MenuItem
