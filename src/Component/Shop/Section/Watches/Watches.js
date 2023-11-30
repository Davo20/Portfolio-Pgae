import React, {useState, useEffect} from "react";
import watches from "./watches.json";
import Aside from "../../aside/Aside";
import Filter from "../Filter/Filter";
import Footer from "../../Footer"
import { Outlet, Link } from "react-router-dom";

export default function Watches({cardClick, productName}){
    const [basket, setBasket] = useState([])
    const [filterr, setFilter] = useState([])
    const [ff, setff] = useState(false)

    useEffect(()=>{
        setBasket([...JSON.parse(localStorage.getItem("basket"))])
    },[basket])
    const addBasket = (e)=>{
        watches.map((elem, index)=>{
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
            <Filter setFilter={setFilter} setff={setff}></Filter>
           {!ff ? <div className="Category">
            {watches.map((elem, index)=>{
                return <div className="card" id={elem.id} key={index}>
                    <Link to={`/product:${productName}`}><img src={elem.img} id={elem.id} onClick={cardClick}></img></Link>
                    <div className="cardProductNameWatch">
                        <h2>{elem.model}</h2>
                    </div>
                    <p>{`${elem.price.toLocaleString()}AMD`}</p>
                    <button onClick={addBasket} id={elem.id}>Buy</button>
                </div>                
            })}
           </div>:
           <div className="Category">
           {filterr.map((elem, index)=>{
               return <div className="card" id={elem.id} key={index}>
                   <Link to={`/product:${productName}`}><img src={elem.img} id={elem.id} onClick={cardClick}></img></Link>
                   <div className="cardProductNameWatch">
                       <h2>{elem.model}</h2>
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