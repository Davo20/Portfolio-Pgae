import React, {useEffect} from "react";
import { useState } from "react";


export default function E({val}){
    const item = JSON.parse(localStorage.getItem("product"))
    const [titel, setTitle] = useState([])
    const [rowInfo, setRowInfo] = useState([])
    const [key, setKey]= useState([])
    const [value, setValue] = useState([val])
    // useEffect(()=>{
        
    //     item.map((elem)=>{
    //         setTitle(Object.keys(elem))
    //         setRowInfo(Object.values(elem))
            
    //     })
        
       
    // }, [])
    
    // const information = JSON.parse(localStorage.getItem("information"))
    // useEffect(()=>{
        
    //     information.map((elem)=>{
    //         setTitle(Object.keys(elem))
    //         setRowInfo(Object.values(elem))
            
    //     })
    //     rowInfo.map((elem)=>{
    //         setKey(Object.keys(elem))
    //         setValue(Object.values(elem))
    //     })
        
       
    // }, [information])
    
    // console.log(rowInfo)



    
    // console.log(rowInfo)
    return(
        <section>
            {/* <div className="cardInfoCont" style={{display: "flex"}}>
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
            </div> */}
            {/* <div>
                {titel.map((elem, index)=>{
                    return <div key={index} style={{display: "block"}}>
                        {elem}
                        <div >
                        {key.map((elem)=>{
                            return <div>
                                {elem}
                            </div>
                        })}
                        {value.map((elem)=>{
                            return <div>{elem}</div>
                        })}
                        </div>
                    </div>
                })}
            </div> */}
            {/* <div>
                {gg.map((elem)=>{
                    elem.tablets.map((tablets)=>{
                        return <div>
                            <h2>{tablets.general}</h2>
                            {tablets.general.map((general)=>{
                                return <div>{general.price}</div>
                            })}
                        </div>
                    })
                })}
            </div> */}
            
                
        </section>
    )
}