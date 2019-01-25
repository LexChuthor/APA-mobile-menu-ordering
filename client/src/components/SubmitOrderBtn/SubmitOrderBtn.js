import React from "react";
import "./SubmitOrderBtn.css";

const SubmitOrderBtn = (props) => {
    return (
        <span className="submit-order" onClick={props.handleClick} role="button"> 
            Submit Order
        </span>
    )
}

export default SubmitOrderBtn;