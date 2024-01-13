import React, { useState, useEffect } from "react";
import computers from "./computers.json";
import Aside from "../../aside/Aside";
import Filter from "../Filter/Filter";
import Footer from "../../Footer"
import { Outlet, Link } from "react-router-dom";

export default function Computers({ cardClick, productName }) {
    // const [basket, setBasket] = useState([])
    const [filterr, setFilter] = useState([])
    const [ff, setff] = useState(false)
    // useEffect(()=>{
    //     setBasket([...JSON.parse(localStorage.getItem("basket"))])
    // },[basket])
    const addBasket = (e) => {
        computers.map((elem, index) => {
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
        <div className="categoryy">
            <Aside></Aside>
            <section>
                {/* <div className="titleProduct">
                    {languageKey[language].map((item, index) => {
                        return <h3 key={index}>{item.phones}</h3>
                    })}
                </div> */}
                <div className="categoryPage">
                    <Filter setFilter={setFilter} setff={setff}></Filter>
                    {!ff ? <div className="Category">
                        {computers.map((elem, index) => {
                            return <div className="card" id={elem.id} key={index}>
                                <Link to={`/product:${productName}`}><img src={elem.img.img1} id={elem.id} onClick={cardClick}></img></Link>
                                <div className="cardProductName">
                                    <h2>{elem.model}</h2>
                                </div>
                                <div>
                                    <p>{`${elem.price.toLocaleString()}AMD`}</p>
                                </div>
                                <button onClick={addBasket} id={elem.id}>Buy</button>
                            </div>
                        })}
                    </div> :
                        <div className="Category">
                            {filterr.map((elem, index) => {
                                return <div className="card" id={elem.id} key={index}>
                                    <Link to={`/product:${productName}`}><img src={elem.img} id={elem.id} onClick={cardClick}></img></Link>
                                    <div className="cardProductName">
                                        <h2>{elem.model}</h2>
                                    </div>
                                    <div>
                                        <p>{`${elem.price.toLocaleString()}AMD`}</p>
                                    </div>
                                    <button onClick={addBasket} id={elem.id}>Buy</button>
                                </div>
                            })}
                        </div>}
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}