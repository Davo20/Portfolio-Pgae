import React, { useState, useEffect } from "react";
import Header from "./Header/HeaderSlider";
import Aside from "./aside/Aside";
import NavBar from "./Nav/NavBar";
import HeaderMain from "./HeaderMain";
import Phones from "./Section/Phones/Phones";
import Phon from "./Section/Phones/Phon";
import Tablets from "./Section/Tablets/Tablets";
import Watches from "./Section/Watches/Watches";
import Computers from "./Section/Computers/Computers";
import Product from "./Section/Product";
import Producttt from "./Section/Producttt";
import Basket from "./Section/Basket/Basket";
import SearchResult from "./Section/SearchResult/SearchResult";
// import E from "./Section/E"
import { BiShoppingBag, BiMenu } from "react-icons/bi";
import "./shop.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import phoneCategory from "./Section/Phones/phoneCategory.json";
import pp from "./Section/Phones/pp.json"
import tabletsCategory from "./Section/Tablets/tabletsCategory.json"
import watches from "./Section/Watches/watches.json"
import computers from "./Section/Computers/computers.json"
import { tab } from "@testing-library/user-event/dist/tab";
// import { Outlet, Link } from "react-router-dom";

export default function Shop({ basket }) {
    const [allProduct, setAllProduct] = useState([...phoneCategory, ...tabletsCategory, ...watches, ...computers])
    const [language, setLanguage] = useState("English")
    const [searchProductResult, setSearchProductResult] = useState([])
    const [searchValue, setSeacrhValue] = useState("")
    const [productName, setPorductName] = useState("")

    // useEffect(()=>{
    //     setAllProduct([...phoneCategory, ...tabletsCategory, ...watches, ...computers])
    // },[])
    localStorage.setItem("allProduct", JSON.stringify(allProduct))

    // let productName = ""
    const cardClick = (e) => {
        phoneCategory.map((elem) => {
            if (e.target.id == elem.id) {
                const productPhone = [{
                    img: elem.img,
                    phoneName: elem.phoneName,
                    info: [
                        {
                            English: [
                                {
                                    id: elem.id,
                                    Warranty: elem.warranty || elem.Warranty,
                                    AnnouncementYear: elem.announcementYear,
                                    "Operation System": elem.operationSystem,
                                    "OS Version": elem.OSVersion,
                                    Model: elem.model,
                                    RAM: elem.RAM,
                                    Memory: elem.memory,
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
                                }
                            ],
                            Armenian: [
                                {
                                    id: elem.id,
                                    Երաշխիք: elem.warranty || elem.Warranty,
                                    ՀայտարարությանՏարին: elem.announcementYear,
                                    "Օպերացիոն համակարգ": elem.operationSystem,
                                    "ՕՀ տեսակ": elem.OSVersion,
                                    Մոդել: elem.model,
                                    ՕպերատիվՀիշողություն: elem.RAM,
                                    Հիշողություն: elem.memory,
                                    "Էկրանի տեսակը": elem.screenType,
                                    "Էկրանի Կետայնություն": elem.screenResolution,
                                    "Էկրանի չափսը": elem.screenSize,
                                    "Դիմային տեսախցիկ": elem.frontCamera,
                                    "Հիմնական տեսախցիկ": elem.mainCamera,
                                    Չիպսեթ: elem.chipset,
                                    "Պրոցեսորների միջուկների քանակը": elem.numberOfProcessorCores,
                                    Պրոցեսոր: elem.CPU,
                                    "Հիշողության քարտի բնիկը": elem.memoryCardSlot,
                                    "Ստանդարտ Ցանց": elem.standartNetwork,
                                    "Ինտերնետի հասանելիություն": elem.accessToTheInternet,
                                    "4G LTE Ցանցի տիրույթ": elem.GLTENetworkRange,
                                    GPS: elem.GPS,
                                    Bluetooth: elem.Bluetooth,
                                    "WiFi Ցանց": elem.WiFiNetwork,
                                    "3G Ցանց": elem.G3Network,
                                    NFC: elem.NFC,
                                    "4G LTE Ցանց": elem.G4LTENetwork,
                                    "Լիցքավորման բնիկի տեսակը": elem.BatteryType,
                                    "Մարտկոցի տեսակը": elem.BatteryCapacity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ],
                            Russian: [
                                {
                                    id: elem.id,
                                    Гарантия: elem.warranty || elem.Warranty,
                                    ГодАнонсирования: elem.announcementYear,
                                    "Операционная система": elem.operationSystem,
                                    "Версия ОС": elem.OSVersion,
                                    Модель: elem.model,
                                    Оперативнаяпамять: elem.RAM,
                                    Память: elem.memory,
                                    "Тип экрана": elem.screenType,
                                    "Разрешение экрана": elem.screenResolution,
                                    "Размер экрана": elem.screenSize,
                                    "Передняя камера": elem.frontCamera,
                                    "Основная камера": elem.mainCamera,
                                    Чипсет: elem.chipset,
                                    "Количество ядер процессора": elem.numberOfProcessorCores,
                                    Процессор: elem.CPU,
                                    "Слот для карты памяти": elem.memoryCardSlot,
                                    "Стандарт Сеть": elem.standartNetwork,
                                    "Доступ в интернет": elem.accessToTheInternet,
                                    "4G LTE Диапазон": elem.GLTENetworkRange,
                                    GPS: elem.GPS,
                                    Bluetooth: elem.Bluetooth,
                                    "WiFi Сеть": elem.WiFiNetwork,
                                    "3G Сеть": elem.G3Network,
                                    NFC: elem.NFC,
                                    "4G LTE Сеть": elem.G4LTENetwork,
                                    "Լիցքավորման բնիկի տեսակը": elem.BatteryType,
                                    "Մարտկոցի տեսակը": elem.BatteryCapacity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ]
                        }
                    ]
                }]
                localStorage.setItem("product", JSON.stringify(productPhone))
                // productName = elem.model
                // setPorductName(elem.model)
            }
        })

        tabletsCategory.map((elem) => {
            if (e.target.id == elem.id) {
                const productTablets = [{
                    // id: elem.id,
                    img: elem.img,
                    phoneName: elem.phoneName,
                    info: [
                        {
                            English: [
                                {
                                    id: elem.id,
                                    // img: elem.img,
                                    Warranty: elem.Warranty || elem.warranty,
                                    AnnouncementYear: elem.announcementYear,
                                    "Operation System": elem.operationSystem,
                                    "OS Version": elem.OSVersion,
                                    Model: elem.model,
                                    RAM: elem.RAM,
                                    Memory: elem.memory,
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
                                    "Battery Type": elem.BatteryType,
                                    "Battery capacity": elem.BatteryCapacity,
                                    "SIM card quantity": elem.SIMCardQuantity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ],
                            Armenian: [
                                {
                                    // key: Object.keys(elem),
                                    id: elem.id,
                                    // img: elem.img,
                                    Երաշխիք: elem.warranty || elem.Warranty,
                                    Հայտարարությանտարին: elem.announcementYear,
                                    "Օպերացիոն համակարգ": elem.operationSystem,
                                    "ՕՀ տեսակ": elem.OSVersion,
                                    Մոդել: elem.model,
                                    ՕպերատիվՀիշողություն: elem.RAM,
                                    Հիշողություն: elem.memory,
                                    "Էկրանի տեսակը": elem.screenType,
                                    "Էկրանի Կետայնություն": elem.screenResolution,
                                    "Էկրանի չափսը": elem.screenSize,
                                    "Դիմային տեսախցիկ": elem.frontCamera,
                                    "Հիմնական տեսախցիկ": elem.mainCamera,
                                    Չիպսեթ: elem.chipset,
                                    "Պրոցեսորների միջուկների քանակը": elem.numberOfProcessorCores,
                                    Պրոցեսոր: elem.CPU,
                                    "Հիշողության քարտի բնիկը": elem.memoryCardSlot,
                                    "Ստանդարտ Ցանց": elem.standartNetwork,
                                    "Ինտերնետի հասանելիություն": elem.accessToTheInternet,
                                    "4G LTE Ցանցի տիրույթ": elem.GLTENetworkRange,
                                    GPS: elem.GPS,
                                    Bluetooth: elem.Bluetooth,
                                    "WiFi Ցանց": elem.WiFiNetwork,
                                    "3G Ցանց": elem.G3Network,
                                    NFC: elem.NFC,
                                    "4G LTE Ցանց": elem.G4LTENetwork,
                                    "Մարտկոցի տեսակը": elem.BatteryType,
                                    "Մարտկոցի հզորությունը": elem.BatteryCapacity,
                                    "SIM քարտի քանակ": elem.SIMCardQuantity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ],
                            Russian: [
                                {
                                    id: elem.id,
                                    // img: elem.img,
                                    Гарантия: elem.warranty || elem.Warranty,
                                    Годанонсирования: elem.announcementYear,
                                    "Операционная система": elem.operationSystem,
                                    "Версия ОС": elem.OSVersion,
                                    Модель: elem.model,
                                    Оперативнаяпамять: elem.RAM,
                                    Память: elem.memory,
                                    "Тип экрана": elem.screenType,
                                    "Разрешение экрана": elem.screenResolution,
                                    "Размер экрана": elem.screenSize,
                                    "Передняя камера": elem.frontCamera,
                                    "Основная камера": elem.mainCamera,
                                    Чипсет: elem.chipset,
                                    "Количество ядер процессора": elem.numberOfProcessorCores,
                                    Процессор: elem.CPU,
                                    "Слот для карты памяти": elem.memoryCardSlot,
                                    "Стандарт Сеть": elem.standartNetwork,
                                    "Доступ в интернет": elem.accessToTheInternet,
                                    "4G LTE Диапазон": elem.G4LTENetworkRange,
                                    GPS: elem.GPS,
                                    Bluetooth: elem.Bluetooth,
                                    "WiFi Сеть": elem.WiFiNetwork,
                                    "3G Сеть": elem.G3Network,
                                    NFC: elem.NFC,
                                    "4G LTE Сеть": elem.G4LTENetwork,
                                    "Մարտկոցի տեսակը": elem.BatteryType,
                                    "Մարտկոցի հզորությունը": elem.BatteryCapacity,
                                    "Количество SIM-карт": elem.SIMCardQuantity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ]
                        }
                    ]
                }]

                localStorage.setItem("product", JSON.stringify(productTablets))
                // setPorductName(elem.model)
            }
        })
        watches.map((elem) => {
            if (e.target.id == elem.id) {
                const productWatches = [{
                    // id: elem.id,
                    img: elem.img,
                    phoneName: elem.phoneName,
                    info: [
                        {
                            English: [
                                {
                                    id: elem.id,
                                    Model: elem.model,
                                    "Screen Type": elem.screenType,
                                    "Screen Resolution": elem.screenResolution,
                                    "Screen Size": elem.screenSize,
                                    GPS: elem.GPS,
                                    "WiFi Network": elem.WiFiNetwork,
                                    "Battery capacity": elem.BatteryCapacity,
                                    "Water resistant": elem.WaterResistant,
                                    "SIM card quantity": elem.SIMCardQuantity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ],
                            Armenian: [
                                {
                                    id: elem.id,
                                    Մոդել: elem.model,
                                    "Էկրանի տեսակը": elem.screenType,
                                    "Էկրանի Կետայնություն": elem.screenResolution,
                                    "Էկրանի չափսը": elem.screenSize,
                                    GPS: elem.GPS,
                                    "WiFi Ցանց": elem.WiFiNetwork,
                                    "Մարտկոցի հզորությունը": elem.BatteryCapacity,
                                    "Water resistant": elem.WaterResistant,
                                    "SIM քարտի քանակ": elem.SIMCardQuantity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ],
                            Russian: [
                                {
                                    id: elem.id,
                                    Модель: elem.model,
                                    "Тип экрана": elem.screenType,
                                    "Разрешение экрана": elem.screenResolution,
                                    "Размер экрана": elem.screenSize,
                                    GPS: elem.GPS,
                                    "WiFi Сеть": elem.WiFiNetwork,
                                    "Battery capacity": elem.BatteryCapacity,
                                    "Water resistant": elem.WaterResistant,
                                    "Количество SIM-карт": elem.SIMCardQuantity,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ]
                        }
                    ]
                }]

                localStorage.setItem("product", JSON.stringify(productWatches))
                // setPorductName(elem.model)
            }
        })
        computers.map((elem) => {
            if (e.target.id == elem.id) {
                const productComputers = [{
                    // id: elem.id,
                    img: elem.img,
                    phoneName: elem.phoneName,
                    HardDriveCapacity: elem.HardDriveCapacity,
                    Model: elem.model,
                    info: [
                        {
                            English: [
                                {
                                    id: elem.id,
                                    "Screen Resolution": elem.screenResolution,
                                    Screen: elem.screenSize,
                                    "Hard Drive Capacity": elem.HardDriveCapacity,
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
                                    price: elem.price,
                                    color: elem.color
                                }
                            ],
                            Armenian: [
                                {
                                    id: elem.id,
                                    // model: elem.model,
                                    "Էկրանի բանաձեւը": elem.screenResolution,
                                    Էկրան: elem.screenSize,
                                    "Կոշտ սկավառակի հիշողություն": elem.HardDriveCapacity,
                                    "ՕպերատիվՀիշողություն": elem.RAM,
                                    "ՕՀ տեսակ": elem.OSVersion,
                                    Տեսակ: elem.type,
                                    "Պրոցեսորի միջուկ": elem.TheCoreOfTheProcessor,
                                    Պրոցեսոր: elem.CPU,
                                    "Կոշտ սկավառակի տեսակ": elem.HardDriveType,
                                    "Վիդեո քարտ հիշողություն": elem.VideoCardMemory,
                                    Ինտերֆեյս: elem.Interfaces,
                                    "Հիշողության քարտ կարդալու հնարովարվություն": elem.MemoryCardReadability,
                                    "Bluetooth Տեսակ": elem.BluetoothType,
                                    Bluetooth: elem.Bluetooth,
                                    "WiFi Տեսակ": elem.WiFiType,
                                    WiFi: elem.WiFiNetwork,
                                    Խոսափող: elem.Microphone,
                                    Բարձախոսներ: elem.Speakers,
                                    "Մարտկոցի Տեսակ": elem.BatteryType,
                                    Չափս: elem.size,
                                    "Վեբ տեսախցիկ": elem.WebCamera,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ],
                            Russian: [
                                {
                                    id: elem.id,
                                    // model: elem.model,
                                    "Разрешение экрана": elem.screenResolution,
                                    Экран: elem.screenSize,
                                    "Объем жесткого диска": elem.HardDriveCapacity,
                                    ОЗУ: elem.RAM,
                                    "Версия ОС": elem.OSVersion,
                                    Тип: elem.type,
                                    "Ядро процессора": elem.TheCoreOfTheProcessor,
                                    Процессор: elem.CPU,
                                    "Тип жесткого диска": elem.HardDriveType,
                                    "Память видеокарты": elem.VideoCardMemory,
                                    Интерфейсы: elem.Interfaces,
                                    "Возможность чтения карт памяти": elem.MemoryCardReadability,
                                    "Bluetooth Тип": elem.BluetoothType,
                                    Bluetooth: elem.Bluetooth,
                                    "WiFi Тип": elem.WiFiType,
                                    WiFi: elem.WiFiNetwork,
                                    Микрофон: elem.Microphone,
                                    Динамики: elem.Speakers,
                                    "Тип аккумулятора": elem.BatteryType,
                                    Размер: elem.size,
                                    "Веб-камера": elem.WebCamera,
                                    price: elem.price,
                                    color: elem.color
                                }
                            ]
                        }
                    ]

                }]
                localStorage.setItem("product", JSON.stringify(productComputers))
                // setPorductName(elem.model)
            }
        })
    }

    const languageClick = (value) => {
        setLanguage(value)
    }

    const languageKey = {
        English: [
            {
                phones: "Phones",
                tablets: "Tablets",
                watches: "Watches",
                computers: "Computers",
                tv: "TV",
                buy: "Buy",
                price: "AMD",
                remove: "Remove",
                RAM: "RAM",
                Memory: "Memory",
                AnnouncementYear: "Announcement Year",
                Color: "Color",
                screen: "Screen",
                HardDriveCapacity: "Hard Drive Capacity",
                OperationSystem: "Operation System",
                searchResults: "Search results:"
            }
        ],
        Armenian: [
            {
                phones: "Հեռախոսներ",
                tablets: "Պլանշետներ",
                watches: "Ժամացույցներ",
                computers: "Համակարգիչներ",
                tv: "Հեռուստացույցներ",
                buy: "Գնել",
                price: "դր․",
                remove: "Հեռացնել",
                RAM: "Օպերատիվ հիշողություն",
                Memory: "Հիշողություն",
                AnnouncementYear: "Հայտարարության տարին",
                Color: "Առկա գույներ",
                screen: "Էկրան",
                HardDriveCapacity: "Կոշտ սկավառակի հիշողություն",
                OperationSystem: "Օպերացիոն համակարգ",
                searchResults: "Որոնման արդյունք`"
            }
        ],
        Russian: [
            {
                phones: "Телефоны",
                tablets: "Планшеты",
                watches: "Часы",
                computers: "Компютеры",
                tv: "Телевизоры",
                buy: "Купить",
                price: "драм",
                remove: "Убрать",
                RAM: "Оперативная память",
                Memory: "Память",
                AnnouncementYear: "Год анонсирования",
                Color: "Цвета",
                screen: "Экран",
                HardDriveCapacity: "Объем жесткого диска",
                OperationSystem: "Операционная система",
                searchResults: "Результаты поиска:"
            }
        ]
    }
    return (
        <main>
            <BrowserRouter>
                <NavBar searchProductResult={searchProductResult} setSearchProductResult={setSearchProductResult} allProduct={allProduct} language={language} languageClick={languageClick} languageKey={languageKey} setSeacrhValue={setSeacrhValue} cardClick={cardClick} productName={productName}></NavBar>
                <Routes>
                    <Route path="/" element={<HeaderMain productName={productName} cardClick={cardClick} language={language} languageKey={languageKey} />}></Route>
                    <Route path="phones" element={<Phones cardClick={cardClick} productName={productName} language={language} languageKey={languageKey} />}></Route>
                    <Route path="tablets" element={<Tablets basket={basket} cardClick={cardClick} productName={productName} language={language} languageKey={languageKey} />}></Route>
                    <Route path="watches" element={<Watches basket={basket} cardClick={cardClick} productName={productName} language={language} languageKey={languageKey}/>}></Route>
                    <Route path="computers" element={<Computers basket={basket} cardClick={cardClick} productName={productName} />}></Route>
                    {/* <Route path={`/product:${productName}`} element={<Product basket={basket} productName={productName} allProduct={allProduct} />}></Route> */}
                    <Route path={`/product:${productName}`} element={<Producttt language={language} basket={basket} productName={productName} allProduct={allProduct} languageKey={languageKey} cardClick={cardClick} />}></Route>
                    <Route path="basket" element={<Basket basket={basket} productName={productName} cardClick={cardClick} language={language} languageKey={languageKey} />}></Route>
                    <Route path="searchResult" element={<SearchResult searchProductResult={searchProductResult} setSearchProductResult={setSearchProductResult} language={language} languageKey={languageKey} cardClick={cardClick} productName={productName} searchValue={searchValue}></SearchResult>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}