import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
const BuildControls = (props) => {
    
   const disabledIngredients = { ...props.ingredients }
        for (var key in disabledIngredients) {
          if (disabledIngredients[key] <= 0) {
            disabledIngredients[key] = true;
          }
          else {
            disabledIngredients[key] = false;
          }
        }

    return (<div className={css.BuildControls}>
    <p>Бургер үнэ : <strong>{props.price}</strong></p>
    {Object.keys(props.controls).map(el =>(
            <BuildControl 
            key = {el}
            disabled={disabledIngredients} 
            addIngredient={props.addIngredient} 
            removeIngredient={props.removeIngredient} 
            type={el} 
            orts={props.controls[el]}/>
      ))
     }
      <button 
         disabled={!props.disabled} 
         onClick={props.showConfirmModal} 
         className={css.OrderButton}>
            Захиалах
      </button>
      </div>
   );
}

const mapStateToProps = state => {
   return {
     ingredients: state.ingredients,
     price: state.total_price,
     disabled: state.purchaseing,
     controls: state.controls
   };
 };

 const mapDispatchToProps = dispatch => {
   return {
      addIngredient : ortsNer => dispatch(actions.addIngredient(ortsNer)),
      removeIngredient : ortsNer => dispatch(actions.removeIngredient(ortsNer))
   };
 };
 
export default connect(mapStateToProps,mapDispatchToProps)(BuildControls);