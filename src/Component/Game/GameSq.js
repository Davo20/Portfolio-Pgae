import React, { useState} from "react";

export default function GameSq({gameClick, squareState, one, two, fon}){
    const [sq, setSq] = useState("")
    const handleClick = (e)=>{
        if(sq == ""){
            setSq(squareState)
            gameClick(one, two)
        }
        
        if(squareState === "X"){
            e.target.style.color = "red"
        }
        else{
            e.target.style.color = "blue"
        }
    }
    return(
        <div onClick={handleClick} className={"gameSq " + (fon && "active")}>{sq}</div>
    )
}