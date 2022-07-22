
import React, {useState} from "react";

export default function Card({card, handleClick, id, elem}){
  
const item = elem.active ? " active "+ elem.active: ""
    return(
        <div onClick={()=>handleClick(id)}   className={"card" + item} >
            <img src={elem.img}></img><div className="rotate"></div>
        </div>  
    )
}