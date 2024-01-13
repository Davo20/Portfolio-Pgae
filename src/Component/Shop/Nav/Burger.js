import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

export default function Burger({ setMenuBurger, menuBurger, languageKey, language }) {

    return (
        <div className={"shopBurgerMenu " + (menuBurger && "burgerMenuOPen")}>
            <MdOutlineClose onClick={() => setMenuBurger(false)} />
            {languageKey[language].map((elem, index) => {
                return <ul onClick={() => setMenuBurger(false)} key={index}>
                    <Link to="/phones">
                        <div>
                            <li>{elem.phones}</li>
                        </div>
                    </Link>
                    <Link to="/tablets">
                        <div>
                            <li>{elem.tablets}</li>
                        </div>
                    </Link>
                    <Link to="/watches">
                        <div>
                            <li>{elem.watches}</li>
                        </div>
                    </Link>
                    <Link to="/computers">
                        <div>
                            <li>{elem.computers}</li>
                        </div>
                    </Link>
                    <Link to="/">
                        <div>
                            <li>{elem.tv}</li>
                        </div>
                    </Link>
                </ul>
            })}
            <Outlet></Outlet>
        </div>
    )
}