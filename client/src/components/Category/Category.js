import React from "react";
import "./Category.css";

const Category = props => (
    <div className={props.category}>
        <strong>{props.category}</strong>
        {props.products}
    </div>
);

export default Category;