import React from "react";
import BurgerIngredient from "../Burgeringredient";
import css from './style.module.css';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
function Burger(props) {
    const items = Object.entries(props.ingredients);
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

const mapStateToProps = (state) =>{
    return{
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(withRouter(Burger));