import React from "react"
import { Link } from "gatsby"


import MarqueeBlue from "./marquee_blue"
import Circle from "./circle"
import LocationItem from "./locationItem"
import star from "../images/star.png"


const Location = () => {
  return (
    <section className="location bg-blue pb-10 ">
      <MarqueeBlue bg="bg-blue" text="*delivery locations*" />
      <div className=" relative md:px-20  lg:px-40 xl:px-72   lg:py-20">
      <div className="circleDiv hidden lg:block absolute top-1/10 right-1/10">
          <Link to="http://www.mjam.net/restaurant/wien/gatsu-gatsu" target="_blank" >
            <Circle color="yellow" text="ORDER DELIVERY NOW!" rotate="rotate-12" />
        </Link>
          </div>
      <div className="headlineWrap mt-12 ml-6 xsm:ml-10 sm:ml-20 md:ml-0">
        <div className=" w-10  xl:w-20">
          <img src={star} alt="star" />
        </div>
        <span className="ginto leading-100 text-12vw sm:text-10vw //md:text-15vw //lg:text-8xl xl:text-9xl text-orange ">
          {" "}
          DELIVERY <br /> LOCATIONS
        </span>
        </div>
        <div className="locationsWrap mb-8 md:flex justify-between">
          <LocationItem
            first="AUS -"
            second="TRIA"
            text="* VIENNA * GRAZ * LINZ"
          />

      
          <LocationItem
            first="HUN -"
            second="GARY"
            text="* COMING SOON *"
          />
         

          <LocationItem
            first="FIN -"
            second="LAND"
            text="* COMING SOON *"
          />
        </div>
      </div>

      
    </section>
  )
}

export default Location
