import React, { useState, useRef } from "react";
import {BsFillTelephoneFill, BsCheck2} from "react-icons/bs"
import {MdAlternateEmail} from "react-icons/md"
import {FaWhatsapp, FaLinkedinIn} from "react-icons/fa"
import "./contact.scss";
import emailjs from '@emailjs/browser';
export default function Contact({send, lang, fon, dark}){
    const form = useRef();
    const [contact, setContact] = useState([
        {
            icon: <BsFillTelephoneFill/>,
            name: "Phone",
            cont: "+374-91-507-805"
        },
        {
            icon: <MdAlternateEmail/>,
            name: "E-mail",
            cont: "dav507805@gmail.com"
        },
        {
            icon: <FaWhatsapp/>,
            name: "WhatsApp",
            cont: "+374-91-507-805"
        },
        {
            icon: <FaLinkedinIn/>,
            name: "Linkedin",
            cont: "David Balabekyan"
        }
    ])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_146cl1s', 'template_7lf0nra', form.current, 'zDTM-_fZY3frbzvfO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return(
        <section id="sectionContact" className={"section4 " + (dark && "active")}>
            <h3 >{lang.contact}</h3>
            <div className="contact">
                <div className="contactContainer">
                    {contact.map((elem)=>{
                        return(
                        <div key={Math.random()}>
                            {elem.icon}
                            <div>
                                <span>{elem.name}</span>
                                <span className="phoneNumber">{elem.cont}</span>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="inputContact">
                    <form action="#" ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder={lang.inputName}></input>
                        <input type="email" name="email" placeholder={lang.inputEmail}></input>
                        <textarea cols="15" rows="10" name="message" placeholder={lang.inputMessage}></textarea>
                        <button type="submit" id="submit">
                            <span className="btSend">{lang.sendBt}</span>
                            <BsCheck2/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}