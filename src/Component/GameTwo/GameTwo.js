import React, {useState} from "react";
import Card from "./Card"
import "./game.scss";
import astx from  "./img/astx.gif"
import dzuk from  "./img/dzuk.gif"
import kapik from  "./img/kapik.gif"
import kov from  "./img/kov.gif"
import meduza from  "./img/meduza.gif"
import muk from  "./img/muk.gif"
import shun from  "./img/shun.gif"
import vozni from  "./img/vozni.gif"

export default function GameTwo(){
    const [card, setCard] = useState([
        {id: 1, img: astx, active: ""},
        {id: 1, img: astx, active: ""},
        {id: 2, img: dzuk, active: ""},
        {id: 2, img: dzuk, active: ""},
        {id: 3, img: kapik, active: ""},
        {id: 3, img: kapik, active: ""},
        {id: 4, img: kov, active: ""},
        {id: 4, img: kov, active: ""},
        {id: 5, img: meduza, active: ""},
        {id: 5, img: meduza, active: ""},
        {id: 6, img: shun, active: ""},
        {id: 6, img: shun, active: ""},
        {id: 7, img: vozni, active: ""},
        {id: 7, img: vozni, active: ""},
        {id: 8, img: muk, active: ""},
        {id: 8, img: muk, active: ""}
    ].sort(()=>Math.random()-0.5))
    
   const [cardTwo, setCardTwo] = useState(-1)

   const check=(current)=>{
    if(card[current].id == card[cardTwo].id){
        card[current].active="correct"
        card[cardTwo].active="correct"
        setCard([...card])
        setCardTwo(-1)
        
    }
    else{
        card[current].active="wrong"
        card[cardTwo].active="wrong"
        setCard([...card])
        setTimeout(()=>{
            card[current].active=""
            card[cardTwo].active=""
            setCard([...card])
            setCardTwo(-1)
        },1000)
    }
   }

    const handleClick = (id)=>{
        if(cardTwo == -1){
            setCard([...card])
            setCardTwo(id)
        }
        else{
            check(id)
        }
    }

    return(
        <div className="memoryGame">
            <div className="cardCont">

            {card.map((elem, index)=>{
                return(
                    <Card key={index} elem={elem} card={elem.id} id={index} handleClick={handleClick}></Card>
                )
            })}
            </div>
        </div>
    )
}