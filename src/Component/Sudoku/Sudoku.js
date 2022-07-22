import React, {useState} from "react";
import "./sudoku.scss"

export default function Sudoku(){
    // const arr = Array(9).fill(10)

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const numberArr = [
        [9, 10, 3, 10, 10, 10, 10, 10, 7],
        [7, 6, 10, 10, 10, 5, 10, 1, 10],
        [2, 8, 10, 10, 10, 9, 5, 6, 10],
        [10, 1, 10, 10, 5, 2, 10, 10, 4],
        [10, 10, 9, 8, 10, 4, 2, 10, 10],
        [5, 10, 10, 7, 6, 10, 10, 8, 10],
        [10, 7, 5, 2, 10, 10, 10, 9, 6],
        [10, 2, 10, 6, 10, 10, 10, 5, 1],
        [3, 10, 10, 10, 10, 10, 7, 10, 8]
    ]
    const [sudoku, setSudoku] = useState(numberArr)
    const handleChange = (e, elem, el)=>{
       const bb = numberArr[elem][el]
       let value = e.target.value
        console.log(bb)
        for(let i = 0; i < numberArr[elem].length; i++){
            for(let j = 0; j< numberArr[el].length; j++){
                if(numberArr[elem][i] == 10 || numberArr[el][j] == 10){
                   setSudoku(value)
                }
            }
        }
        
    }
const handleClick=(e)=>{
    console.log(e.target.value)
}
    return(
        <div className="sudokuCont">
            <table>
                <tbody>
                    {arr.map((elem, rowIndex)=>{
                        return(
                            <tr key={rowIndex} className="sdCont">
                                {arr.map((el, colIndex)=>{
                                    return(
                                        <td key={rowIndex+colIndex} className="sddCont">
                                            <input onChange={(e)=>handleChange(e, elem, el)} value={sudoku[elem][el] === 10?"":sudoku[elem][el]}></input>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                {arr.map((elem)=>{
                    return(
                        <button onClick={handleClick} key={elem} value={elem + 1}>{elem + 1}</button>
                    )
                })}
            </div>
        </div>
    )
}