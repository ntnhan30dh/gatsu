import React, { useState, useEffect } from "react"
import MarqueeBlue from "./marquee_blue"
import gatsu from "../images/gatsu_guy2.png"
import Circle from "./circle"

const Followus = props => {
  const [insta, setInsta] = useState(undefined)
  const token =
    "IGQVJWVG5zaGNtYUtscktZAdG55eXQ4VU9nTFpZAYlMyOWZALc0x0dVR1ZAFQ4V29uQTludHE5b3J5YXAwc0lxX3owcWMwa0tSNFh2RDNjUENsOThZASWZAqM0hYcndDdjVaWlBRRGxUaWViMXRJVEVqLURLOAZDZD"
  // const token = "IGQVJXSVlWT1hYS1o3Q1FfZAmxNNkN1bTZALRFRoSXJNLUVFbmhtVXdEd1lqSjYxdWRaNVZATcW9IY21kN1FtRkxMOU55amRic3lwNW80V0xfZA3N0WXBsQklyU0JQbkdReDY4eS1wR1drUDFxNkQ3dUdQMQZDZD"
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
    <section className={`FollowUsWrap  ${props.bg}`}>
      <MarqueeBlue
        bg="bg-blue"
        text="* follow our shenanigans on instagram *"
      />
      <div className="top w-full sm:flex flex-row-reverse sm:p-10 md:p-14 lg:p-30 xl:px-34 xl:pb-40 2xl:px-60 justify-between ">
        <div className="pic relative ml-48 sm:ml-0 max-w-max ">
          <div className=" w-44 md:w-52 lg:w-64 relative z-10">
            <img src={gatsu} alt="gatsu" />
          </div>
          <div className="absolute top-8 right-2/3">
            <Circle color="yellow" text="ENJOY!" rotate="-rotate-12" />
          </div>
        </div>
        <div className="text -mt-10 ml-8 pb-10 sm:-mt-0 sm:ml-0 lg:pb-20 ">
          <p
            className={`ginto ${
              props.bg === "bg-orange" ? "text-skin" : `text-orange`
            } text-3xl xsm:text-5xl sm:text-4xl md:text-5xl  lg:text-7xl xl:text-8xl`}
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
