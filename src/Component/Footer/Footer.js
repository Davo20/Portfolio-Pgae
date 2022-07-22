import React from "react";
import {MdAlternateEmail} from "react-icons/md";
import {FaWhatsapp, FaLinkedinIn} from "react-icons/fa";
import "./footer.scss";

export default function Footer({lang, langClick}){
    return(
        <footer>
            <div className="footer">
                <div>
                    <span>{lang.burgName}</span>
                    <span>{lang.footLevel}</span>
                </div>
                <div className="more">
                    <span>{lang.more}</span>
                    <ul>
                        <li>{lang.home}</li>
                        <li>{lang.about}</li>
                        <li>{lang.skills}</li>
                        <li>{lang.work}</li>
                        <li>{lang.contact}</li>
                        <li>
                            <button onClick={langClick} className="lang">Eng|Հայ</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="">
                        <MdAlternateEmail/>
                    </a>
                    <a href="">
                        <FaWhatsapp/>
                    </a>
                    <a href="">
                        <FaLinkedinIn/>
                    </a>
                </div>
            </div>
        </footer>
    )
}