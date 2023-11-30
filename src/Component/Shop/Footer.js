import React from "react";
import { MdCall } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";

import { Outlet, Link } from "react-router-dom";

export default function Footer(){
    return(
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
                    <ul>
                        <Link to="/phones">
                            <li>Phones</li>
                        </Link>
                        <Link to="/tablets">
                            <li>Tablets</li>
                        </Link>
                        <Link to="/watches">
                            <li>Watches</li>
                        </Link>
                        <Link to="/computers">
                            <li>Computers</li>
                        </Link>
                        <Link to="/">
                            <li>TV</li>
                        </Link>
                    </ul>
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