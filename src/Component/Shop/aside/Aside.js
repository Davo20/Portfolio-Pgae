import React, {useState} from "react";
import {BsPhone, BsWatch} from "react-icons/bs";
import {MdOutlineTabletMac, MdComputer} from "react-icons/md"
import { Outlet, Link } from "react-router-dom";
import "./aside.scss";

export default function Aside(){
    return(
        <aside>
            <div>
                <ul>
                    <Link to="/phones">
                        <li>
                            <BsPhone style={{fontSize: 30, cursor: "pointer"}}></BsPhone>
                        </li>
                    </Link>
                    <Link to="/tablets">
                        <li>
                            <MdOutlineTabletMac style={{fontSize: 30, cursor: "pointer"}}></MdOutlineTabletMac>
                        </li>
                    </Link>
                    <Link to="/watches">
                        <li>
                            <BsWatch style={{fontSize: 30, cursor: "pointer"}}></BsWatch>
                        </li>
                    </Link>
                    <Link to="/computers">
                        <li>
                            <MdComputer style={{fontSize: 30, cursor: "pointer"}}></MdComputer>
                        </li>
                    </Link>
            </ul>
            </div>
            <Outlet/>
        </aside>
    )
}