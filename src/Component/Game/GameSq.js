import React, { useState} from "react";

export default function GameSq({gameClick, squareState, one, two, fon, value}){
    const [sq, setSq] = useState([])
   
    const handleClick = (e)=>{

            
                setSq(squareState)
                gameClick(one, two)
            
         console.log(sq)
        }
    return(
         <div onClick={handleClick}  className={"gameSq " + (fon && "active")}>{value}</div>
         
    )
}