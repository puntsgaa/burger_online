import React, { useContext } from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";
//import { connect } from "react-redux";
//import * as actions from "../../redux/actions/burgerActions";
import BurgerContext from "../../context/BurgerContext";
const BuildControls = (props) => {
   const burgerContext = useContext(BurgerContext);
   const disabledIngredients = { ...burgerContext.burger.ingredients }
        for (var key in disabledIngredients) {
          if (disabledIngredients[key] <= 0) {
            disabledIngredients[key] = true;
          }
          else {
            disabledIngredients[key] = false;
          }
        }

    return (<div className={css.BuildControls}> 
    <p>Бургер үнэ : <strong>{burgerContext.burger.total_price}</strong></p>
    {Object.keys(burgerContext.burger.controls).map(el =>(
            <BuildControl 
            key = {el}
            disabled={disabledIngredients} 
            /*addIngredient={props.addIngredient} 
            removeIngredient={props.removeIngredient}*/ 
            type={el} 
            orts={burgerContext.burger.controls[el]}/>
      ))
     }
      <button 
         disabled={!burgerContext.burger.purchaseing} 
         onClick={props.showConfirmModal} 
         className={css.OrderButton}>
            Захиалах
      </button>
      </div>
   );
}
export default BuildControls;
/*const mapStateToProps = state => {
   return {
     ingredients: state.burgerReducer.ingredients,
     price: state.burgerReducer.total_price,
     disabled: state.burgerReducer.purchaseing,
     controls: state.burgerReducer.controls
   };
 };

 const mapDispatchToProps = dispatch => {
   return {
      addIngredient : ortsNer => dispatch(actions.addIngredient(ortsNer)),
      removeIngredient : ortsNer => dispatch(actions.removeIngredient(ortsNer))
   };
 };
 
export default connect(mapStateToProps,mapDispatchToProps)(BuildControls);*/