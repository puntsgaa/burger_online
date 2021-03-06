const initialState = {
        orders: [],
        loading: false,
        newOrder:{
            saving: false,
            finished: false,
            error: null
        }
};

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case "CLEAR_ORDER" : return{
            ...state,
            newOrder:{
                saving: false,
                finished: false,
                error: null
            }    
        };
        case "LOAD_ORDERS_START" : return{
            ...state,
            loading: true
        };
        case "LOAD_ORDERS_SUCCESS" : return{
            ...state,
            loading: false,
            orders: action.payload
        };
        case "LOAD_ORDERS_FAIL" : return{
            ...state,
            loading: false,
            orders: action.errorpayload
        };
        case "SAVE_ORDER_START" : return{
            ...state,
            newOrder:{
                ...state.newOrder,
                saving: true
            }
        };
        case "SAVE_ORDER_SUCCESS" : return{
            ...state,
            newOrder:{
                ...state.newOrder,
                saving: false,
                finished: true,
                error: null,
            }
        };
        case "SAVE_ORDER_FAIL" : return{
            ...state,
            newOrder:{
                ...state.newOrder,
                saving: false,
                finished: true,
                error: action.error,
            }
        };
        default: return state;
    };
};

export default reducer;