import React, {useEffect, useRef} from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Calculate from "../Calculate/Calculate";
import Task from "../Task/Task";
import  Game from "../Game/Game";
import  GameTwo from "../GameTwo/GameTwo"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import "./work.scss";

export default function Work({lang, fon}){
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
      
        <section id="sectionWork" className={"section3 " + (fon && "active")}>
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
                    <Game/>
                </div>
                <div className="sliderFour">
                    <GameTwo/>
                </div>
            </div>
            <div className="right" onClick={right}> <IoIosArrowForward /></div>
            </div>
        </section>
       
    )
}

