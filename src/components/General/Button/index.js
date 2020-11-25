import React from "react";
import css from "./style.module.css";

const Button = props => <button onClick={props.function} className={`${css.Button} ${css[props.btntype]}`}>{props.text}</button>

export default Button;