import React from "react";
import "./EduCard.css";

export default function EduCard(props) {
  return (
    <div className="EduCard">
      <img src={props.logo} />
      <h1 className="institution">{props.name}</h1>
      <p className="major">{props.major}</p>
    </div>
  );
}
