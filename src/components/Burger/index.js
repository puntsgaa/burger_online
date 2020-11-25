import React from "react";
import BurgerIngredient from "../Burgeringredient";
import css from './style.module.css';
function Burger(props){
    const items = Object.entries(props.ingredients);
    var content = [];
    items.forEach(ingred => {
        for(var i=0;i < ingred[1];i++){
            content.push(<BurgerIngredient key={`${ingred} ${i}`} type={ingred[0]}/>)
        }
    });
    if(content.length === 0)
    content = <p>Хачиртай талхны орц сонгоно уу.</p>;
    return(
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
            {content}
            {}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
} 

export default Burger;