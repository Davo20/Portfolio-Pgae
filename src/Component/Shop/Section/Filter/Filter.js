import React, {useState, useEffect} from "react";
import phoneCategory from "../Phones/phoneCategory.json";
import tabletsCategory from "../Tablets/tabletsCategory.json"
import "./filter.scss";

export default function Filter({setFilter, setff, setTabletFilter, selectLanguage}){
    const [filterRam, setFilterRam] = useState({ram3: false, ram4: false, ram6: false, ram8: false, ram12: false})
    const [filterBrand, setFilterBrand] = useState({samsung: false, apple: false, xiaomi: false})
    const [filterSystem, setFilterSystem] = useState({android: false, ios: false})
    const [filterMemory, setFilterMemory] = useState({memory32: false, memory64: false, memory128: false, memory256: false, memory512: false, memory1TB: false})
    const [allProduct, setAllProduct] = useState([])
    // const [filterr, setFilter] = useState([])
    // const [ff, setff] = useState(false)
    // useEffect(()=>{
    //     setAllProduct([...JSON.parse(localStorage.getItem("allProduct"))])
    // }, [allProduct])

    const filterProduct = (filter)=>{
        const hhhh =  phoneCategory.filter((elem)=>filter === elem.RAM || filter === elem.brand || filter === elem.operationSystem || filter === elem.memory)

                 setFilter(hhhh)
                 setff(true)
                //  setFilter(hhhh)
                 if(filter == "3GB"){
                     setFilterRam({ram3: true})
                 }
                 if(filter == "4GB"){
                     setFilterRam({ram4: true})
                 }
                 if(filter == "6GB"){
                     setFilterRam({ram6: true})
                 }
                 if(filter == "8GB"){
                     setFilterRam({ram8: true})
                 }
                 if(filter == "12GB"){
                     setFilterRam({ram12: true})
                 }
                //  BRAND
                 if(filter == "Samsung"){
                     setFilterBrand({samsung: true})
                 }
                 if(filter == "Apple"){
                     setFilterBrand({apple: true})
                 }
                 if(filter == "Xiaomi"){
                     setFilterBrand({xiaomi: true})
                 }
                 // OPERATION SYSTEM
            if(filter == "Android"){
                setFilterSystem({android: true})
            }
            if(filter == "iOS"){
                setFilterSystem({ios: true})
            }
            // MEMORY
            if(filter == "32GB"){
                setFilterMemory({memory32: true})
            }
            if(filter == "64GB"){
                setFilterMemory({memory64: true})
            }
            if(filter == "128GB"){
                setFilterMemory({memory128: true})
            }
            if(filter == "256GB"){
                setFilterMemory({memory256: true})
            }
            if(filter == "512GB"){
                setFilterMemory({memory512: true})
            }
            if(filter == "1TB"){
                setFilterMemory({memory1TB: true})
            }
     }
     const filterRemove=(filter)=>{
            //  const llll =  phoneCategory.filter((elem)=>ram !== elem.RAM)
             setff(false)
             if(filter == "3GB"){
                 setFilterRam({ram3: false})
             }
             if(filter == "4GB"){
                 setFilterRam({ram4: false})
             }
             if(filter == "6GB"){
                 setFilterRam({ram6: false})
             }
             if(filter == "8GB"){
                 setFilterRam({ram8: false})
             }
             if(filter == "12GB"){
                 setFilterRam({ram12: false})
             }
            //  BRAND
            if(filter == "Samsung"){
                setFilterBrand({samsung: false})
            }
            if(filter == "Apple"){
                setFilterBrand({apple: false})
            }
            if(filter == "Xiaomi"){
                setFilterBrand({xiaomi: false})
            }
            // OPERATION SYSTEM
        if(filter == "Android"){
            setFilterSystem({android: false})
        }
        if(filter == "iOS"){
            setFilterSystem({ios: false})
        }
        // MEMORY
        if(filter == "32GB"){
            setFilterMemory({memory32: false})
        }
        if(filter == "64GB"){
            setFilterMemory({memory64: false})
        }
        if(filter == "128GB"){
            setFilterMemory({memory128: false})
        }
        if(filter == "256GB"){
            setFilterMemory({memory256: false})
        }
        if(filter == "512GB"){
            setFilterMemory({memory512: false})
        }
        if(filter == "1TB"){
            setFilterMemory({memory1TB: false})
        }
     }
    return(
        <div className="filterBar">
            <div className="filterProduct">
                <h4>RAM</h4>
                <div>
                    {!filterRam.ram3 ?<button onClick={()=>filterProduct("3GB")}>3GB</button> : <button className="two" onClick={()=>filterRemove("3GB")}>3GB</button>}
                    {!filterRam.ram4 ?<button onClick={()=>filterProduct("4GB")}>4GB</button> : <button className="two" onClick={()=>filterRemove("4GB")}>4GB</button>}
                    {!filterRam.ram6 ?<button onClick={()=>filterProduct("6GB")}>6GB</button> : <button className="two" onClick={()=>filterRemove("6GB")}>6GB</button>}
                    {!filterRam.ram8 ?<button onClick={()=>filterProduct("8GB")}>8GB</button> : <button className="two" onClick={()=>filterRemove("8GB")}>8GB</button>}
                    {!filterRam.ram12 ?<button onClick={()=>filterProduct("12GB")}>12GB</button> : <button className="two" onClick={()=>filterRemove("12GB")}>12GB</button>}
                </div>
            </div>
            <div className="filterProduct">
                <h4>BRANDS</h4>
                <div>
                    {!filterBrand.samsung ?<button onClick={()=>filterProduct("Samsung")}>Samsung</button> : <button className="two" onClick={()=>filterRemove("Samsung")}>Samsung</button>}
                    {!filterBrand.apple ?<button onClick={()=>filterProduct("Apple")}>Apple</button> : <button className="two" onClick={()=>filterRemove("Apple")}>Apple</button>}
                    {!filterBrand.xiaomi ?<button onClick={()=>filterProduct("Xiaomi")}>Xiaomi</button> : <button className="two" onClick={()=>filterRemove("Xiaomi")}>Xiaomi</button>}
                </div>
            </div>
            <div className="filterProduct">
                <h4>OPERATION SYSTEM</h4>
                <div>
                    {!filterSystem.android ?<button onClick={()=>filterProduct("Android")}>Android</button> : <button className="two" onClick={()=>filterRemove("Android")}>Android</button>}
                    {!filterSystem.ios ?<button onClick={()=>filterProduct("iOS")}>iOS</button> : <button className="two" onClick={()=>filterRemove("iOS")}>iOS</button>}
                </div>
            </div>
            <div className="filterProduct">
                <h4>Memory</h4>
                <div>
                    {!filterMemory.memory32 ?<button onClick={()=>filterProduct("32GB")}>32GB</button> : <button className="two" onClick={()=>filterRemove("32GB")}>32GB</button>}
                    {!filterMemory.memory64 ?<button onClick={()=>filterProduct("64GB")}>64GB</button> : <button className="two" onClick={()=>filterRemove("64GB")}>64GB</button>}
                    {!filterMemory.memory128 ?<button onClick={()=>filterProduct("128GB")}>128GB</button> : <button className="two" onClick={()=>filterRemove("128GB")}>128GB</button>}
                    {!filterMemory.memory256 ?<button onClick={()=>filterProduct("256GB")}>256GB</button> : <button className="two" onClick={()=>filterRemove("256GB")}>256GB</button>}
                    {!filterMemory.memory512 ?<button onClick={()=>filterProduct("512GB")}>512GB</button> : <button className="two" onClick={()=>filterRemove("512GB")}>512GB</button>}
                    {!filterMemory.memory1TB ?<button onClick={()=>filterProduct("1TB")}>1TB</button> : <button className="two" onClick={()=>filterRemove("1TB")}>1TB</button>}
                </div>
            </div>
        </div>
    )
}