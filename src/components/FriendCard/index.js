import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">

      </div>
      <span onClick={() => props.handleClick(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
