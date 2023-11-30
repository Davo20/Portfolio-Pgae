import React from "react";
import HeaderSlider from "./Header/HeaderSlider";
import Aside from "./aside/Aside";
import HomeSection from "./HomeSection";
import Footer from "./Footer";
import NavBar from "./Nav/NavBar";

export default function HeaderMain ({productName, cardClick, selectLanguage, languageBurger}){
    return(
        <div>
            {/* <NavBar></NavBar> */}
            <HeaderSlider></HeaderSlider>
            <Aside></Aside>
            <HomeSection selectLanguage={selectLanguage} productName={productName} cardClick={cardClick}></HomeSection>
            <Footer languageBurger={languageBurger} selectLanguage={selectLanguage}></Footer>
        </div>
    )
}