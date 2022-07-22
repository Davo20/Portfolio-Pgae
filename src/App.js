import React, {useState, useEffect} from "react";
import Header from "./Component/Header/Header";
import About from "./Component/Section/About";
import Skill from "./Component/Section/Skill";
import Work from "./Component/Section/Work";
import Contact from "./Component/Section/Contact";
import Footer from "./Component/Footer/Footer";
import "./App.css";

if(!localStorage.getItem("lang")){
  localStorage.setItem("lang", "eng")
}



export default function App() {
  const [open, setOpen] = useState(false)
  const [fon, setFon] = useState(false)
  const [form, setForm] = useState([])
  const [lang, setLang] = useState(
    localStorage.getItem("lang")=="eng"?{
    logo: "DAV",
    burgName: "David",
    burgLastName: " Balabekyan",
    home: "Home",
    about: "About",
    aboutMe: "I am a beginner Front-End programmer. I have been programming and graduated from Smart Technology Programming School.I'm able to learn quickly, work well in the team, ready to work and get experience.",
    skills: "Skills",
    work: "Work",
    contact: "Contact",
    homeName: "Hello I am David",
    downBt: "Download CV",
    inputName: "Name",
    inputEmail: "e-mail",
    inputMessage: "Message...",
    sendBt: "Send",
    footLevel: "Front-end Developer",
    more: "More",
    taskName: "PhoneBook",
    taskAdd: "Add",
    taskEdit: "Save",
    taskEditClose: "Close",
    taskInputName: "Name",
    taskLastName: "Last Name",
    taskPhoneNumber: "Phone Number",
    edit: "Edit",
  }:{logo: "ԴԱՎ",
  burgName: "Դավիթ",
  burgLastName: "Բալաբեկյան",
  home: "Գլխավոր",
  about: "Իմ մասին",
  aboutMe: "Ես սկսնակ Front-end ծրագրավորող եմ։ Ես ծրագրավորում սովորել եվ ավարտել եմ Smart Technology ծրագրավորման դպրոցը։ Ես կարողանում եմ արագ սովորել, լավ աշխատել թիմում, պատրաստ եմ աշխատել և փորձ ձեռք բերել։",
  skills: "Հմտություն",
  work: "Աշխատանք",
  contact: "Կապ",
  homeName: "Ողջույն ես Դավիթն եմ",
  downBt: "Ներբեռնել CV",
  inputName: "Անուն",
  inputEmail: "Էլ․ Հասցե",
  inputMessage: "Հաղորդագրություն...",
  sendBt: "ՈՒղարկել",
  footLevel: "Front-end Ծրագրավորող",
  more: "Ավելին",
  fontSize: "10px",
  taskName: "Հեռախոսահամարների գիրք",
  taskAdd: "Ավելացնել",
  taskEdit: "Պահպանել",
  taskEditClose: "Փակել",
  taskInputName: "Անուն",
  taskLastName: "Ազգանուն",
  taskPhoneNumber: "Հեռախոսահամար",
  edit: "Խմբագրել",
})

  
 
  const langClick = () =>{
    if(localStorage.getItem("lang")== "arm"){
      localStorage.setItem("lang", "eng")
    }
    else{
      localStorage.setItem("lang", "arm")
    }
    if(localStorage.getItem("lang")=="arm"){
      setLang({
        logo: "ԴԱՎ",
        burgName: "Դավիթ",
        burgLastName: "Բալաբեկյան",
        home: "Գլխավոր",
        about: "Իմ մասին",
        aboutMe: "Ես սկսնակ Front-end ծրագրավորող եմ։ Ես ծրագրավորում սովորել եվ ավարտել եմ Smart Technology ծրագրավորման դպրոցը։ Ես կարողանում եմ արագ սովորել, լավ աշխատել թիմում, պատրաստ եմ աշխատել և փորձ ձեռք բերել։",
        skills: "Հմտություն",
        work: "Աշխատանք",
        contact: "Կապ",
        homeName: "Ողջույն ես Դավիթն եմ",
        downBt: "Ներբեռնել CV",
        inputName: "Անուն",
        inputEmail: "Էլ․ Հասցե",
        inputMessage: "Հաղորդագրություն...",
        sendBt: "ՈՒղարկել",
        footLevel: "Front-end Ծրագրավորող",
        more: "Ավելին",
        fontSize: "10px",
        taskName: "Հեռախոսահամարների գիրք",
        taskAdd: "Ավելացնել",
        taskEdit: "Պահպանել",
        taskEditClose: "Փակել",
        taskInputName: "Անուն",
        taskLastName: "Ազգանուն",
        taskPhoneNumber: "Հեռախոսահամար",
        edit: "Խմբագրել",
        lang: false
      })
    
    }
    else{
      setLang({
        logo: "DAV",
        burgName: "David",
        burgLastName: " Balabekyan",
        home: "Home",
        about: "About",
        aboutMe: "I am a beginner Front-End programmer. I have been programming and graduated from Smart Technology Programming School.I'm able to learn quickly, work well in the team, ready to work and get experience.",
        skills: "Skills",
        work: "Work",
        contact: "Contact",
        homeName: "Hello I am David",
        downBt: "Download CV",
        inputName: "Name",
        inputEmail: "e-mail",
        inputMessage: "Message...",
        sendBt: "Send",
        footLevel: "Front-end Developer",
        more: "More",
        taskName: "PhoneBook",
        taskAdd: "Add",
        taskEdit: "Save",
        taskEditClose: "Close",
        taskInputName: "Name",
        taskLastName: "Last Name",
        taskPhoneNumber: "Phone Number",
        edit: "Edit",
        lang: true
      })
      
    }
  }
  
    const dd=(e)=>{
        e.preventDefault();
        const add=Array.from(new FormData(e.target))
        
           const obj = [{
                name: add[0][1],
                email: add[1][1],
                message: add[2][1]
            }]
            setForm(obj) 
        }
  return(
    <main className="main">
      <Header open = {open} setOpen = {setOpen} lang={lang} langClick={langClick} fon={fon} setFon={setFon}/>
      <About lang={lang} fon={fon}/>
      <Skill lang={lang} fon={fon}/>
      <Work lang={lang} fon={fon}/>
      <Contact send={dd} lang={lang} fon={fon}/>
      <Footer lang={lang} langClick={langClick}/>

    </main>
  )
}
