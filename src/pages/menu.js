import React, { useState} from "react"
import TopBarOrder from "../components/topBarOrder"
import Header from "../components/header"
import StoryBg from "../components/story_bg"
import Menu_menuPage from "../components/menu_menuPage"
import Gif from "../components/gif"
import Location from "../components/location"
import Followus from "../components/followus"
import Contact from "../components/contact"
// import OrderNow from "../components/ordernow"
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css';

// import Plx from "react-plx"

export default function Home() {
  let [menuActive, setmenuActive] = useState(false);
  // let [vh, setVh] = useState(0);

  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
    
  return (
    <div className="pageWrapper">
      <head>
      <title>Gatsu Gatsu</title>
      </head>
    <TopBarOrder/>
    <Header toggleMenu={toggleMenu} menuState={menuActive} page="menu" />
    {/* <Plx parallaxData={parallaxMoveDown} className=" hidden md:block fixed translate-y-full top-4 lg:top-10 right-4 xl:right-20 orderNow  z-50 mb-80">
    <OrderNow />
        </Plx> */}
    <StoryBg toggleMenu={toggleMenu} menuState={menuActive} />
    <Menu_menuPage />
    <Gif/>
    <Location/>
    <Contact/>
    <Followus bg="bg-blue"/>
    </div>
  )
}
