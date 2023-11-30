import React, {useState, useEffect} from "react";
import Burger from "./Burger"
import {BiShoppingBag, BiMenu} from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";
import "./nav.scss";

export default function NavBar(){
    const [baskett, setBaskett] = useState([])
    const [basketCount, setBasketCount] = useState(null)
    const [menuBurger, setMenuBurger] = useState(false)
    useEffect(()=>{
        setBaskett([...JSON.parse(localStorage.getItem("basket"))])
        let iconCount = null
        if(baskett.length > 0){
            setBasketCount(baskett.length)
        }
    })
    // useEffect(()=>{
    //     setBaskett([...JSON.parse(localStorage.getItem("basket"))])
    //     let iconCount = null
    //     if(baskett.length > 0){
    //         setBasketCount(baskett.length)
    //     }
    // },[baskett])
    return(
        <nav>
                <div>
                    <div>
                        <h2>
                            <Link to="/">SEVAN Electronics</Link>
                        </h2>
                    </div>
                    <div className="search">
                        <input type="search" name="search"></input>
                    </div>
                    <div className="searchIcon">
                        <BsSearch></BsSearch>
                    </div>
                     <div className="basket">
                        {baskett.length == 0 ? <BiShoppingBag></BiShoppingBag> : <Link to="/basket"><BiShoppingBag></BiShoppingBag>
                       {basketCount && <span style={{color: "white"}}>{basketCount}</span>}
                        </Link>}
                    </div>
                    <div className="burgerShop">
                        <BiMenu onClick={()=>setMenuBurger(true)}></BiMenu>
                        <Burger menuBurger={menuBurger} setMenuBurger={setMenuBurger}></Burger>
                    </div>
                </div>
                <Outlet></Outlet>
            </nav>
    )
}