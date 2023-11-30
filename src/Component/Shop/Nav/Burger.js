import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

export default function Burger({setMenuBurger, menuBurger}){
    
    return(
        <div className={"shopBurgerMenu " + (menuBurger && "burgerMenuOPen")}>
            <MdOutlineClose onClick={()=>setMenuBurger(false)}/>
                <ul  onClick={()=>setMenuBurger(false)}>
                     <Link to="/phones">
                        <div>
                            <li>Phones</li>
                        </div>
                    </Link>
                    <Link to="/tablets">
                    <div>
                        <li>Tablets</li>
                    </div>
                </Link>
                <Link to="/watches">
                    <div>
                        <li>Watches</li>
                    </div>
                </Link>
                <Link to="/computers">
                    <div>
                        <li>Computers</li>
                    </div>
                </Link>
                <Link to="/">
                    <div>
                        <li>TV</li>
                    </div>
                </Link>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}