import React from "react";
import "./Card.css";


const Card = props => (
  <div className="card" onClick={() => props.setClicked(props.id)}>
    <div className="img-container">
      <img src={props.image} alt={props.name} />
    </div>
  </div>
);

export default Card;