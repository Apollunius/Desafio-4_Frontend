import React from "react";
import "./style.css";

export function Button(props) {
  return (
    <button
      className={props.name === "primary" ? "padrao" : "padrao2"}
      id={props.id}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
