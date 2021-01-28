const initialState = {
    loading: false,
    logginIn: false,
    error: "",
    token: null,
    userid: null
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case "SIGNUP_USER_START":
            return{
                ...state,
                loading: true
            };
        case "SIGNUP_USER_SUCCESS":
            return{
                ...state,
                loading: false,
                token: action.token,
                userid: action.userId
            };
        case "SIGNUP_USER_FAIL":
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        case "LOGIN_START":
            return{
                ...state,
                logginIn: true
            };
        case "LOGIN_SUCCESS":
            return{
                ...state,
                logginIn: false,
                token: action.token,
                userid: action.userId
            };
        case "LOGIN_FAIL":
            return{
                ...state,
                logginIn: false,
                error: action.payload
            };
        case "LOGOUT":
            return{
                ...state,
                token: null,
                userid: null,
                error: null
            };
         default:return state;
    };
};

export default reducer;