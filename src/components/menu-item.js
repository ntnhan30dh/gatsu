import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
const MenuItem = props => {
  const data = useStaticQuery(graphql`
    {
      padThai: file(relativePath: { eq: "menuPic_PhadThai.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GlassNoodle: file(relativePath: { eq: "menuPic_GlassNoodleSaladBowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Katsu: file(relativePath: { eq: "menuPic_KatsuKatsuBowl.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Lucky: file(relativePath: { eq: "menuPic_LuckyTeriyaki.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      HappyYogi: file(relativePath: { eq: "menuPic_HappyYogi.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GoNuts: file(relativePath: { eq: "menuPic_GoNutsRedCurry.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      GreenDelight: file(relativePath: { eq: "menuPic_GreenDelightCurry.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ThaiBurger: file(relativePath: { eq: "menuPic_TastyThaiBurger.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SpiceItUp: file(relativePath: { eq: "menuPic_SpiceItUpBurger.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      TeriyakiBurger: file(relativePath: { eq: "menuPic_LuckyTeriyakiBurger.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GoldenGate: file(relativePath: { eq: "menuPic_GoldenGateFries.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Kpop: file(relativePath: { eq: "menuPic_KPopChicken.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Rock_n_Rolls: file(relativePath: { eq: "menuPic_RockNRolls.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Dumplings: file(relativePath: { eq: "menuPic_CheekyChickenDumplings.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GatsuSide: file(relativePath: { eq: "menuPic_GatsuSideSalad.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
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
    <div className="menuItem relative w-full px-4 //md:px-2  ">
     
      {/* <BackgroundImage
        fluid={pic(props.pic)}
        background-size="cover"
        opacity={0.5}
        className="w-full h-0 pb-140 menu-pic border-8  lg:border-10 border-solid border-skin "
      ></BackgroundImage> */}

      <div className=" w-full menu-pic border-8  lg:border-10 border-solid border-skin">
          <Img className="w-full" fluid={pic(props.pic)} />
        </div>
     
      <div className="text uppercase text-xl md:text-2xl lg:text-3xl  absolute bottom-0 w-full text-skin mb-8 md:px-14 ">
        {" "}
        <div className="block   mx-auto  text-center">
          {" "}
          {props.name.split("*").map(str => (
            <span className="ginto">
              {str} <br />{" "}
            </span>
          ))}{" "}
        </div>
      </div>
    </div>
  )
}

export default MenuItem
