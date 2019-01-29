import React from "react";
import "./SubmitOrderBtn.css";

const SubmitOrderBtn = (props) => {
    return (
        <button className="submit-order" onClick={props.handleClick}> 
            Submit Order
        </button>
    )
}

export default SubmitOrderBtn;