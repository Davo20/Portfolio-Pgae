import React, { useState } from "react";
import Aside from "../../aside/Aside";
import Footer from "../../Footer"
import { Outlet, Link } from "react-router-dom";
import "./searchResult.scss";

export default function SearchResult({ searchProductResult, setSearchProductResult, languageKey, language, cardClick, productName, searchValue }) {

    const addBasket = (e) => {
        searchProductResult.map((elem, index) => {
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
        <div className="searchResult">
            <Aside></Aside>
            <section className="searchResultPage">
                <div className="title">
                    {languageKey[language].map((item, index) => {
                        return <h3 key={index}>{`${item.searchResults} ${searchValue}`}</h3>
                    })}
                </div>
                {languageKey[language].map((item, index) => {
                    return <div className="Category" key={index}>
                        {searchProductResult.map((elem, index) => {
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
            <Footer></Footer>
        </div>
    )
}