import React from "react";
import "./dataitem.css"

const DataItem = ({name, job, onClick}) => {
    return (
        <div className = "personInfo__item">
            <h4 className = "personInfo__heading">{name}</h4>
            <h4 className = "personInfo__heading">{job}</h4>
            <button className = "remove" onClick = {onClick}>Remove Item</button>
        </div>
    )
}

export default DataItem;