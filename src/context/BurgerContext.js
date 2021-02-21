import React, { useState } from "react";
import axios from "../axios-orders";
const BurgerContext =  React.createContext();

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
      },
      total_price: 1000,
      purchaseing: false,
      controls : {
        bacon: 'Гахайн мах',
        cheese: 'Бяслаг',
        meat: 'Үхрийн мах',
        salad: 'Салад'
      },
      saving: false,
      finished: false
}
const ingredient_prices = {
    salad: 150,
    cheese: 250,
    bacon: 800,
    meat: 1500
}
export const BurgerStore = (props) => {
    const [burger, setBurger] = useState(initialState);
    const addIngredient = (orts) =>{
        setBurger({...burger, 
                  ingredients:{ ...burger.ingredients, [orts]: burger.ingredients[orts] + 1 },
                  total_price: burger.total_price + ingredient_prices[orts],
                  purchaseing: true
                  });
    };

    const removeIngredient = (orts) =>{
        const newPrice = burger.total_price - ingredient_prices[orts];
        setBurger({...burger, 
                  ingredients:{ ...burger.ingredients, [orts]: burger.ingredients[orts] - 1 },
                  total_price: newPrice,  
                  purchaseing: newPrice > 1000 ? true : false
                  });
    };

    const saveOrder = (newOrder) =>{
         setBurger({...burger,saving: true});
            axios
                 .post(`/orders.json`, newOrder)
                 .then(response => {
                    setBurger({...burger,saving: false, finished: true, error: null});
                 })
                 .catch((error) => {
                    setBurger({...burger,saving: false, finished: true, error: error});
                 });
     };

     const clearBurger = () => {
         setBurger(initialState);
     }

    return (
        <BurgerContext.Provider value={{burger,addIngredient,removeIngredient,saveOrder,clearBurger}}>
            {props.children}
        </BurgerContext.Provider>
    );
};

export default BurgerContext;