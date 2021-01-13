import axios from "../../axios-orders";
export const loadOrders = () =>{
    return function (dispatch) {
        //Loading start
        dispatch(loadStart());
         axios
            .get("/orders.json")
            .then(response => {
                dispatch(loadSuccess(Object.entries(response.data).reverse()));
            }).catch(err => dispatch(loadFail(err)));
    };  
};


export const loadStart = () =>{
  return{
      type: "LOAD_ORDERS_START"
  };
};

export const loadSuccess = (orders) => {
    return{
        type: "LOAD_ORDERS_SUCCESS",
        payload: orders
    };
};

export const loadFail = (error) =>{
    return{
        type: "LOAD_ORDERS_FAIL",
        errorpayload: error
    };
};
//Захиалгыг хадгалах хэсэг
export const saveOrder = (newOrder) =>{
   return function(dispatch){
         dispatch(orderSaveStart());
         axios
            .post("/orders.json", newOrder)
            .then(response => {
              dispatch(orderSuccess());
            })
            .catch((error) => {
             dispatch(orderFail(error));
            });
   };
};

export const orderSaveStart = () =>{
    return{
        type: "SAVE_ORDER_START"
    };
};

export const orderSuccess = () =>{
    return{
        type: "SAVE_ORDER_SUCCESS"
    };
};

export const orderFail = (error) =>{
    return{
        type: "SAVE_ORDER_FAIL",
        error: error
    };
};