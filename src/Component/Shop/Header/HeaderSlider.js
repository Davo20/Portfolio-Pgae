import React, { useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPhone } from "react-icons/bs"
import S23Ultra from "./slidePic/S23ultra-slider.jpg";
import iphone15 from "./slidePic/iPhone-15-slider.jpg";
import s23fe from "./slidePic/s23fe-slider.webp";
import appleWatchSlider from "./slidePic/Apple-Watch-Series-9-slider.png";
import zFlix5Slider from "./slidePic/zflip5.png";
import samsungTabS9FeSlider from "./slidePic/samsung-tab-s9-fe-slider.webp";
import galaxyWatch6Slider from "./slidePic/galaxyWatch6-slider.jpg";
import macBookAir15Slider from "./slidePic/macBook-air-15-slider.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./header.scss";

export default function Header() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const picArrProduct = [
        {
            id: "1",
            sliderPic: S23Ultra
        },
        {
            id: "2",
            sliderPic: iphone15
        },
        {
            id: "3",
            sliderPic: s23fe
        },
        {
            id: "4",
            sliderPic: appleWatchSlider
        },
        {
            id: "5",
            sliderPic: zFlix5Slider
        },
        {
            id: "6",
            sliderPic: samsungTabS9FeSlider
        },
        {
            id: "7",
            sliderPic: galaxyWatch6Slider
        },
        {
            id: "8",
            sliderPic: macBookAir15Slider
        }
    ]

    return (
        <header className="productHeader">
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                containerClass="carousel-container"
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                autoPlay={true}
                focusOnSelect={true}
                rewindWithAnimation={true}
                minimumTouchDrag={10}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {picArrProduct.map((elem, index) => {
                    return <div className="sliderShopProductCont" key={index}>
                        <div className="imageSliderShopProduct">
                            <img src={elem.sliderPic} />
                        </div>
                    </div>
                })}
            </Carousel>
        </header>
    )
}