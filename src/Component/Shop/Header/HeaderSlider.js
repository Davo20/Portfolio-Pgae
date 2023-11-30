import React, {useState, useRef} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {BsPhone} from "react-icons/bs"
import S23Ultra from "./slidePic/S23ultra-slider.jpg";
import iphone15 from "./slidePic/iPhone-15-slider.jpg";
import s23fe from "./slidePic/s23fe-slider.webp";
import appleWatchSlider from "./slidePic/Apple-Watch-Series-9-slider.png";
import zFlix5Slider from "./slidePic/zflip5.png";
import samsungTabS9FeSlider from "./slidePic/samsung-tab-s9-fe-slider.webp";
import galaxyWatch6Slider from "./slidePic/galaxyWatch6-slider.jpg";
import macBookAir15Slider from "./slidePic/macBook-air-15-slider.jpg"
import "./header.scss";

export default function Header(){
    // const [sliderActive, setSliderActive] = useState(0)
    const sliderProduct = useRef(null)
    const picArrProduct = [
        {
            sliderPic: S23Ultra
        },
        {
            sliderPic: iphone15
        },
        {
            sliderPic: s23fe
        },
        {
            sliderPic: appleWatchSlider
        },
        {
            sliderPic: zFlix5Slider
        },
        {
            sliderPic: samsungTabS9FeSlider
        },
        {
            sliderPic: galaxyWatch6Slider
        },
        {
            sliderPic: macBookAir15Slider
        }
    ]
    let sliderActive = 0
    const leftProduct = ()=>{
        if(sliderActive!=0){
            sliderActive++
        }
        else if(sliderActive==0)sliderActive=-7
        Array.from(sliderProduct.current.children).map((elem)=>{
            elem.style=`transform: translateX(${sliderActive*100}%)`
        })
    }
    console.log(sliderActive)
    const rightProduct = ()=>{
        if(sliderActive != -7){
            sliderActive--
        }
        else if(sliderActive==-7)sliderActive=0
        Array.from(sliderProduct.current.children).map((elem)=>{
            elem.style=`transform: translateX(${sliderActive*100}%)`
        })  
        console.log(sliderActive)
        // console.log(sliderProduct.current.children)
    }

    
    return (
        <header className="productHeader">
            <div className="sliderShopProductCont">
                <MdKeyboardArrowLeft className="leftProduct" onClick={leftProduct}></MdKeyboardArrowLeft>
                <MdKeyboardArrowRight className="rightProduct" onClick={rightProduct}></MdKeyboardArrowRight>
                <div ref={sliderProduct} className="imageProductContainerShop">
                {picArrProduct.map((elem, index)=>{
                    return <div key={index} className="imageSliderShopProduct">
                        <img src={elem.sliderPic}/> 
                    </div>
                })}
                </div>
            </div>
        </header>
    )
}