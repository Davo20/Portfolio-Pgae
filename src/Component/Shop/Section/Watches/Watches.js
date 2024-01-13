import React, { useState, useEffect } from "react";
import watches from "./watches.json";
import Aside from "../../aside/Aside";
import Filter from "../Filter/Filter";
import Filte from "../Filter/Filte"
import Footer from "../../Footer"
import { Outlet, Link } from "react-router-dom";

export default function Watches({ cardClick, productName, languageKey, language }) {
    // const [basket, setBasket] = useState([])
    const [watchesFilter, setWatchesFilter] = useState([])
    const [allProduct, setAllProduct] = useState([])
    const maxPrice = [...watches].sort((a, b) => {
        return a.price - b.price
    })
    const minPrice = [...watches].sort((a, b) => {
        return b.price - a.price
    })
    const [minprice, setMinPrice] = useState(minPrice[minPrice.length - 1].price)
    const [maxprice, setMaxPrice] = useState(maxPrice[maxPrice.length - 1].price)
    const [value1, setValue1] = useState([minprice, maxprice])

    const change = (event, value, activeThumb) => {
        const gap = 0

        if (activeThumb === 0) {
            setValue1([Math.min(value[0], value1[1] - gap), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(value[1], value1[0] + gap)]);
        }
        let temp = watches.filter((item) => item.price >= value[0] && item.price <= value[1]);
        setWatchesFilter([...temp])
    }

    const filterProduct = (selectedCategory) => {
        if (allProduct.includes(selectedCategory)) {
            let filters = allProduct.filter((el) => el !== selectedCategory);
            setAllProduct(filters);
        } else {
            setAllProduct([...allProduct, selectedCategory]);
        }
    };

    useEffect(() => {
        filterItems()
    }, [allProduct])

    const filterItems = () => {
        if (allProduct.length > 0) {
            let tempItems = allProduct.map((selectedCategory) => {
                let temp = watches.filter((item) => item.brand === selectedCategory || item.color === selectedCategory);
                return temp;
            });
            setWatchesFilter(tempItems.flat());
        } else {
            setWatchesFilter([...watches]);
        }
    };

    const addBasket = (e) => {
        watches.map((elem, index) => {
            if (e.target.id == elem.id) {
                const basket = [
                    {
                        id: elem.id,
                        img: elem.img.img1,
                        price: elem.price,
                        model: elem.model,
                    }
                ]
                localStorage.setItem("basket", JSON.stringify([...JSON.parse(localStorage.getItem("basket")), ...basket]))

            }
        })
    }
    return (
        <div className="categoryy">
            <Aside></Aside>
            <section>
                <div className="titleProduct">
                    {languageKey[language].map((item, index) => {
                        return <h3 key={index}>{item.watches}</h3>
                    })}
                </div>
                <div className="categoryPage">
                    {/* <Filter setFilter={setFilter} setff={setff}></Filter> */}
                    <Filte setWatchesFilter={setWatchesFilter} value1={value1} change={change} minprice={minprice} maxprice={maxprice} filterProduct={filterProduct} languageKey={languageKey} language={language}></Filte>
                    {/* {!ff ? <div className="Category">
            {watches.map((elem, index)=>{
                return <div className="card" id={elem.id} key={index}>
                    <Link to={`/product:${productName}`}><img src={elem.img.img1} id={elem.id} onClick={cardClick}></img></Link>
                    <div className="cardProductNameWatch">
                        <h2>{elem.model}</h2>
                    </div>
                    <p>{`${elem.price.toLocaleString()}AMD`}</p>
                    <button onClick={addBasket} id={elem.id}>Buy</button>
                </div>                
            })}
           </div>:
           <div className="Category">
           {filterr.map((elem, index)=>{
               return <div className="card" id={elem.id} key={index}>
                   <Link to={`/product:${productName}`}><img src={elem.img} id={elem.id} onClick={cardClick}></img></Link>
                   <div className="cardProductNameWatch">
                       <h2>{elem.model}</h2>
                   </div>
                   <p>{`${elem.price.toLocaleString()}AMD`}</p>
                   <button onClick={addBasket} id={elem.id}>Buy</button>
               </div>                
           })}
          </div>} */}
                    <div className="Category">
                        {watchesFilter.map((elem, index) => {
                            return languageKey[language].map((item) => {
                                return <div className="card" id={elem.id} key={index}>
                                    <Link to={`/product:${productName}`}><img src={elem.img.img1} id={elem.id} onClick={cardClick}></img></Link>
                                    <div className="cardProductNameTablets">
                                        <h2>{`${elem.model}`}</h2>
                                    </div>
                                    <p>{`${elem.price.toLocaleString()}${item.price}`}</p>
                                    <button onClick={addBasket} id={elem.id}>{item.buy}</button>
                                </div>
                            })
                        })}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}