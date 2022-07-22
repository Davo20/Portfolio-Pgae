import React, {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function Edit({editClose, editSave, lang, fon}){
    const [phoneNumber, setPhoneNumber] = useState()
    return(
        <div className="formCont">
            <h3>{lang.edit}</h3>
            <form action="#" onSubmit={editSave}>
                <input type="text" name="name" placeholder={lang.taskInputName} required></input>
                <input type="text" name="lastname" placeholder={lang.taskLastName} required></input>
                <PhoneInput className="phoneNumber" placeholder={lang.taskPhoneNumber} name="phoneNumber"  onChange={setPhoneNumber}></PhoneInput>
                <button className={"editBtn " + (fon && "active")} type="submit">{lang.taskEdit}<div></div></button>
                <button className={"editBtn " + (fon && "active")} onClick={editClose}>{lang.taskEditClose}<div></div></button>
            </form>
        </div>
    )
}