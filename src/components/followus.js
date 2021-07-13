import React, { useState, useEffect } from "react"
import MarqueeBlue from "./marquee_blue"
import gatsu from "../images/gatsu_guy2.png"
import Circle from "./circle"

const Followus = props => {
  const [insta, setInsta] = useState(undefined)
  const token =
    "IGQVJWVG5zaGNtYUtscktZAdG55eXQ4VU9nTFpZAYlMyOWZALc0x0dVR1ZAFQ4V29uQTludHE5b3J5YXAwc0lxX3owcWMwa0tSNFh2RDNjUENsOThZASWZAqM0hYcndDdjVaWlBRRGxUaWViMXRJVEVqLURLOAZDZD"
  const url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${token}`
  
  //let a =  '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' ;
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        // const photosArray = data.data.user.edge_owner_to_timeline_media.edges
        setInsta(data.data)
        //  console.log("insta",insta)
        // console.log("data",data)
      })
  }, [])
  return (
    <section className={`followUsWrap  ${props.bg}`}>
      <MarqueeBlue
        bg={props.bg==="bg-blue"?"bg-orange":"bg-blue"}
        text="* follow our shenanigans on instagram * "
      />
      <div className="top w-full md:flex flex-row-reverse sm:p-10 md:mt-16 lg:px-30 xl:px-40 //xl:pt-28 //2xl:px-60 justify-center ">
        <div className="pic relative -mb-20 sm:-mb-32 md:-mt-14 lg:-mt-24 xl:-mt-32 lg:-ml-20 xl:-ml-24  ml-1/2 sm:ml-8/12 md:ml-auto max-w-max ">
          <div className=" w-60 lg:w-80 xl:w-96 relative z-10">
            <img src={gatsu} alt="gatsu" />
          </div>
          <div className="absolute top-8 md:-top-2 lg:top-12 xl:top-16 -left-4 md:-left-20 lg:-left-16 xl:-left-10 ">
            <Circle color= {props.bg==="bg-blue"?"orange":"yellow"} text="ENJOY!" rotate="-rotate-12" />
          </div>
        </div>
        <div className="text -mt-10 ml-8 pb-10 sm:-mt-0 sm:ml-0 lg:pb-20 ">
          <p
            className={`ginto ${
              props.bg === "bg-orange" ? "text-skin" : `text-skin`
            } text-9vw //xsm:text-5xl //sm:text-4xl  md:text-6vw leading-100 //xl:text-7vw `}
          >
            <div className="my-4 sm:my-8"> @ </div>
            GATSUGATSU _  <br />
            DELIVERY
          </p>
        </div>
      </div>

      <div className="IGwrap flex flex-wrap">
        {insta &&
          insta.filter(photo=>photo.media_url.includes("scontent")).slice(0, 9).map(photo => (
            <div className=" w-1/3 relative z-10">
              <img src={photo.media_url} alt="pic" />
            </div>
          ))}
      </div>
    </section>
  )
}

export default Followus
