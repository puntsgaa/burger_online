import React, { useState,useEffect } from 'react'
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
const LoginPage = (props) =>{
    const [form, setUser] = useState({email:"",password:""});
    const login = () =>{
        props.loginUser(form.email,form.password);
    }

    const emailChange = (e) => {
        const newEmail = e.target.value;
        setUser((formBefore) => ({email:newEmail,password:formBefore.password}));
    };

    const passChange = (e) => {
        const changePassword = e.target.value;
        setUser((formBefore) => ({email:formBefore.email,password:changePassword}));
    };
        return (
            <div className={css.Login}>
                { props.userId && <Redirect to="/orders"/> }
                <input type="text" onChange={emailChange} placeholder="емэйл хаяг" />
                <input type="password" onChange={passChange} placeholder="нууц үг" />
                { props.loading && <Spinner /> }
                { props.error && <div className={css.Error}>{ props.error }</div>}
                <Button text="Нэвтрэх" btntype="Success" function={login} />
            </div>
        );
    }
const mapStateToProps = (state) => {
    return{
        loading: state.SignupReducer.logginIn,
        error: state.SignupReducer.error,
        userId: state.SignupReducer.userid
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loginUser: (email , password) => dispatch(actions.login(email , password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
