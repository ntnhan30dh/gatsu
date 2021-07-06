import React from "react"
import MarqueeLogo from "./marquee_logo"
import btn_contact from "../images/btn_contact.png"
import btn_imprint from "../images/btn_imprint.png"
import btn_nutrition from "../images/btn_nutrition.png"
import btn_hours from "../images/btn_hours.png"
import btn_followus from "../images/btn_followus.png"
//import RotatedText from "./rotatedText"
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

  const textItem = "textItem  text-center my-8 "
  const p = "text-xl md:text-2xl text-orange"
  return (
    <section className="contactContainer bg-skin" id="contact">
      <MarqueeLogo />
      <div className="main bg-skin p-10 md:p-20  lg:px-40 xl:px-60 2xl:px-72 ">
        <div className=" xsm:w-2/3 md:w-1/3 mx-auto my-10">
          <Img className="w-full" fluid={data.pic.childImageSharp.fluid} />
        </div>
        <div className="textWrap md:grid grid-rows-2 grid-cols-3">
          <div className={`${textItem} row-start-1 col-start-1`}>
            {/* <RotatedText text="CONTACT" /> */}
            <div className=" btn max-w-max h-6 md:h-8 lg:h-9 mx-auto my-4">
              <img src={btn_contact} alt="logo" />
            </div>
            <p className={p}>
              Tel: +44988670034534 <br />
              Mail: gatsugatsu@mail.com
            </p>
          </div>

          <div className={`${textItem} row-start-2 col-start-1 md:-mt-12`}>
            {/* <RotatedText text="HOURS" /> */}
            <div className=" btn max-w-max h-6 md:h-8 lg:h-9 mx-auto my-4">
              <img src={btn_hours} alt="logo" />
            </div>
            <p className={p}>
              Monday-Sunday <br />
              11: 00-23: 00
            </p>
          </div>

          <div className={`${textItem} row-start-1 col-start-3`}>
            {/* <RotatedText text="NUTRITION" /> */}
            <div className=" btn max-w-max h-6 md:h-8 lg:h-9 mx-auto my-4">
              <img src={btn_nutrition} alt="logo" />
            </div>
            <p className={p}>
              <a className={p} href={downloadFile} download>
                Download PDF
              </a>
            </p>
          </div>

          <div className={`${textItem} md:-mt-14`}>
            {/* <RotatedText text="FOLLOW US" /> */}
            <div className=" btn max-w-max h-6 md:h-8 lg:h-9 mx-auto my-4">
              <img src={btn_followus} alt="logo" />
            </div>
            <p className={p}>@gatsugatsu_delivery</p>
          </div>

          <div className={`${textItem} row-start-1 col-start-2`}>
            {/* <RotatedText text="IMPRINT" /> */}
            <div className=" btn max-w-max h-6 md:h-8 lg:h-9 mx-auto my-4">
              <img src={btn_imprint} alt="logo" />
            </div>
            <p className={p}>
              Honest Food Company <br />
              GmbH <br />
              Gudrunstraße 11, <br />
              1100 Vienna
            </p>
          </div>

          <div className={`${textItem} row-start-2 col-start-2 md:-mt-2`}>
            <ul className="underline">
              <li>
                {" "}
                <Link to="/imprint" className={p}>
                  {" "}
                  Imprint{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/privacy" className={p}>
                  {" "}
                  Privacy{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/disclaimer" className={p}>
                  {" "}
                  Terms and Conditions{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-8 mx-auto md:-mt-16 md:w-12">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </section>
  )
}

export default Contact
