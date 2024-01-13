import React from "react";
import phoneCategory from "./Section/Phones/phoneCategory.json";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomeSection({ productName, cardClick, languageKey, language }) {
    const [homeCategory, setHomeCategory] = useState([])
    // const [basket, setBasket] = useState([])

    useEffect(() => {
        const category = phoneCategory.filter((elem) => elem.price > 500000)
        setHomeCategory(category)
    }, [])
    // const category = phoneCategory.filter((elem) => elem.price > 500000)
    // useEffect(() => {
    //     setBasket([...JSON.parse(localStorage.getItem("basket"))])
    // }, [basket])

    const addBasket = (e) => {
        homeCategory.map((elem, index) => {
            if (e.target.id == elem.id) {
                const basket = [
                    {
                        id: elem.id,
                        img: elem.img.img1,
                        price: elem.price,
                        model: elem.model,
                    }
                ]
                localStorage.setItem("basket", JSON.stringify([...JSON.parse(localStorage.getItem("basket")), ...basket]))
            }
        })
    }
    
    return (
        <section className="homeSection">
            {languageKey[language].map((item, index) => {
                return <h3 key={index}>Offered assortment</h3>
            })}
            {languageKey[language].map((item, index) => {
                return <div className="Category" key={index}>
                    {homeCategory.map((elem, index) => {
                        return <div className="card" id={elem.id} key={index}>
                            <Link to={`/product:${productName}`}><img src={elem.img.img1} id={elem.id} onClick={cardClick}></img></Link>
                            <div className="cardProductNamePhones">
                                <h2>{`${elem.model} ${elem.memory}`}</h2>
                            </div>
                            <p>{`${elem.price.toLocaleString()}${item.price}`}</p>
                            <button id={elem.id} onClick={addBasket}>{item.buy}</button>
                        </div>
                    })}
                </div>
            })}
        </section>
    )
}