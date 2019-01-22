import React from "react";
import "./TotalBar.css";

const TotalBar = props => (
    <li className="list-group-item" style={{bottom: 0}}>
    <span>Total: </span><span style={{float: 'right'}}>${props.total}</span></li>
);

export default TotalBar;