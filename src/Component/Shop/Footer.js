import React from "react";
import { MdCall } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";

import { Outlet, Link } from "react-router-dom";

export default function Footer({ languageKey, language }) {
    return (
        <footer className="footerShop">
            <div className="footerContainer">
                <div className="contact">
                    <div>
                        <MdCall></MdCall>
                    </div>
                    <div>
                        <span>+374-91-507-805</span>
                        <span>+374-91-472-512</span>
                    </div>
                </div>
                <div className="footerSections">
                    {/* {languageKey[language].map((elem) => {
                        return <ul>
                            <Link to="/phones">
                                <li>{elem.phones}</li>
                            </Link>
                            <Link to="/tablets">
                                <li>{elem.tablets}</li>
                            </Link>
                            <Link to="/watches">
                                <li>{elem.watches}</li>
                            </Link>
                            <Link to="/computers">
                                <li>{elem.computers}</li>
                            </Link>
                            <Link to="/">
                                <li>{elem.tv}</li>
                            </Link>
                        </ul>
                    })} */}
                </div>
                <div className="contactOnline">
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaWhatsapp></FaWhatsapp>
                    <FaTelegram></FaTelegram>
                </div>
            </div>
            <div className="footerEnd">
                <div>
                    <span>© Sevan Electronics LLC</span>
                </div>
            </div>
        </footer>
    )
}