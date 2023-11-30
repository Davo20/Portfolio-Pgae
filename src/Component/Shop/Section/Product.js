import React, {useEffect, useState} from "react";
import phoneCategory from "./Phones/phoneCategory.json"
import "./product.scss";
import { refresh } from "aos";
import { Link } from "react-router-dom";

export default function Product ({productName, allProduct}){
    const [titel, setTitle] = useState([])
    const [rowInfo, setRowInfo] = useState([])
    const [basket, setBasket] = useState([])
    const allProductt = JSON.parse(localStorage.getItem("allProduct"))
    const [item, setItem] = useState([])
    const [color, setColor] = useState([])

    useEffect(()=>{
        setItem([...JSON.parse(localStorage.getItem("product"))])
    },[item])

    useEffect(()=>{
        setBasket([...JSON.parse(localStorage.getItem("basket"))])
    },[basket])

    const addBasket = (e)=>{
        item.map((elem, index)=>{
                if(e.target.id == elem.id){
                    localStorage.setItem("basket", JSON.stringify([...basket, elem]))
        
                }
            
        })
    }

   
   useEffect(()=>{
    item.map((elem)=>{
        setTitle(Object.keys(elem))
        setRowInfo(Object.values(elem))
        
    })
}, [item])

const colorProduct = (e, id)=>{
    allProductt.map((elem)=>{
        if(e == elem.color && id == elem.id){
            localStorage.setItem("product", JSON.stringify([elem]))
        }
        item.map((item)=>{
            if(item.datasetId == elem.datasetId){
                setColor([elem.color])
            }
        })
    })
}

    return(
        <section className="productPage">
            {item.map((elem, index)=>{
            return<div className="productHead" key={index}>
                <div className="productPic">
                    <img src={elem.img}/>
                </div>
                <div className="productMem">
                    <h2>{elem.model && elem.Memory ? `${elem.model} ${elem.Memory}` : elem.model}</h2>
                    <p>{`${elem.price.toLocaleString()}AMD`}</p>
                    <div className="productInfo">
                        <div>
                            <ul>
                                {elem.Screen ? <li>Screen</li> : null}
                                {elem.HardDriveCapacity ? <li>Hard Drive Capacity</li> : null}
                                {elem.RAM ? <li>RAM</li> : null}
                                {elem.Memory || elem.memory ? <li>Memory</li> : null}
                                {elem.AnnouncementYear || elem.announcementYear ? <li>Announcement Year</li> : null}
                                {elem.color ? <li>Color</li> : null}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>{elem.Screen}</li>
                                <li>{elem.HardDriveCapacity}</li>
                                <li>{elem.RAM || elem.Օպերատիվհիշողություն}</li>
                                <li>{elem.Memory || elem.memory}</li>
                                <li>{elem.AnnouncementYear || elem.announcementYear}</li>
                                <li className="color">
                                    {allProduct.map((elem, index)=>{
                                    {color.map((item, index)=>{
                                           return <Link to={`/product:${productName}`}><button style={{backgroundColor: item}} className={item} datasetId={elem.datasetId}  onClick={()=>colorProduct(elem.color, elem.id)}>{elem.color}</button></Link>
                                    })}
                                    })}
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <button onClick={addBasket} id={elem.id}>Buy</button>
                </div> 
            </div>
        })}
            
            <div className="cardInfoCont" style={{display: "flex"}}>
                <div className="infoName">{titel.map((elem, index)=>{
                    return <div key={index}>
                        {elem}
                    </div>
                })}
                </div>
                <div className="infoValues">
                {rowInfo.map((elem, index)=>{
                    return <div key={index}>{elem}</div>
                })}
                </div>
            </div>
           
        </section>
    )
}