import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card"
  // onClick={() => props.handleMenuClick(props.id)}
  >
    <span>{props.name}:</span><span>{props.description}</span>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  
  </div>
);

export default Card;