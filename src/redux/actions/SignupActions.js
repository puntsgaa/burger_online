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
            const token = result.data.idToken;
            const userId = result.data.localId;
            localStorage.setItem('token',token);
            localStorage.setItem('userId',userId);
            dispatch(SignupUserSuccess(token, userId));
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

export const SignupUserSuccess = (token, userId) =>{
    return{
        type: "SIGNUP_USER_SUCCESS",
        token: token,
        userId: userId
    };
};

export const SignupUserFail = (err) =>{
    return{
        type: "SIGNUP_USER_FAIL",
        payload: err.response.data.error.message
    };
};

export const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expireDate");
    localStorage.removeItem("refreshToken");
    return{
        type: "LOGOUT"
    };
};

export const AutoLogout = (sek) => {
    return function(dispatch){
        setTimeout(()=>{
            dispatch(Logout());
        },sek);  
    }
};
