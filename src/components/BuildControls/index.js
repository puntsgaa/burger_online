import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";
const BuildControls = (props) => {
    
    return (<div className={css.BuildControls}>
    <p>Бургер үнэ : <strong>{props.price}</strong></p>
    {Object.keys(props.controls).map(el =>(
            <BuildControl 
            key = {el}
            disabled={props.disabledIngredients} 
            addIngredient={props.addIngredient} 
            removeIngredient={props.removeIngredient} 
            type={el} 
            orts={props.controls[el]}/>
      ))
     }
      <button 
         disabled={props.disabled} 
         onClick={props.showConfirmModal} 
         className={css.OrderButton}>
            Захиалах
      </button>
      </div>
   );
}
export default BuildControls;