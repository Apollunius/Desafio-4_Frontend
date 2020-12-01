import React from "react";
import "./style.css";

function Input(props) {
  return (
    <label className="label">
      <div className="title">{props.title}</div>
      <input className="input" type={props.type} placeholder={props.placeholder} />

    </label>
  );
}

export default Input