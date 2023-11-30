import React, {useState} from "react";
import {BsSunFill, BsMoonFill} from "react-icons/bs";
import "./burger.scss"

export default function Burger({open, setOpen, lang, langClick, fon, setFon, setDark, dark}){
   
    
    return(
        <div>
        <div className={"burger " + (open && "active")}>
            <div className="navName">
                <img></img>
                <div>
                    <span>{lang.burgName}</span>
                    <span>{lang.burgLastName}</span>
                </div>
                <div className="border"></div>
            </div>
            <nav className="nav">
                <ul>
                    <div className="list2">
                        <a href="#header" onClick={()=>setOpen()}><li>{lang.home}<div></div></li></a>
                        <a href="#section" onClick={()=>setOpen()}><li>{lang.about}<div></div></li></a>
                        <a href="#sectionSkill" onClick={()=>setOpen()}><li>{lang.skills}<div></div></li></a>
                        <a href="#sectionWork" onClick={()=>setOpen()}><li>{lang.work}<div></div></li></a>
                        <a href="#sectionContact" onClick={()=>setOpen()}><li>{lang.contact}<div></div></li></a>
                    </div>
                    <div className={"sunMoon " + (dark && "active")}>
                        <div className="fon">
                            {/* <span className="ball" onClick={()=>setFon(!fon)}></span> */}
                            <span className="ball"></span>
                            <BsSunFill className="sun" onClick={()=>setDark(false)}/>
                            <BsMoonFill className="moon" onClick={()=>setDark(true)}/>
                        </div>
                        <button onClick={langClick} className="lang">Eng | Հայ</button>
                    </div>
                </ul>
            </nav>
        </div>
        </div>
    )
}