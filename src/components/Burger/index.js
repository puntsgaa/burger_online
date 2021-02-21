import React, { useContext } from "react";
import BurgerIngredient from "../Burgeringredient";
import css from './style.module.css';
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import BurgerContext from "../../context/BurgerContext";
const Burger = (props) => {
    const burgerContext = useContext(BurgerContext)
    const items = Object.entries(burgerContext.burger.ingredients);
    var content = [];
    items.forEach(ingred => {
        for (var i = 0; i < ingred[1]; i++) {
            content.push(<BurgerIngredient key={`${ingred} ${i}`} type={ingred[0]} />)
        }
    });
    if (content.length === 0)
        content = <p>Хачиртай талхны орц сонгоно уу.</p>;
    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {content}
            {}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

// const mapStateToProps = (state) =>{
//     return{
//         ingredients: state.burgerReducer.ingredients
//     }
// }

//export default connect(mapStateToProps)(withRouter(Burger));
export default Burger;