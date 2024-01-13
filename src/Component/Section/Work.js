import React, {useEffect, useRef} from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import Calculate from "../Calculate/Calculate";
import Task from "../Task/Task";
import  Game from "../Game/Game";
import Shop from "../Shop/Shop"
import HeaderMain from "../Shop/HeaderMain";
import  GameTwo from "../GameTwo/GameTwo"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./work.scss";

export default function Work({lang, fon, dark}){
    const slider = useRef(null)
   
    let active = 0
    const left = ()=>{
        if(active!=0){
            active++
            }
            else if(active==0)active-=3
            Array.from(slider.current.children).map((elem)=>{
                elem.style=`transform: translateX(${active*100}%)`
            })

        
        
    }
    const right = ()=>{
        if(active != -3){
            active--
            }
            else if(active==-3)active=0
            Array.from(slider.current.children).map((elem)=>{
                elem.style=`transform: translateX(${active*100}%)`
            })

        
        
    }
    return(
      
        <section id="sectionWork" className={"section3 " + (dark && "active")}>
            <h3 data-aos="zoom-in-down">{lang.work}</h3>
            <div className="sliderCont">
            <div onClick={left} className="left"> <IoIosArrowBack /></div>
            <div className="work" ref={slider}>
                <div className="slider">
                    <Calculate/>
                </div>
                <div className="sliderTwo">
                    <Task lang={lang} fon={fon}/>
                </div>
                <div className="sliderThree">
                    <Game fon={fon}/>
                </div>
                <div className="sliderFour">
                    {/* <GameTwo/> */}
                    {/* <Shop></Shop> */}
                    {/* <BrowserRouter>
                       <Routes>
                        <Route path ="/" element={<Shop></Shop>}>
                            <Route path="header" element={<HeaderMain></HeaderMain>}></Route>
                        </Route>
                       </Routes> 
                    </BrowserRouter> */}
                    <Link to="/">Site</Link>
                    {/* <Link to="/">ShopSita</Link> */}
                    {/* <a href="/">ShopSita</a> */}
                </div>

            </div>
            <div className="right" onClick={right}> <IoIosArrowForward /></div>
            </div>
        </section>
       
    )
}

