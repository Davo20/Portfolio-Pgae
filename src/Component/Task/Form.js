import React, {useState} from "react";
import {BsExclamationCircle} from "react-icons/bs";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./task.scss";

export default function Form({handleClick, lang,reqName, reqLName, reqPNumber}){
    const [phoneNumber, setPhoneNumber] = useState()
    
    return(
        <div className="formCont">
            <form action="#" onSubmit={handleClick} >
               <div><input type="text" name="name" placeholder={lang.taskInputName} ></input>{reqName && <BsExclamationCircle className="req"/>}</div>
                <div><input type="text" name="lastname" placeholder={lang.taskLastName} ></input>{reqLName && <BsExclamationCircle className="req"/>}</div>
                <div><PhoneInput className="phoneNumber" placeholder={lang.taskPhoneNumber} name="phoneNumber"  onChange={setPhoneNumber}></PhoneInput>{reqPNumber && <BsExclamationCircle className="req"/>}</div>
                <button className="addBtn" type="submit">{lang.taskAdd}<div></div></button>
            </form>
        </div>
    )
}