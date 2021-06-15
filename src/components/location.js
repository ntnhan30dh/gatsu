import React from "react"
import MarqueeBlue from "./marquee_blue"
import LocationItem from "./locationItem"
import star from "../images/star.png"

const Location = () => {
  return (
    <section className="location bg-blue">
      <MarqueeBlue bg="bg-blue" text="*delivery locations*" />
      <div className="headlineWrap w-3/4 mx-auto">
        <div className=" w-10">
          <img src={star} alt="star" />
        </div>
        <span className="text-2xl text-orange">
          {" "}
          DELIVERY <br /> LOCATIONS
        </span>
        <div className="locationsWrap py-8 ">
          <LocationItem
            first="AUS-"
            second="TRIA"
            text="* VIENNA * GRAZ * LINZ"
          />

          <LocationItem
            first="HUN-"
            second="GARY"
            text="* COMING SOON *"
          />

          <LocationItem
            first="FIN-"
            second="LAND"
            text="* COMING SOON *"
          />
        </div>
      </div>
    </section>
  )
}

export default Location
