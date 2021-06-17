import React, { useState, useEffect } from "react"
import MarqueeBlue from "./marquee_blue"
import gatsu from "../images/gatsu_guy2.png"
import Circle from "./circle"


const Followus = () => {
  const [insta, setInsta] = useState(undefined)
  const token = "IGQVJXSVlWT1hYS1o3Q1FfZAmxNNkN1bTZALRFRoSXJNLUVFbmhtVXdEd1lqSjYxdWRaNVZATcW9IY21kN1FtRkxMOU55amRic3lwNW80V0xfZA3N0WXBsQklyU0JQbkdReDY4eS1wR1drUDFxNkQ3dUdQMQZDZD"
  const url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${token}`
 
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
    <section className="FollowUsWrap bg-orange">
      <MarqueeBlue
        bg="bg-blue"
        text="* follow our shenanigans on instagram *"
      />
      <div className="top w-full">
        <div className="pic relative ml-48 max-w-max">
          <div className=" w-44 relative z-10">
            <img src={gatsu} alt="gatsu" />
          </div>
          <div className="absolute top-8 -left-10 z-0">
            <Circle color="yellow" text="ENJOY" />
          </div>
        </div>
        <div className="text -mt-10 ml-20">
          <p className="text-skin text-3xl">
            @ <br />
            GATSUGATSU_ <br />
            DELIVERY
          </p>
        </div>
      </div>

      <div className="IGwrap flex flex-wrap">
        {insta&&insta.slice(0, 9).map(photo => (
          <div className=" w-1/3 relative z-10">
            <img src={photo.media_url} alt="pic" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Followus
