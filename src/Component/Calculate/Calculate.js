import React, {useState} from "react";
import {IoMdCloseCircleOutline} from "react-icons/io"

import "./calc.scss";

export default function Calculate(){
    const [calc, setCalc] = useState("")
    const handleClick = (e)=>{
        // setCalc(elem=> elem+e.target.value).toString()
        if(e.target.value === "+" || e.target.value === "-" || e.target.value === "/" || e.target.value === "*" || e.target.value === "." || e.target.value === "%"){
            if(calc.slice(-1)==="+"){
                if(calc.includes("+"))return
            }
            else if(calc.slice(-1) === "-"){
                if(calc.includes("-"))return
            }
            else if(calc.slice(-1) === "/"){
                if(calc.includes("/"))return
            }
            else if(calc.slice(-1) === "."){
                if(calc.includes("."))return
            }
            else if(calc.slice(-1) === "*"){
                if(calc.includes("*"))return
            }
            else if(calc.slice(-1) === "%"){
                if(calc.includes("%"))return
            }
            else  if(calc[calc.length - 1] == "+" || calc[calc.length - 1] == "-"){
                // let newCalc = calc.slice(0, calc.length - 1)
                setCalc(calc.slice(0, calc.length - 1) + e.target.value)
                
            }
            else{
                setCalc(calc + e.target.value)
            }
        }
        // else{
        //     if(e.target.value == "+" || e.target.value =="-"){
        //     if(calc[calc.length - 1] == "+" || calc[calc.length - 1] == "-"){
        //         let newCalc = calc.slice(0, calc.length - 1)
        //         setCalc(newCalc + e.target.value)
                
        //     }}
            else{
                setCalc(calc + e.target.value)
                
            // }
        }
    }


        console.log(calc)
    
    const valueDelete = () =>{
        setCalc("")
    }
    const handleResult=()=>{
            setCalc(eval(calc).toString())  
    }
   const invertClick = ()=>{
       setCalc((eval(calc) * -1).toString())
   }  
   const lenghtDel = () =>{
       setCalc(calc.slice(0, calc.length - 1))
   }
    return(
        <div className="calculiator">
            <form>
                <input type="text" className="monitor" value={calc}/>
            </form>
            <div className="keyboard">
                <button onClick={valueDelete}>C</button>
                <button value="%" onClick={handleClick}>%</button>
                <button value="/" onClick={handleClick}>&divide;</button>
                <button value="7" onClick={handleClick}>7</button>
                <button value="8" onClick={handleClick}>8</button>
                <button value="9" onClick={handleClick}>9</button>
                <button value="*" onClick={handleClick}>&times;</button>
                <button value="4" onClick={handleClick}>4</button>
                <button value="5" onClick={handleClick}>5</button>
                <button value="6" onClick={handleClick}>6</button>
                <button value="-" onClick={handleClick}>-</button>
                <button value="1" onClick={handleClick}>1</button>
                <button value="2" onClick={handleClick}>2</button>
                <button value="3" onClick={handleClick}>3</button>
                <button value="+" onClick={handleClick}>+</button>
                <button value="-/+" onClick={invertClick}>&plusmn;</button>
                <button value="0" onClick={handleClick}>0</button>
                <button value="." onClick={handleClick}>.</button>
                <button onClick={handleResult}>=</button>
                <IoMdCloseCircleOutline onClick={lenghtDel}/>
            </div>
        </div>
       
    )
}