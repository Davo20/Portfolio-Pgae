import React, {useState, useEffect} from "react";
import tabletsCategory from "./tabletsCategory.json";
import Aside from "../../aside/Aside";
import Filter from "../Filter/Filter";
import Footer from "../../Footer"
import { Outlet, Link } from "react-router-dom";

export default function Tablets ({cardClick, productName}){
    const [basket, setBasket] = useState([])
    const [tabletFilter, setTabletFilter] = useState([])
    const [ff, setff] = useState(false)

    useEffect(()=>{
        setBasket([...JSON.parse(localStorage.getItem("basket"))])
    },[basket])

    const addBasket = (e)=>{
        tabletsCategory.map((elem, index)=>{
            if(e.target.id == elem.id){
                localStorage.setItem("basket", JSON.stringify([...basket, elem]))
    
            }
        })
    }
    return(
        <div className="categoryy">
            <Aside></Aside>
        <section>
            <div className="categoryPage">
            <Filter setTabletFilter={setTabletFilter} setff={setff}></Filter>
           {!ff ? <div className="Category">
            {tabletsCategory.map((elem, index)=>{
                return <div className="card" id={elem.id} key={index}>
                    <Link to={`/product:${productName}`}><img src={elem.img} id={elem.id} onClick={cardClick}></img></Link>
                    <div className="cardProductNameTablets">
                        <h2>{`${elem.model} ${elem.memory}`}</h2>
                    </div>
                    <p>{`${elem.price.toLocaleString()}AMD`}</p>
                    <button onClick={addBasket} id={elem.id}>Buy</button>
                </div>               
            })}
           </div>:
           <div className="Category">
           {tabletFilter.map((elem, index)=>{
               return <div className="card" id={elem.id} key={index}>
                   <Link to={`/product:${productName}`}><img src={elem.img} id={elem.id} onClick={cardClick}></img></Link>
                   <div className="cardProductNameTablets">
                       <h2>{`${elem.model} ${elem.memory}`}</h2>
                   </div>
                   <p>{`${elem.price.toLocaleString()}AMD`}</p>
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