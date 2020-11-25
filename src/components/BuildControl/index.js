import React from "react";
import css from "./style.module.css";

const BuildControl = props => (
<div className={css.BuildControl}> 
    <div className={css.label}>{props.orts}</div>
    <button 
            disabled={props.disabled[props.type]} 
            onClick={() => props.removeIngredient(props.type)} 
            className={css.less}>
                Хасах
    </button>
    <button 
            onClick={() => props.addIngredient(props.type)} 
            className={css.more}>
                Нэмэх
    </button>
</div>
);

export default BuildControl;