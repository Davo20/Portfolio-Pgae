import React, {useEffect} from "react";
import { MdAlternateEmail } from "react-icons/md"
import {FaLinkedinIn} from "react-icons/fa"
import {BsFillTelephoneFill} from "react-icons/bs"
import {RiArrowDownLine} from "react-icons/ri"
import { Typewriter } from "react-simple-typewriter";
import "./header.scss"

export default function Home({lang}){
    return(
        <div className="homeContainer">
            
            <div className="contact">
                <a href="mailto:dav507805@gmail.com" data-aos="fade-right" data-aos-delay="200" className="linkHref">
                    <MdAlternateEmail/>
                </a>
                <a href="https://www.instagram.com/balabekyan_david/" data-aos="fade-right" data-aos-delay="250" className="linkHref">
                    <FaLinkedinIn/>
                </a>
                <a href="tel: +374-91-507-805" data-aos="fade-right" data-aos-delay="300" className="linkHref">
                    <BsFillTelephoneFill/>
                </a>
            </div>
            <div className="myName">
                <h2>
                <Typewriter
                    loop={1}
                    cursor
                    cursorStyle=""
                    typeSpeed={100}
                    words={[lang.homeName]}
                    />
                </h2>
                <div className="download">
                    <span>{lang.homeMyAbout}</span>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000"  className="img"></div> 
            <a className="arrowDown" href="#section">
                <RiArrowDownLine />
            </a>
        </div>
    )
}