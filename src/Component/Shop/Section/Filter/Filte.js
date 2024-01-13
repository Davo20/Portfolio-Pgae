import React, { useState, useEffect, useRef } from "react";
import phoneCategory from "../Phones/phoneCategory.json";
import tabletsCategory from "../Tablets/tabletsCategory.json";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./filter.scss";

export default function Filter({ languageKey, language, allProduct, change, filterProduct, filterr, setFilter, setff, setTabletFilter, selectLanguage, minprice, maxprice, value1, filterOpen }) {
    let filterRAM = ["3GB", "4GB", "6GB", "8GB", "12GB"]
    let filterBrand = ["Samsung", "Apple", "Xiaomi"]
    let filterOperationSystem = ["Android", "iOS", "iPadOS"]
    let filterMemory = ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"]
    let filterColor = ["Beige", "Black", "Blue", "LightBlue", "LightGreen", "Silver", "White", "Wheat", "Purple", "Pink", "LightPink", "Violet", "Green", "Gold", "Yellow", "Coral", "Gray", "Lime"]
    
    return (
        <div className={filterOpen ? "filterBarActive" : "filterBar"}>
            {languageKey[language].map((elem, index) => {
                return <div key={index}>
                    <div className="filterProduct">
                        <h4>Price</h4>
                        <span>{`${value1[0].toLocaleString()}-${value1[1].toLocaleString()}`}</span>
                        <div className="sliderRange">
                            <Box >
                                <Slider
                                    getAriaLabel={() => 'Minimum distance'}
                                    value={value1}
                                    min={minprice}
                                    max={maxprice}
                                    onChange={change}
                                    valueLabelDisplay="auto"
                                    disableSwap
                                />
                            </Box>
                        </div>


                    </div>
                    <div className="filterProduct">
                        <h4>{elem.RAM}</h4>
                        <div className="filterProductCont">
                            {filterRAM.map((elem, index) => {
                                return <button key={index} onClick={() => filterProduct(elem)}
                                    className={`button ${allProduct?.includes(elem) ? "active" : ""
                                        }`}>{elem}</button>
                            })}
                        </div>
                    </div>
                    <div className="filterProduct">
                        <h4>BRANDS</h4>
                        <div className="filterProductCont">
                            {filterBrand.map((elem, index) => {
                                return <button key={index} onClick={() => filterProduct(elem)}
                                    className={`button ${allProduct?.includes(elem) ? "active" : ""
                                        }`}>{elem}</button>
                            })}

                        </div>
                    </div>
                    <div className="filterProduct">
                        <h4>{elem.OperationSystem.toUpperCase()}</h4>
                        <div className="filterProductCont">
                            {filterOperationSystem.map((elem, index) => {
                                return <button key={index} onClick={() => filterProduct(elem)}
                                    className={`button ${allProduct?.includes(elem) ? "active" : ""
                                        }`}>{elem}</button>
                            })}
                        </div>
                    </div>
                    <div className="filterProduct">
                        <h4>{elem.Memory.toUpperCase()}</h4>
                        <div className="filterProductCont">
                            {filterMemory.map((elem, index) => {
                                return <button key={index} onClick={() => filterProduct(elem)}
                                    className={`button ${allProduct?.includes(elem) ? "active" : ""
                                        }`}>{elem}</button>
                            })}
                        </div>
                    </div>
                    <div className="filterProductColor">
                        <h4>Color</h4>
                        <div className="filterProductCont">
                            {filterColor.map((elem, index) => {
                                return <button key={index} onClick={() => filterProduct(elem)}
                                    style={{ backgroundColor: elem }}
                                    className={`buttonColor ${allProduct?.includes(elem) ? "activeColor" : ""
                                        }`}></button>
                            })}
                        </div>
                    </div>
                </div>
            })}
        </div>

    )
}