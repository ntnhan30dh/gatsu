import React, { useRef } from "react"
import { Link } from "gatsby"

import Slider from "react-slick"

import MenuMenuItem from "./menu-menu-item"
import Circle from "./circle"
import Arrow from "./arrow"

import previous from "../images/arrow_back.png"
import next from "../images/arrow_next.png"
import gatsu_guy from "../images/gatsu_guy.png"
import arrowDown from "../images/arrow_down.png"

const Menu_menuPage = () => {
  //creating the ref
  const customeSlider = useRef()
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    //adaptiveHeight:true
  }

  const arrow = "w-6 mx-1"

  return (
    <section className="menuMenuContainer bg-orange" id="menu">
      <div className="top relative bg-skin p-6 sm:p-10 md:p-20 lg:p-30 xl:px-64 2xl:px-72">
        <div className="headline ">
          <h1 className="  ginto uppercase text-blue text-10vw sm:text-12vw //md:text-7vw //xsm:text-6xl md:text-7xl lg:text-8vw xl: leading-90 max-w-max  relative">
            CHeck <br /> out our <br /> Menu{" "}
            <span className="hidden md:block absolute bottom-0 //lg:bottom-6 right-0 //xl:right-32 w-14 lg:w-20 ">
              <img src={arrowDown} alt="arrow" />
            </span>
          </h1>
          <div className=" w-40 md:w-52 lg:w-60 xl:w-96 absolute -top-10 md:top-1/10 right-0 md:right-1/10 ">
            <div className="relative  ">
              <img
                src={gatsu_guy}
                alt="logo"
                className="relative z-20 transform md:rotate-30"
              />
              <div className=" hidden md:block absolute -top-6 -left-24 lg:-left-4 lg:top-0">
                <Link
                  to="http://www.mjam.net/restaurant/wien/gatsu-gatsu"
                  target="_blank"
                >
                  <Circle
                    color="orange"
                    text="ORDER DELIVERY NOW!"
                    rotate="-rotate-12"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text my-10">
          <p className=" menuMenu_p uppercase  font-bold text-left text-sm md:text-lg lg:text-xl text-orange md:pr-20 lg:pr-40 ">
            all the classic dishes you know+love, like pad thai and curries,
            join forces with tasty street food finds like Thai Burgers and
            waffle fries.
          </p>
          {/* <span className="block uppercase text-blue text-2xl ginto text-right pr-10 md:hidden">
            swipe
          </span> */}
        </div>
        <div className="buttons text-right //py-2 -mt-6 md:-mt-10 md:hidden">
          <button onClick={() => gotoPrev()}>
            {" "}
            <div className={arrow}>
              <img src={previous} alt="arrow" />
            </div>
          </button>
          <button onClick={() => gotoNext()}>
            <div className={arrow}>
              <img src={next} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
      <div className="siderWrap relative">
        <Arrow
          onClickHandle={() => gotoNext()}
          type="next"
          bgColour="bg-blue"
        />
        <Arrow
          onClickHandle={() => gotoPrev()}
          type="previous"
          bgColour="bg-blue"
        />
        <Slider {...settings} ref={customeSlider} className="">
          <MenuMenuItem
            className="h-full"
            name="Oh My, *Pad *Thai"
            pic="padThai"
            text="Pad Thai - Gatsu Style: Our rice noodle bowl served with egg, green vegetables, marinated carrots, Amai sauce, crunchy peanuts, sprouts and fresh lime - this is our modern version of the classic. Choose your protein: tender, grilled chicken or tofu."
          />
          <MenuMenuItem
            name="Glass* Noodle* Salad* Bowl"
            pic="GlassNoodle"
            text="Lukewarm bowl with glass noodles and marinated carrots, cucumber, sprouts, fresh salad, coriander, peanuts and our fresh lime-chili dressing.
We recommend topping it up with crispy spring rolls (with chicken & veggies).
"
          />

          <MenuMenuItem
            name="Katsu* Katsu* Bowl"
            pic="Katsu"
            text="Aromatic rice bowl served with fresh veggies, finely grated cabbage, crunchy chicken and our creamy signature Katsu curry sauce. It is topped with mild chillies and spring onions.
"
          />

         
          <MenuMenuItem
            name="Lucky Teriyaki Bowl"
            pic="Lucky"
            text="Delicious rice bowl served with crunchy veggies, crispy chicken, fresh salad, mild chillies and spring onions. It comes with aromatic, slightly sweet Gatsu Teriyaki sauce on  the side."
          />
          <MenuMenuItem
            name="Happy Yogi Bowl"
            pic="HappyYogi"
            text="Rice bowl served with marinated carrots,  cucumber and finely grated red cabbage, and topped with peanut sauce, mild chillies, spring onions. It comes with either spring rolls (chicken & veggies) or crispy chicken."
          />

          <MenuMenuItem
            name="Go Nuts Red Curry"
            pic="GoNuts"
            text="Our creamy, red peanut curry served with spinach, broccoli, snow peas, asparagus, spring onions and rice is a must-have for all the Asian fans. It comes with either tender grilled chicken or tofu"
          />

          <MenuMenuItem
            name="Green Delight Curry"
            pic="GreenDelight"
            text="Green curry with a hint of coconut, served with spinach, broccoli, snow peas, asparagus, spring onions and rice. It comes with either tender grilled chicken or tofu."
          />

          <MenuMenuItem
            name="Tasty Thai Burger"
            pic="ThaiBurger"
            text="Our Thai burger with crispy chicken, creamy peanut sauce, mayo, marinated carrots, finely grated red cabbage, cucumber, coriander, mild chillies, spring onions and iceberg lettuce will bring you that extra crunch home."
          />
          <MenuMenuItem
            name="Spice *it Up Burger"
            pic="SpiceItUp"
            text="The burger with a kick: crispy chicken, slightly spicy sriracha mayo, marinated carrots, finely grated red cabbage, cucumber, coriander, mild chillies, spring onions and iceberg lettuce. Super crunchy and slightly spicy."
          />
          <MenuMenuItem
            name="Lucky Teriyaki Burger"
            pic="TeriyakiBurger"
            text=" Umami! Crispy chicken, aromatic, slightly sweet teriyaki sauce, mayo, pickled carrots, finely grated red cabbage, cucumber, coriander, mild chillies, spring onions and iceberg lettuce. The taste that makes you happy."
          />

          <MenuMenuItem
            name="Golden Gate Fries"
            pic="GoldenGate"
            text="Extra crispy sweet potato fries waffle style."
          />

          <MenuMenuItem
            name="K-Pop Chicken"
            pic="KPop"
            text="Korean Fried Chicken with a glaze of your choice. Choose between Creamy Dreamy Peanut Glaze (creamy peanut sauce), Uh Mami! Glaze (sweet Teriyaki Glaze) or Spice it Up Mayo (slightly sharp Sriracha Mayo)."
          />

          <MenuMenuItem
            name="Rock'n'*Rolls"
            pic="Rock_n_Rolls"
            text="The classic that can not be missed: 6 crispy spring rolls (chicken & veggies). They always come with a dip of your choice."
          />

          <MenuMenuItem
            name="Cheeky Chicken Dump*lings"
            pic="Dumplings"
            text="Dumplings are among the Allstars of the Asian cuisine. They are stuffed with chicken and veggies and always come with a dip of your choice."
          />

          <MenuMenuItem
            name="Gatsu Side Salad"
            pic="GatsuSide"
            text="Crispy lettuce served with carrots, finely grated red cabbage, bean sprouts, cucumber, peanuts and our fresh lime and chilli dressing."
          />
        </Slider>
      </div>
    </section>
  )
}

export default Menu_menuPage
