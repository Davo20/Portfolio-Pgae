import React, { useState, useEffect } from "react";
import phoneCategory from "./phoneCategory.json";
import tabletsCategory from "../Tablets/tabletsCategory.json"
import Filter from "../Filter/Filter"
import Filte from "../Filter/Filte"
import Aside from "../../aside/Aside"
import Footer from "../../Footer"
import { Outlet, Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import "../category.scss"

if (!localStorage.getItem("pro")) {
    localStorage.setItem("pro", JSON.stringify([]))
}

if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify([]))
}
export default function Section({ cardClick, productName, languageKey, language }) {
    const [items, setItems] = useState([...phoneCategory].sort(() => Math.random() - 0.5))
    const [filterr, setFilter] = useState([])
    const [allProduct, setAllProduct] = useState([])
    const maxPrice = [...phoneCategory].sort((a, b) => {
        return a.price - b.price
    })
    const minPrice = [...phoneCategory].sort((a, b) => {
        return b.price - a.price
    })
    const [minprice, setMinPrice] = useState(minPrice[minPrice.length - 1].price)
    const [maxprice, setMaxPrice] = useState(maxPrice[maxPrice.length - 1].price)
    const [value1, setValue1] = useState([minprice, maxprice])
    const [filterOpen, setFilterOpen] = useState(false)

    const change = (event, value, activeThumb) => {
        const gap = 0

        if (activeThumb === 0) {
            setValue1([Math.min(value[0], value1[1] - gap), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(value[1], value1[0] + gap)]);
        }
        let temp = phoneCategory.filter((item) => item.price >= value[0] && item.price <= value[1]);
        setFilter([...temp])
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
    console.log(allProduct)
    const filterItems = () => {
        if (allProduct.length > 0) {
            let tempItems = allProduct.map((selectedCategory) => {
                let temp = phoneCategory.filter((item) => item.RAM === selectedCategory || item.brand === selectedCategory || item.operationSystem === selectedCategory || item.memory === selectedCategory || item.color === selectedCategory);
                return temp;
            });
            setFilter(tempItems.flat());
        } else {
            setFilter([...phoneCategory]);
        }
    };

    const addBasket = (e) => {
        phoneCategory.map((elem, index) => {
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

    // window.onclick = function (event) {
    //     setFilterOpen(false)
    // }

    return (
        <div className="categoryy">
            <Aside></Aside>
            <section>
                <div className="titleProduct">
                    {languageKey[language].map((item, index) => {
                        return <h3 key={index}>{item.phones}</h3>
                    })}
                    <FaFilter onClick={()=>setFilterOpen(true)}></FaFilter>
                </div>
                <div className="categoryPage">
                    {/* <Filter setFilter={setFilter} setff={setff}></Filter> */}
                    <Filte change={change} minprice={minprice} maxprice={maxprice} value1={value1} allProduct={allProduct} filterProduct={filterProduct} setFilter={setFilter} filterr={filterr} languageKey={languageKey} language={language} filterOpen={filterOpen}></Filte>

                    <div className="Category">
                        {filterr.map((elem, index) => {
                            return languageKey[language].map((item) => {
                                return <div className="card" id={elem.id} key={index}>
                                    <Link to={`/product:${productName}`}><img src={elem.img.img1} id={elem.id} onClick={cardClick}></img></Link>
                                    <div className="cardProductNamePhones">
                                        <h2>{`${elem.model} ${elem.memory}`}</h2>
                                    </div>
                                    <p>{`${elem.price.toLocaleString()}${item.price}`}</p>
                                    <button onClick={addBasket} id={elem.id} className="ddd">{item.buy}</button>
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