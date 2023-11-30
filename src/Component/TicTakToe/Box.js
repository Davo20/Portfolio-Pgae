import React from "react";

export default function Box (props){
    return(
        <div onClick={props.onClick}>{props.value}</div>
    )
}