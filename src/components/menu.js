import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

// import Img from "gatsby-image"
import MenuItem from "./menu-item"

import Marquee from "./marquee"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      padThai: file(relativePath: { eq: "menu_padthai.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="menuContainer " id="menu">
      <Marquee bg="bg-orange" />
      <Slider {...settings} className="">
        <MenuItem name="Pad Thai" pic="padThai" />
        <MenuItem
          name="SESAME SALAD"
          pic="sesame"
        />

        <div>
          {" "}
          <h1>hiiiiiiiii</h1>
        </div>
        <div>
          {" "}
          <h1>hiiiiiiiii</h1>
        </div>
        <div>
          {" "}
          <h1>hiiiiiiiii</h1>
        </div>
        <div>
          {" "}
          <h1>hiiiiiiiii</h1>
        </div>
      </Slider>
      <Marquee bg="bg-orange" />
    </section>
  )
}

export default Menu
