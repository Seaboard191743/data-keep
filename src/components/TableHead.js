import React from "react";
import "./tablehead.css";

const TableHead = () => {
    return (
        <div className = "tableHead">
            <h3 className = "tableHead__heading">Name</h3>
            <h3 className = "tableHead__heading">Job</h3>
            <h3 className = "tableHead__heading">Remove</h3>
        </div>
    )
}
export default TableHead;