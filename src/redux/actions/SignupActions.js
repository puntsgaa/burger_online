import axios from "../../axios-orders";
export const SignupUser = (email , password1) =>{
    return function (dispatch){
        dispatch(SignupUserStart());
        const data = {
            email: email,
            password: password1, 
            returnSecureToken:true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArBiUpT4tx-g9WtRgMkMH1ydpcErhC-Ec",data)
        .then(result =>{
            dispatch(SignupUserSuccess(result.data));
        })
        .catch(err =>{    
            dispatch(SignupUserFail(err));
        });
    };
};

export const SignupUserStart = () =>{
    return{
        type: "SIGNUP_USER_START"
    };
};

export const SignupUserSuccess = (result) =>{
    return{
        type: "SIGNUP_USER_SUCCESS",
        payload: result
    };
};

export const SignupUserFail = (err) =>{
    return{
        type: "SIGNUP_USER_FAIL",
        payload: err.response.data.error.message
    };
};

export const Logout = () => {
    return{
        type: "LOGOUT"
    };
};
