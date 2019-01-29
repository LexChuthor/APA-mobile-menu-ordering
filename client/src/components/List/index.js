import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item"><span style={{float: 'left'}}>{props.children}</span><span>{props.name}</span><span style={{float: 'right'}}>${props.price}</span></li>;
}
