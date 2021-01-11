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
      }
}
const ingredient_prices = {
    salad: 150,
    cheese: 250,
    bacon: 800,
    meat: 1500
  }
const reducer = (state = initialState,action) =>{
    if(action.type === "ADD_INGREDIENT"){
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.nemehOrts]: state.ingredients[action.nemehOrts] + 1 
            },
            total_price: state.total_price + ingredient_prices[action.nemehOrts],
            purchaseing: true,        
        }
    }
    else if (action.type === "REMOVE_INGREDIENT"){
        const newPrice = state.total_price - ingredient_prices[action.hasahOrts];
        return {
            ...state, 
            ingredients: {
                ...state.ingredients,
                [action.hasahOrts]: state.ingredients[action.hasahOrts] - 1 
            },
            total_price: newPrice,  
            purchaseing: newPrice > 1000 ? true : false,
        }
    }
    return state;
}

export default reducer;