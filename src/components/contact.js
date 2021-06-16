import React from "react"
import MarqueeLogo from "./marquee_logo"
import RotatedText from "./rotatedText"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import downloadFile from "../downloads/Gatsu_Gatsu_Website_Instructions.pdf"
import arrow from "../images/arrow_down.png"

import { Link } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      pic: file(relativePath: { eq: "contact_pic.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const textItem = "textItem  text-center my-8"
  const p = "text-sm text-orange"
  return (
    <section className="contactContainer bg-skin" id="contact">
      <MarqueeLogo />
      <div className="main bg-skin p-10">
        <Img fluid={data.pic.childImageSharp.fluid} className="" />
        <div className="textWrap">
          <div className={textItem}>
            <RotatedText text="CONTACT" />
            <p className={p}>
              Tel: +44988670034534 <br />
              Mail: gatsugatsu@mail.com
            </p>
          </div>

          <div className={textItem}>
            <RotatedText text="HOURS" />
            <p className={p}>
              Monday-Sunday <br />
              11: 00-23: 00
            </p>
          </div>

          <div className={textItem}>
            <RotatedText text="NUTRITION" />
            <p className={p}>
              <a className={p} href={downloadFile} download>
                Download PDF
              </a>
            </p>
          </div>

          <div className={textItem}>
            <RotatedText text="FOLLOW US" />
            <p className={p}>@gatsugatsu_delivery</p>
          </div>

          <div className={textItem}>
            <RotatedText text="IMPRINT" />
            <p className={p}>
              Honest Food Company <br />
              GmbH <br />
              Gudrunstraße 11, <br />
              1100 Vienna
            </p>
          </div>

          <div className={textItem}>
            <ul className="underline">
              <li > <Link to='/imprint' className={p}> Imprint </Link> </li>
              <li> <Link to='/privacy' className={p}> Privacy </Link> </li>
              <li> <Link to='/disclaimer' className={p}> Terms and Conditions </Link> </li>
            </ul>
          </div>

          <div className=" w-8 mx-auto">
        
        <img src={arrow} alt="arrow" />
      </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
