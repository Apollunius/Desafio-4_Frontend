import React from "react";
import "./style.css";

export function ButtonPrimary(props) {
  return (
    <button
      className="padrao"
      id={props.id}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export function ButtonSecundary(props) {
  return (
    <button
      className="padrao2"
      id={props.id}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}