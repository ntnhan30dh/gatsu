import React, { useState, useEffect } from "react"
import MarqueeBlue from "./marquee_blue"
import gatsu from "../images/gatsu_guy2.png"
import Circle from "./circle"

const url =
  'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":40346689,"first":6}'

const Followus = () => {
  const [insta, setInsta] = useState([])
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        const photosArray = data.data.user.edge_owner_to_timeline_media.edges
        setInsta(photosArray)
        console.log("insta",insta)
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

      <div className="IGwrap">
        {insta.map(photo => (
          <div className=" w-44 relative z-10">
            <img src={photo.node.display_url} alt="pic" key={photo.node.id} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Followus
