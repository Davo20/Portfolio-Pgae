import React, {useState} from "react";
import Box from "./Box"
// import "./tiktaktoe.scss"

export default function TicTakToe(){
    const [square, setSquare] = useState(Array(9).fill(null))
    const [on, setOn] = useState(true)

    const handleClick = (e) =>{
        const newState = [...square]
        newState[e] = on ? "X" : "O"
        setSquare(newState)
        setOn(!on)
        console.log(e)
    }

    const winner = ()=>{
        for(let i = 0; i <square.length; i++){
            if(square[0] == square[1] && square[1] == square[2] &&  square[0]){
                return square[0]
               
            }
        }
    }

    const resetClick = () =>{
        setSquare(Array(9).fill(null))
    }
    return(
        <div>
        <div className="gameBox">
            <div className="row-1">
                <Box onClick = {()=>handleClick(0)} value = {square[0]}></Box>
                <Box onClick = {()=>handleClick(1)} value = {square[1]}></Box>
                <Box onClick = {()=>handleClick(2)} value = {square[2]}></Box>
            </div>
            <div className="row-2">
                <Box onClick = {()=>handleClick(3)} value = {square[3]}></Box>
                <Box onClick = {()=>handleClick(4)} value = {square[4]}></Box>
                <Box onClick = {()=>handleClick(5)} value = {square[5]}></Box>
            </div>
            <div className="row-3">
                <Box onClick = {()=>handleClick(6)} value = {square[6]}></Box>
                <Box onClick = {()=>handleClick(7)} value = {square[7]}></Box>
                <Box onClick = {()=>handleClick(8)} value = {square[8]}></Box>
            </div>
        </div>
        <button onClick={resetClick}>Reset</button>
        </div>
    )
}