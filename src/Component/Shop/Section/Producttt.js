import React, { useEffect, useState, useRef } from "react";
import phoneCategory from "./Phones/phoneCategory.json"
import "./product.scss";
import { refresh } from "aos";
import { Link } from "react-router-dom";

export default function Product({ productName, allProduct, language, languageKey, cardClick }) {
    const [titel, setTitle] = useState([])
    const [rowInfo, setRowInfo] = useState([])
    const [basket, setBasket] = useState([])
    const allProductt = JSON.parse(localStorage.getItem("allProduct"))
    const [item, setItem] = useState([])
    const [color, setColor] = useState([])
    const productCaruesel = useRef(null)
    const [activeColor, setActiveColor] = useState(false)


    useEffect(() => {
        setItem([...JSON.parse(localStorage.getItem("product"))])
    }, [item])
    // useEffect(() => {
    //     setItem([...JSON.parse(localStorage.getItem("product"))])
    // }, [])

    useEffect(() => {
        setBasket([...JSON.parse(localStorage.getItem("basket"))])
    }, [basket])
    // useEffect(() => {
    //     setBasket([...JSON.parse(localStorage.getItem("basket"))])
    // }, [])

    const addBasket = (e) => {
        item.map((val, index) => {
            val.info.map((item) => {
                item[language].map((elem)=>{
                    if (e.target.id == elem.id) {
                        elem.img = val.img.img1
                        elem.model = val.Model
                        localStorage.setItem("basket", JSON.stringify([...basket, elem]))
                    }
                })
            })
        })
    }


    useEffect(() => {
        item.map((item) => {
            item.info.map((elem) => {
                elem[language].map((value) => {
                    setTitle(Object.keys(value))
                    setRowInfo(Object.values(value))
                    
                })
                // setRowInfo(Object.values(elem))
            })
            // item.value.map((elem) => {
            // })
        })
    }, [item])
    // useEffect(() => {
    //     item.map((item) => {
    //         item.key.map((elem) => {
    //             elem[language].map((value) => {
    //                 setTitle(Object.values(value))
    //             })
    //             // setRowInfo(Object.values(elem))
    //         })
    //         item.value.map((elem) => {
    //             setRowInfo(Object.values(elem))
    //         })
    //     })
    // }, [])

    const colorProduct = (e, id) => {
        allProductt.map((elem) => {
            if (e == elem.color && id == elem.id) {
                localStorage.setItem("product", JSON.stringify([elem]))
            }
            // item.map((item) => {
            //     if (item.datasetId == elem.datasetId) {
            //         setColor([elem.color])
            //     }
            // })
        })
    }

    let caruselActive = 0
    const prevSliderClick = (e) => {
        caruselActive = e.target.id
        Array.from(productCaruesel.current.children).map((elem) => {
            elem.style = `transform: translateX(${-1 * caruselActive * 100}%)`
        })
        e.target.parentElement.style = "border-bottom: 2px solid rgb(50, 50, 227)"

        console.log(e.target.parentElement.id)
    }


    return (
        <section className="productPage">
            {item.map((value, index) => {
                return value.info.map((keylang) => {
                    return keylang[language].map((elem) => {
                        return languageKey[language].map((lang) => {
                            return <div className="productHead" key={index}>
                                <div className="productPic">
                                    {/* <img src={elem.img.img1} /> */}
                                    <div className="b" ref={productCaruesel}>
                                        {Object.values(value.img).map((pic, index) => {
                                            return <div key={index} id={index}>
                                                <img src={pic} ></img>
                                            </div>
                                        })}
                                    </div>
                                    <div className="sliderPrev" style={{ display: "flex" }}>
                                        {Object.values(value.img).map((pic, index) => {
                                            return <div key={index} className="dotPic" id={index}>
                                                <img src={pic} id={index} onClick={prevSliderClick}></img>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="productMem">
                                    <h2>{elem.Model || elem.Մոդել || elem.Модель && elem.Memory || elem.Հիշողություն || elem.Память ? `${elem.Model || elem.Մոդել || elem.Модель} ${elem.Memory || elem.Հիշողություն || elem.Память} (${elem.color})` : elem.Model || elem.Մոդել || elem.Модель || value.Model}</h2>
                                    <p>{`${elem.price.toLocaleString()}${lang.price}`}</p>
                                    <div className="productInfo">
                                        <div>
                                            <ul>
                                                {elem.Screen || elem.Էկրան || elem.Экран ? <li>{lang.screen}</li> : null}
                                                {value.HardDriveCapacity ? <li>{lang.HardDriveCapacity}</li> : null}
                                                {elem.RAM || elem.ՕպերատիվՀիշողություն || elem.Оперативнаяпамять || elem.ОЗУ ? <li>{lang.RAM}</li> : null}
                                                {elem.Memory || elem.Հիշողություն || elem.Память ? <li>{lang.Memory}</li> : null}
                                                {elem.AnnouncementYear ? <li>{lang.AnnouncementYear}</li> : null}
                                                {elem.color ? <li>{lang.Color}</li> : null}
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>{elem.Screen || elem.Էկրան || elem.Экран}</li>
                                                <li>{value.HardDriveCapacity}</li>
                                                <li>{elem.RAM || elem.ՕպերատիվՀիշողություն || elem.Оперативнаяпамять || elem.ОЗУ}</li>
                                                <li>{elem.Memory || elem.memory || elem.Հիշողություն || elem.Память}</li>
                                                <li>{elem.AnnouncementYear || elem.ՀայտարարությանՏարին || elem.ГодАнонсирования}</li>
                                                <li className="color">
                                                    {allProduct.map((color, index) => {
                                                        return color.phoneName == value.phoneName ?
                                                            <div>
                                                                <label className="label" key={index} for={color.id} style={{ backgroundColor: color.color }} id={color.id} onClick={cardClick}>
                                                                    <input type="radio" id={color.id} name="color" value={color.color}></input>
                                                                </label>
                                                            </div>
                                                            : null
                                                    })}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button onClick={addBasket} id={elem.id}>{lang.buy}</button>
                                </div>
                            </div>
                        })
                    })
                })
            })}
            <div className="cardInfoCont" style={{ display: "flex" }}>
                <div className="infoName">{titel.map((elem, index) => {
                    return <div key={index}>
                        {elem}
                    </div>
                })}
                </div>
                <div className="infoValues">
                    {rowInfo.map((elem, index) => {
                        return <div key={index}>{elem}</div>
                    })}
                </div>
            </div>
        </section>
    )
}