import React, { useState } from "react";
import axios from "../axios-orders";
const OrderContext =  React.createContext();

const initialState = {
      error: null,
      orders: [],
      loading: false,
};
export const OrderStore = (props) => {
    const [state, setState] = useState(initialState);
    const loadOrders = (userId) =>{
            setState({...state,loading: true});
            axios
                .get(`orders.json?&orderBy="userid"&equalTo="${userId}"`)
                .then(response => {
                    setState({...state,loading: false,orders: Object.entries(response.data).reverse()})
                }).catch(err => setState({...state,loading: false,orders:err}));
        };  

    return (
        <OrderContext.Provider value={{state,loadOrders}}>
            {props.children}
        </OrderContext.Provider>
    );
};

export default OrderContext;