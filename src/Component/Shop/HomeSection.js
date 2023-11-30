import React from "react";
import phoneCategory from "./Section/Phones/phoneCategory.json";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomeSection({productName, cardClick, selectLanguage}){
    const [homeCategory, setHomeCategory] = useState([])
    const [basket, setBasket] = useState([])
    useEffect(()=>{
        const category = phoneCategory.filter((elem)=>elem.price > 500000)

                setHomeCategory(category)
    },[])
    // phoneCategory.map((elem)=>{
    //     elem[selectLanguage].map((item)=>{
    //         console.log(item)
    //     })
    // })
    useEffect(()=>{
        setBasket([...JSON.parse(localStorage.getItem("basket"))])
    },[basket])
    const addBasket = (e)=>{
        homeCategory.map((elem, index)=>{
            if(e.target.id == elem.id){
                localStorage.setItem("basket", JSON.stringify([...basket, elem]))
    
            }
        })
    }
    return(
        <section className="homeSection">
            <h3>Offered assortment</h3>
            <div className="Category">
            {homeCategory.map((elem, index)=>{  
                return <div className="card" id={elem.id} key={index}>
                    <Link to={`/product:${productName}`}><img src={elem.img} id={elem.id} onClick={cardClick}></img></Link>
                    <div className="cardProductNamePhones">
                        <h2>{`${elem.model} ${elem.memory}`}</h2>
                    </div>
                    <p>{`${elem.price.toLocaleString()}AMD`}</p>
                    {/* <button onClick={addBasket} id={elem.id}>Buy</button> */}
                    <button id={elem.id} onClick={addBasket}>Buy</button>
                </div>
            })}
           </div>
        </section>
    )
}