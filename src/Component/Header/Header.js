import React, {useState} from "react";
import Nav from "./Nav"
import Home from "./Home";
import Burger from "./Burger";
import "./header.scss";
import "./header.scss"
import logo from "./img/logoPic.gif"


export default function Header({open, setOpen, lang, langClick, fon, setFon, setDark, dark}){
    return(
        <header id="header" className="header">
            <div className={"head " + (open && "active")}>
                <img src={logo} className="logo"></img>
                <Nav lang = {lang} langClick = {langClick} fon={fon} setFon={setFon}/>
                
                <Burger open = {open} setOpen={setOpen} lang={lang} langClick={langClick} fon={fon} setFon = {setFon} setDark = {setDark} dark={dark}/>
                <div className="bgCont">
                    <div className="burgerClick" onClick={()=>setOpen(!open)}>
                        <div className="bd1"></div>
                        <div className="bd2"></div>
                        <div className="bd3"></div>
                    </div>
                </div>
            </div>
            <div className="home">
                <Home lang={lang}/>
                <div className="animated"></div>
                <div className="animatedTwo"></div>
                
            </div>
        </header>
    )
}