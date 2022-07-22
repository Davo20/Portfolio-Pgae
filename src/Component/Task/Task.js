import React, {useState, useEffect} from "react";
import Form from "./Form";
import Edit from "./Edit/Edit";
import {MdEdit, MdDone, MdClose} from "react-icons/md";
import "./task.scss";


if(!localStorage.getItem("id")){
    localStorage.setItem("id", 1)
}
if(!localStorage.getItem("todo")){
    localStorage.setItem("todo", JSON.stringify([]))
}
if(!localStorage.getItem("done")){
    localStorage.setItem("done", JSON.stringify([]))
}
export default function Task ({lang, fon}){
    const [task, setTask] = useState(JSON.parse(localStorage.getItem("todo")))
    const [edit, setEdit] = useState({open:false, editId:0})
    const [required, setRequired] = useState({reqName:false, reqLName:false, reqPNumber:false})
    
    const handleClick = (e)=>{
        e.preventDefault()
        const add = Array.from(new FormData(e.target))
        
        if(add[0][1] === ""){
            setRequired({reqName:true})
        }
        else if(add[1][1] === ""){
            setRequired({reqLName:true})
        }
        else if(add[3][1] === ""){
            setRequired({reqPNumber:true})
        }
        else if(add[0][1] === "" && add[1][1] === "" && add[3][1] === ""){
            setRequired({reqName:true, reqLName:true, reqPNumber:true})
        }
       else{
        setRequired({reqName:false, reqLName:false, reqPNumber:false})
           const arr = [
               {
                   id: localStorage.getItem("id"),
                   name: add[0][1],
                   lastName: add[1][1],
                   phoneNumber: add[2][1]+add[3][1]
               }
           ]
           localStorage.setItem("id", +localStorage.getItem("id")+1)
           localStorage.setItem("todo", JSON.stringify([...JSON.parse(localStorage.getItem("todo")),...arr]))
           // localStorage.setItem("todo", JSON.stringify([...JSON.parse(localStorage.getItem("todo"))], ...task))
           
           setTask(JSON.parse(localStorage.getItem("todo")))
           
        }
    }
    const editOpen = (e)=>{
        setEdit({open:true, editId:e.target.id})
        console.log(e.target.id)
    }
    const editClose = ()=>{
        setEdit({open:false})
    }
    const editSave = (e)=>{
        e.preventDefault()
        const editArr = []
        const editForm = [...Array.from(new FormData(e.target))]
        JSON.parse(localStorage.getItem("todo")).forEach((elem)=>{
            if(edit.editId == elem.id){

                elem.name= editForm[0][1]
                elem.lastName = editForm[1][1]
                elem.phoneNumber = editForm[2][1] + editForm[3][1]
            }
            // edit.editId = elem.id
            editArr.push(elem)
        })
        localStorage.setItem("todo", JSON.stringify(editArr))
        setTask(JSON.parse(localStorage.getItem("todo")))
        console.log(editForm)
    }
 
    const delClick = (e) =>{
            const data = JSON.parse(localStorage.getItem("todo")).filter((elem)=>{
                return e.target.id != elem.id
            })
            console.log(e.target.id)
            localStorage.setItem("todo", JSON.stringify(data))
            setTask(JSON.parse(localStorage.getItem("todo")))
    }
    return(
        <div className="task">
            <Form handleClick={handleClick} lang={lang} reqName={required.reqName} reqLName={required.reqLName} reqPNumber={required.reqPNumber}/>
            {edit.open && <div className="editCont">
                <div className={"editOpen " + (fon && "active")}>
            <Edit editClose={editClose} editSave={editSave} lang={lang} fon={fon}/>
                </div>
            </div>}
            <div className="addCont">
                <div className={"done " + (fon && "active")}>
                    <h2>{lang.taskName}</h2>
                    {task.map((elem)=>{
                        return (
                        <div key={Math.random()} className={"userCont " + (fon && "active")}>
                            <span>{elem.name}</span>
                            <span>{elem.lastName}</span>
                            <span>{elem.phoneNumber}</span>
                            <span className="iconcont">
                                <span className={"edit " + (fon && "active")}>
                                    <MdEdit onClick={editOpen} id = {elem.id}/>
                                </span>
                                <span className={"close " + (fon && "active")}>
                                    <MdClose onClick={delClick} id={elem.id} className="todo"/>
                                </span>
                            </span>
                        </div>
                        )
                    })}
                </div>
                
            </div>
            
        </div>
    )
}