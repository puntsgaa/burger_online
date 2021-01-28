import axios from "../../axios-orders";
import * as actions from "./SignupActions";
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
                const token = result.data.idToken;
                const userId = result.data.localId;
                const expiresIn = result.data.expiresIn;
                const refreshToken = result.data.refreshToken;
                const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
                localStorage.setItem('token',token);
                localStorage.setItem('userId',userId);
                localStorage.setItem('expireDate',expireDate);
                localStorage.setItem('refreshToken',refreshToken);
                dispatch(loginSuccess(token, userId));
                dispatch(actions.AutoLogout(expiresIn * 1000));
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

export const loginSuccess = (token, userId) => {
    return{
        type: "LOGIN_SUCCESS",
        token: token,
        userId: userId
    }
}

export const loginFail = (error) => {
    return{
        type: "LOGIN_FAIL",
        payload: error.response.data.error.message
    }
}