import React from "react"

const Marquee = (props) =>{
    return (
     <div className={`marquee flex relative  overflow-hidden py-2 md:py-6 flex-nowrap text-yellow ${props.bg} lg:text-xl -mt-1`}>
        <div className="marquee_list flex ">
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            GATSU GATSU*
          </span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            *ASIAN STREETFOOD TO BE DEVOURED*
          </span>
          <span className="marquee_item flex items-center mr-2">*GOBBLE*</span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            *MUNCHITY MUNCHITY*
          </span>
          <span className="marquee_item flex items-center mr-2">*DEVOUR*</span>
          <span className="marquee_item flex items-center mr-2">*INDULGE*</span>
          <span className="marquee_item flex items-center mr-2">*YUM</span>
        </div>

        <div className="marquee_list flex">
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            GATSU GATSU*
          </span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            *ASIAN STREETFOOD TO BE DEVOURED*
          </span>
          <span className="marquee_item flex items-center mr-2">*GOBBLE*</span>
          <span className=" whitespace-nowrap marquee_item flex items-center mr-2">
            *MUNCHITY MUNCHITY*
          </span>
          <span className="marquee_item flex items-center mr-2">*DEVOUR*</span>
          <span className="marquee_item flex items-center mr-2">*INDULGE*</span>
          <span className="marquee_item flex items-center mr-2">*YUM</span>
        </div>

        <div className="marquee_list flex">
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            GATSU GATSU*
          </span>
          <span className="whitespace-nowrap marquee_item flex items-center mr-2">
            *ASIAN STREETFOOD TO BE DEVOURED*
          </span>
          <span className="marquee_item flex items-center mr-2">*GOBBLE*</span>
          <span className=" whitespace-nowrap marquee_item flex items-center mr-2">
            *MUNCHITY MUNCHITY*
          </span>
          <span className="marquee_item flex items-center mr-2">*DEVOUR*</span>
          <span className="marquee_item flex items-center mr-2">*INDULGE*</span>
          <span className="marquee_item flex items-center mr-2">*YUM</span>
        </div>
      </div>
    )
}

export default Marquee 