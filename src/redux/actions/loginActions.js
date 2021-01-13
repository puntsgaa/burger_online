import axios from "../../axios-orders";
export const login = (email, password) => {
    return function(dispatch){
        dispatch(loginStart());
        const data = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArBiUpT4tx-g9WtRgMkMH1ydpcErhC-Ec",data)
        .then(result => {
                dispatch(loginSuccess(result.data));
        })
        .catch(err =>{
                dispatch(loginFail(err));
        });
    };
};

export const loginStart = () => {
    return{
        type: "LOGIN_START",
    }
};

export const loginSuccess = (result) => {
    return{
        type: "LOGIN_SUCCESS",
        payload: result
    }
}

export const loginFail = (error) => {
    return{
        type: "LOGIN_FAIL",
        payload: error.response.data.error.message
    }
}