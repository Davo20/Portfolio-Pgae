import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
// import {Link} from "react-router-dom"
import {BsSunFill, BsMoonFill} from "react-icons/bs";

export default function Nav({lang, langClick, fon, setFon}){
     return(
         <nav className="list1">
             <ul>
                 <div>
                    <li>
                        <a href="#header">{lang.home}<div></div></a>
                    </li>
                    <li>
                        <a href="#section">{lang.about}<div></div></a>
                    </li>
                    <li>
                        <a href="#sectionSkill">{lang.skills}<div></div></a>
                    </li>
                    <li>
                        <a href="#sectionWork">{lang.work}<div></div></a>
                    </li>
                    <li>
                        <a href="#sectionContact">{lang.contact}<div></div></a>
                    </li>                 
                 </div>
             </ul>
         </nav>
     )
 }