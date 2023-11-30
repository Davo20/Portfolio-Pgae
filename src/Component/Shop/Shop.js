import React, {useState, useEffect} from "react"; 
import Header from "./Header/HeaderSlider";
import Aside from "./aside/Aside";
import NavBar from "./Nav/NavBar";
import HeaderMain from "./HeaderMain";
import Phones from "./Section/Phones/Phones";
import Tablets from "./Section/Tablets/Tablets";
import Watches from "./Section/Watches/Watches";
import Computers from "./Section/Computers/Computers";
import Product from "./Section/Product";
import Basket from "./Section/Basket/Basket"
// import E from "./Section/E"
import {BiShoppingBag, BiMenu} from "react-icons/bi";
import "./shop.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import phoneCategory from "./Section/Phones/phoneCategory.json"
import tabletsCategory from "./Section/Tablets/tabletsCategory.json"
import watches from "./Section/Watches/watches.json"
import computers from "./Section/Computers/computers.json"
import { tab } from "@testing-library/user-event/dist/tab";
// import { Outlet, Link } from "react-router-dom";

export default function Shop({basket}) {
    const [allProduct, setAllProduct] = useState([...phoneCategory, ...tabletsCategory, ...watches, ...computers])
    // const [basket, setBasket] = useState([])
    // useEffect(()=>{
    //     setAllProduct([...phoneCategory, ...tabletsCategory, ...watches, ...computers])
    // },[])
    localStorage.setItem("allProduct", JSON.stringify(allProduct))
    // useEffect(()=>{
    //     setBasket([...JSON.parse(localStorage.getItem("basket"))])
    // },[basket])
    let productName = ""
    const cardClick = (e)=>{
        phoneCategory.map((elem)=>{     
            if(e.target.id == elem.id){
                const productPhone = [{
                    id: elem.id,
                    img: elem.img,
                    RAM: elem.RAM,
                    Memory: elem.memory,
                    AnnouncementYear: elem.announcementYear,
                    Warranty: elem.warranty,
                    model: elem.model,
                    "OS Version": elem.OSVersion,
                    "Operation System": elem.operationSystem,
                    "Screen Type": elem.screenType,
                    "Screen Resolution": elem.screenResolution,
                    "Screen Size": elem.screenSize,
                    "Front Camera": elem.frontCamera,
                    "Main Camera": elem.mainCamera,
                    Chipset: elem.chipset,
                    "Number Of Processor Cores": elem.numberOfProcessorCores,
                    CPU: elem.CPU,
                    "Memory Card Slot": elem.memoryCardSlot,
                    "Standart Network": elem.standartNetwork,
                    "Access To The Internet": elem.accessToTheInternet,
                    "4G LTE Network Range": elem.GLTENetworkRange,
                    GPS: elem.GPS,
                    Bluetooth: elem.Bluetooth,
                    "WiFi Network": elem.WiFiNetwork,
                    "3G Network": elem.G3Network,
                    NFC: elem.NFC,
                    "4G LTE Network": elem.G4LTENetwork,
                    "Battery type": elem.BatteryType,
                    "Battery capacity": elem.BatteryCapacity,
                    price: elem.price,
                    color: elem.color
                }] 
                
                localStorage.setItem("product", JSON.stringify(productPhone))
                productName = elem.model
            }
        })
        
        console.log(productName)
        tabletsCategory.map((elem)=>{     
            if(e.target.id == elem.id){
                const productTablets = [{
                    id: elem.id,
                    img: elem.img,
                    RAM: elem.RAM,
                    Memory: elem.memory,
                    AnnouncementYear: elem.announcementYear,
                    Warranty: elem.warranty,
                    model: elem.model,
                    "OS Version": elem.OSVersion,
                    "Operation System": elem.operationSystem,
                    "Screen Type": elem.screenType,
                    "Screen Resolution": elem.screenResolution,
                    "Screen Size": elem.screenSize,
                    "Front Camera": elem.frontCamera,
                    "Main Camera": elem.mainCamera,
                    Chipset: elem.chipset,
                    "Number Of Processor Cores": elem.numberOfProcessorCores,
                    CPU: elem.CPU,
                    "Memory Card Slot": elem.memoryCardSlot,
                    "Standart Network": elem.standartNetwork,
                    "Access To The Internet": elem.accessToTheInternet,
                    "4G LTE Network Range": elem.GLTENetworkRange,
                    GPS: elem.GPS,
                    Bluetooth: elem.Bluetooth,
                    "WiFi Network": elem.WiFiNetwork,
                    "3G Network": elem.G3Network,
                    NFC: elem.NFC,
                    "4G LTE Network": elem.G4LTENetwork,
                    "Battery type": elem.BatteryType,
                    "Battery capacity": elem.BatteryCapacity,
                    "SIM card quantity": elem.SIMCardQuantity,
                    price: elem.price
                }] 
                
                localStorage.setItem("product", JSON.stringify(productTablets))
            }
        })
        console.log(e.target.id)
        watches.map((elem)=>{     
            if(e.target.id == elem.id){
                const productWatches = [{
                    id: elem.id,
                    img: elem.img,
                    model: elem.model,
                    "Screen Type": elem.screenType,
                    "Screen Resolution": elem.screenResolution,
                    "Screen Size": elem.screenSize,
                    GPS: elem.GPS,
                    "WiFi Network": elem.WiFiNetwork,
                    "Battery capacity": elem.BatteryCapacity,
                    "Water resistant": elem.WaterResistant,
                    "SIM card quantity": elem.SIMCardQuantity,
                    price: elem.price,
                }] 
                
                localStorage.setItem("product", JSON.stringify(productWatches))
            }
        })
        computers.map((elem)=>{     
            if(e.target.id == elem.id){
                const productComputers = [{
                    id: elem.id,
                    img: elem.img,
                    model: elem.model,
                    "Screen Resolution": elem.screenResolution,
                    Screen: elem.screenSize,
                    HardDriveCapacity: elem.HardDriveCapacity,
                    RAM: elem.RAM,
                    "OS Version": elem.OSVersion,
                    Type: elem.type,
                    "The core of the processor": elem.TheCoreOfTheProcessor,
                    CPU: elem.CPU,
                    "Hard Drive Type": elem.HardDriveType,
                    "Video Card Memory": elem.VideoCardMemory,
                    Interfaces: elem.Interfaces,
                    "Memory card readability": elem.MemoryCardReadability,
                    "Bluetooth Type": elem.BluetoothType,
                    Bluetooth: elem.Bluetooth,
                    "WiFi Type": elem.WiFiType,
                    WiFi: elem.WiFiNetwork,
                    Microphone: elem.Microphone,
                    Speakers: elem.Speakers,
                    "Battery type": elem.BatteryType,
                    Size: elem.size,
                    "Web-camera": elem.WebCamera,
                    price: elem.price
                }] 
                
                localStorage.setItem("product", JSON.stringify(productComputers))
            }
        })
        
    }
    return(
        <main>
            <BrowserRouter>
                <NavBar></NavBar>
            <Routes>
                    
                 <Route path="/" element={<HeaderMain productName={productName} cardClick={cardClick}/>}></Route>
                <Route path="phones" element={<Phones cardClick={cardClick}  productName={productName}/>}></Route>
                <Route path="tablets" element={<Tablets basket={basket} cardClick={cardClick}  productName={productName}/>}></Route>
                <Route path="watches" element={<Watches basket={basket} cardClick={cardClick}  productName={productName}/>}></Route>
                <Route path="computers" element={<Computers basket={basket} cardClick={cardClick}  productName={productName}/>}></Route>
                <Route path={`/product:${productName}`} element={<Product basket={basket} productName={productName} allProduct={allProduct}/>}></Route>
                <Route path="basket" element={<Basket basket={basket} productName={productName} cardClick={cardClick}/>}></Route>
                
                {/* <Route path="product" element={<E/>}></Route> */}
                {/* <Route path="category" element={<Category/>}></Route> */}
                
            </Routes> 
            </BrowserRouter>

            
        </main>
    )
}