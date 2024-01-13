import React from "react";
import HeaderSlider from "./Header/HeaderSlider";
import Aside from "./aside/Aside";
import HomeSection from "./HomeSection";
import Footer from "./Footer";
import NavBar from "./Nav/NavBar";

export default function HeaderMain ({productName, cardClick, languageBurger, language, languageKey}){
    return(
        <div>
            {/* <NavBar></NavBar> */}
            <HeaderSlider></HeaderSlider>
            <Aside></Aside>
            <HomeSection productName={productName} cardClick={cardClick} language={language} languageKey={languageKey}></HomeSection>
            <Footer languageBurger={languageBurger} language={language} languageKey={languageKey}></Footer>
        </div>
    )
}