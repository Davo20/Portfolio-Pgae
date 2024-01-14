import React, { useState, useEffect, useRef } from "react";
import Burger from "./Burger"
import { BiShoppingBag, BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Select } from 'antd';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import "./nav.scss";

export default function NavBar({ languageClick, language, languageKey, allProduct, searchProductResult, setSearchProductResult, setSeacrhValue, cardClick, productName }) {
    const [baskett, setBaskett] = useState([])
    const [basketCount, setBasketCount] = useState(null)
    const [menuBurger, setMenuBurger] = useState(false)
    const [searchOption, setSearchOption] = useState([])
    const [searchOptionOpen, setSearchOptionOpen] = useState(false)
    const navigate = useNavigate()
    const [searchInputOpen, setSearchInputOpen] = useState(false)
    const g = useRef(null)
    const input = useRef(null)
    // useEffect(()=>{
    //     setBaskett([...JSON.parse(localStorage.getItem("basket"))])
    //     let iconCount = null
    //     if(baskett.length > 0){
    //         setBasketCount(baskett.length)
    //     }
    // }, [])
    // useEffect(()=>{
    //     setBaskett([...JSON.parse(localStorage.getItem("basket"))])
    //     let iconCount = null
    //     if(baskett.length > 0){
    //         setBasketCount(baskett.length)
    //     }
    // },[baskett])

    const searchProduct = (e) => {
        const searchFilter = allProduct.filter(value => value.phoneName?.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchOption([...searchFilter])
        if (e.target.value == "") {
            setSearchOptionOpen(false)
        } else {
            setSearchOptionOpen(true)
        }
    }

    const searchResultProduct = (e) => {
        e.preventDefault()
        if (e.keyCode == 13) {
            navigate("/searchResult")
            const searchFilter = allProduct.filter(value => value.phoneName?.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchProductResult([...searchFilter])
            setSeacrhValue(e.target.value)
            setSearchOptionOpen(false)
            setSearchInputOpen(false)
        }
    }
    // window.onclick = function (event) {
    //     if(event.target !== g.current){

    //         setSearchOptionOpen(false)
    //     }
    //     // setSearchInputOpen(false)
    // }
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);
      const handleOutsideClick = (e) => {
        if (!input.current.contains(e.target) && g.current && g.current.contains(e.target)) {
            setSearchInputOpen(false);
        }
      };
    console.log(g.current)
    return (
        <nav className="nav">
            <div className="navBar">
                <div className="logo">
                    <h2>
                        <Link to="/">SEVAN Electronics</Link>
                    </h2>
                </div>
                <div className="iconContt">
                    <div ref={g} className={searchInputOpen ? "searchInputActive" : "search"}>
                        <input ref={input} type="search"
                            name="search"
                            onChange={searchProduct}
                            onKeyUp={searchResultProduct}
                            id="searchResult">
                        </input>
                        {searchOptionOpen ? <div className="searchOption">
                            <ul>
                                {searchOption.map((elem, index) => {
                                    return <Link to={`/product:${productName}`}>
                                        <li key={index} id={elem.id} onClick={cardClick}>{elem.phoneName}</li>
                                    </Link>
                                })}
                            </ul>
                        </div> : null}
                    </div>
                    <div className="searchIcon">
                        <BsSearch onClick={()=>setSearchInputOpen(true)}></BsSearch>
                        
                    </div>
                    <div className="basket">
                        {baskett.length == 0 ? <BiShoppingBag></BiShoppingBag> : <Link to="/basket"><BiShoppingBag></BiShoppingBag>
                            {basketCount && <span style={{ color: "white" }}>{basketCount}</span>}
                        </Link>}
                    </div>
                    <div className="selectLanguage">
                        <Select
                            // labelInValue
                            defaultValue={{ value: "English", label: "EN" }}
                            style={{ width: 60, height: 20 }}
                            listItemHeight={30}
                            onChange={languageClick}
                            options={[
                                {
                                    value: "English",
                                    label: "EN"
                                },
                                {
                                    value: "Armenian",
                                    label: "AM"
                                },
                                {
                                    value: "Russian",
                                    label: "RU"
                                },
                            ]}
                        />
                    </div>
                    <div className="burgerShop">
                        <BiMenu onClick={() => setMenuBurger(true)}></BiMenu>
                        <Burger menuBurger={menuBurger} setMenuBurger={setMenuBurger} languageKey={languageKey} language={language}></Burger>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </nav>
    )
}