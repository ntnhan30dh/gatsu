import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import star from "../images/star_yellow.png"

const MenuMenuItem = props => {
  const data = useStaticQuery(graphql`
    {
      padThai: file(relativePath: { eq: "menuPic_PadThai.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GlassNoodle: file(relativePath: { eq: "menuPic_GlassNoodle.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Katsu: file(relativePath: { eq: "menuPic_Katsu.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Lucky: file(relativePath: { eq: "menuPic_Lucky.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      HappyYogi: file(relativePath: { eq: "menuPic_HappyYogi.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GoNuts: file(relativePath: { eq: "menuPic_GoNuts.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      GreenDelight: file(relativePath: { eq: "menuPic_GreenDelight.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ThaiBurger: file(relativePath: { eq: "menuPic_ThaiBurger.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SpiceItUp: file(relativePath: { eq: "menuPic_SpiceitUp.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      TeriyakiBurger: file(relativePath: { eq: "menuPic_TeriyakiBurger.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GoldenGate: file(relativePath: { eq: "menuPic_GoldenGate.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Kpop: file(relativePath: { eq: "menuPic_SpiceitUp.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Rock_n_Rolls: file(relativePath: { eq: "menuPic_Rock_n_Rolls.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Dumplings: file(relativePath: { eq: "menuPic_Dumplings.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GatsuSide: file(relativePath: { eq: "menuPic_GatsuSide.jpg" }) {
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
      case "GlassNoodle":
        return data.GlassNoodle.childImageSharp.fluid
      case "Katsu":
        return data.Katsu.childImageSharp.fluid
      case "Lucky":
        return data.Lucky.childImageSharp.fluid
      case "HappyYogi":
        return data.HappyYogi.childImageSharp.fluid
      case "GoNuts":
        return data.GoNuts.childImageSharp.fluid
        case "GreenDelight":
          return data.GreenDelight.childImageSharp.fluid
          case "ThaiBurger":
        return data.ThaiBurger.childImageSharp.fluid
        case "SpiceItUp":
        return data.SpiceItUp.childImageSharp.fluid
        case "TeriyakiBurger":
        return data.TeriyakiBurger.childImageSharp.fluid
        case "GoldenGate":
        return data.GoldenGate.childImageSharp.fluid
        case "KPop":
        return data.Kpop.childImageSharp.fluid
        case "Rock_n_Rolls":
        return data.Rock_n_Rolls.childImageSharp.fluid
        case "Dumplings":
        return data.Dumplings.childImageSharp.fluid
        case "GatsuSide":
        return data.GatsuSide.childImageSharp.fluid
        default:
        return data.padThai.childImageSharp.fluid
    }
  }

  return (
    <div className="menuMenuItemWrap relative w-full h-full flex">
      <div className="text w-7/12 md:w-1/2 my-auto px-2  xsm:px-4 md:px-24 lg:px-40 xl:px-44 xxl:px-52 py-10 md:py:16 lg:py-24">
        <div className=" w-6 lg:w-10 xl:w-16">
          <img src={star} alt="star" />
        </div>
        <h1 className=" name ginto  uppercase text-xl md:text-5xl lg:text-6xl xl:text-7.5xl text-blue my-4 md:my-6  ">{props.name.split('*').map(str => <span className="ginto">{str} <br/> </span> )}</h1>
        <p className="md:description font-bold text-white text-xs xsm:text-sm lg:text-base xl:text-xl uppercase tracking-widest bold xxsm:my-4 lg:my-10 xl:pr-30  ">
        {props.text}
        </p>
      </div>
      {/* <Img fluid={pic(props.pic)} className="menu-pic w-5/12 md:w-1/2" /> */}
      <BackgroundImage
        Tag="section"
        fluid={pic(props.pic)}
        background-size="cover"
        opacity={0.5}
        className="menu-pic w-5/12 md:w-1/2  "
      >
      </BackgroundImage>
      
    </div>
  )
}

export default MenuMenuItem
