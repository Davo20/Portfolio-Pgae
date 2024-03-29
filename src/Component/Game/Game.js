import React, {useState} from "react";
import GameSq from "./GameSq"
import "./game.scss";
import "./game.scss";
// const gameArr = [["","",""],["","",""],["","",""]]
let count = 0
export default function Game({fon}){
  
    const [game, setGame] = useState(true)
    const [winner, setWinner]= useState("")
    const [gameArr, setGameArr] = useState([["","",""],["","",""],["","",""]])
    const squareClcik = (one, two, e)=>{
        // setGame(square=> square == "X" ? "O" : "X")
        // gameArr[one][two] = game
        const newArr = [...gameArr]
        newArr[one][two] = game ? "X" : "O"
        setGameArr(newArr)
        setGame(!game)
        if(winnerFunc()){
            setWinner(` ${"Winner"}`)
            return
        }

    }   
    
    const winnerFunc = () =>{
        count++
        for(let i = 0; i <gameArr.length; i++){
            if(gameArr[i][0] == gameArr[i][1] && gameArr[i][1] == gameArr[i][2] &&  gameArr[i][0]){
                return gameArr[i][0]
               
            }
        
            else if(gameArr[0][i] == gameArr[1][i] && gameArr[1][i] == gameArr[2][i] && gameArr[0][i]){
                return gameArr[0][i]
                
            }
            else if(gameArr[0][0] == gameArr[1][1] && gameArr[1][1] == gameArr[2][2] && gameArr[0][0]){
                return gameArr[0][0]
                
            }
            else if(gameArr[0][2] == gameArr[1][1] && gameArr[1][1] == gameArr[2][0] && gameArr[0][2]){
                return gameArr[0][2]
                
            }
            else if(count == 9){
                setWinner("Draw")
            }
        }
        
    }
    const deleteClick =()=>{
    setGameArr([["","",""],["","",""],["","",""]])
    setWinner("")
    }
console.log(gameArr)
    return(
        <div>
            <div>
                <h2 style = {count == 9 ? {color: "gray"} : {color: "green"}}>{winner}</h2>
            </div>
        <div className={"square " + (fon && "active")}>
            <div className={"boxOne " + (fon && "active")}>
                <GameSq one={0} two={0} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[0][0]}/>
                <GameSq one={0} two={1} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[0][1]}/>
                <GameSq one={0} two={2} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[0][2]}/>
            </div>
            <div className={"boxTwo " + (fon && "active")}>
                <GameSq one = {1} two={0} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[1][0]}/>
                <GameSq one = {1} two={1} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[1][1]}/>
                <GameSq one = {1} two={2} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[1][2]}/>
            </div>
            <div className={"boxThree " + (fon && "active")}>
                <GameSq one = {2} two={0} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[2][0]}/>
                <GameSq one = {2} two={1} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[2][1]}/>
                <GameSq one = {2} two={2} squareState={game} gameClick = {squareClcik}  fon={fon} value = {gameArr[2][2]}/>
            </div>
        </div>
        <button onClick={deleteClick} className="reset">Reset</button>
        </div>
    )
}
