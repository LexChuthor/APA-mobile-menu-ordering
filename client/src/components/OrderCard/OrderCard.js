import React from "react";
import "./OrderCard.css";


const OrderCard = props => (
    <div className="card">
        <span>{props.orderName}</span>
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