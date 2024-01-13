import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./basket.scss";

export default function Basket({ productName, cardClick, languageKey, language }) {
    const [basket, setBasket] = useState([])

    useEffect(() => {
        setBasket([...JSON.parse(localStorage.getItem("basket"))])
    }, [basket])
    // useEffect(() => {
    //     setBasket([...JSON.parse(localStorage.getItem("basket"))])
    // }, [])

    let totalPrice = 0
    const aray = []
    basket.map((elem) => {
        elem.counter = 0
        for (let i = 0; i < basket.length; i++) {
            if (elem.id == basket[i].id) {
                elem.counter = elem.counter + 1
                elem.cardTotalPrice = elem.price * elem.counter
            }
        }
        totalPrice = totalPrice + elem.price
        const even = (item) => item.id == elem.id
        if (!aray.some(even)) {
            aray.push(elem)
        }
    })
    console.log(aray)
    
    const increment = (e) => {
        basket.map((elem) => {
            if (elem.id == e.target.id) {
                localStorage.setItem("basket", JSON.stringify([...basket, elem]))
            }
        })

    }
    const decrement = (e) => {
        const removeItem = basket.findIndex(
            (elem) => elem.id == e.target.id
        )
        if (removeItem !== -1) {
            basket.splice(removeItem, 1)
        }
        localStorage.setItem("basket", JSON.stringify(basket))
    }
    const removeProduct = (e) => {
        const removeItem = basket.findIndex(
            (elem) => elem.id == e.target.id
        )
        if (removeItem !== -1) {
            basket.splice(removeItem, 1)
        }
        localStorage.setItem("basket", JSON.stringify(basket))
    }

    return (
        <section>
            {languageKey[language].map((item) => {
                return <div>
                    {aray.map((elem, index) => {
                        return <div key={index} className="basketCard">
                            <div className="basketPic">
                                <img src={elem.img}></img>
                            </div>
                            <div className="basketName">
                                <Link to={`/product:${productName}`}><h4 id={elem.id} onClick={cardClick}>{elem.Model || elem.model || elem.Մոդել || elem.Модель}</h4></Link>
                                {elem.price ? <span>{`${elem.price.toLocaleString()}${item.price}`}</span> : <span>{elem.Price.toLocaleString()}</span>}
                            </div>
                            <div className="basketCountCard">
                                <button onClick={decrement} id={elem.id} className="decrement">-</button>
                                <span>{elem.counter}</span>
                                <button onClick={increment} id={elem.id} className="increment">+</button>
                            </div>
                            <div className="totalPrice">{`${elem.cardTotalPrice.toLocaleString()}${item.price}`}</div>
                            <div className="Remove">
                                <button onClick={removeProduct} id={elem.id}>{item.remove}</button>
                            </div>
                        </div>
                    })}
                    <div>{`${totalPrice.toLocaleString()}${item.price}`}</div>
                </div>
            })}
        </section>
    )
}