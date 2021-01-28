import axios from "../../axios-orders";
export const loadOrders = (userid) =>{
    return function (dispatch, getState) {
        //Loading start
        dispatch(loadStart());
        const token = getState().SignupReducer.token;
        axios
            .get(`orders.json?&auth=${token}&orderBy="userid"&equalTo="${userid}"`)
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
   return function(dispatch, getState){
         dispatch(orderSaveStart());
         const token = getState().SignupReducer.token;
         axios
            .post(`/orders.json?auth=${token}`, newOrder)
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