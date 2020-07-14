import React from "react";
import DataItem from "./DataItem";


const DataList = ({data, onClick}) => {
    const person = data.map((item, i) => {
        const {name, job} = item
        return (
            <DataItem key = {i} name = {name} job = {job} onClick = {() => onClick(i)} />
        )
    })
    return (
        <div className = "personInfo-container">
            {person}
        </div>
    )
}

export default DataList;