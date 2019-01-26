import React from "react";
import "./OrderCard.css";


const OrderCard = props => (
    <div className="card">
        <strong>{props.orderName}</strong>
        <div className="items-ordered">
            <ul>
                {props.items.map((item, i) => (
                    <li key={i}>
                        {i + 1}: {props.translateOrder(item, props.products)}
                    </li>
                ))}
            </ul>
        </div>
        {props.children}
    </div>
)

export default OrderCard;