export const addIngredient = ortsNer => {
 return{
     type: "ADD_INGREDIENT",
     nemehOrts: ortsNer
 };
};

export const removeIngredient = ortsNer => {
    return{
        type: "REMOVE_INGREDIENT",
        hasahOrts: ortsNer
    };
   };