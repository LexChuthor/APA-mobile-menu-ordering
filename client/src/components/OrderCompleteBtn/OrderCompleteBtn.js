import React from "react";

const OrderCompleteBtn = props => {
    return (
        <span className="change-complete" {...props} role="button" tabIndex="0">
            ✗ Mark Order Complete
        </span>
    );
}

export default OrderCompleteBtn;