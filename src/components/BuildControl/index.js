import React, { useContext } from "react";
import css from "./style.module.css"; 
import BurgerContext from "../../context/BurgerContext";
const BuildControl = props => {
const burgerContext = useContext(BurgerContext)
return(
<div className={css.BuildControl}> 
    <div className={css.label}>{props.orts}</div>
    <button 
            disabled={props.disabled[props.type]} 
            onClick={() => burgerContext.removeIngredient(props.type)} 
            className={css.less}>
                Хасах
    </button>
    <button 
            onClick={() => burgerContext.addIngredient(props.type)} 
            className={css.more}>
                Нэмэх
    </button>
</div>
)
};

export default BuildControl;