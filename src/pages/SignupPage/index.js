import React, { useState,useEffect } from 'react'
import { connect } from "react-redux";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/SignupActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
const SignupPage = (props) => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");
    const [validate, setValidEmail] = useState(false);

    useEffect(() => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(pattern.test(email)){
            setValidEmail((beforeState) => !beforeState);
        }
        console.log("validate is:" + validate);
    }, [email])


    const Signup = () =>{
        if(password1 === password2){
            props.singupUser(email,password1);
        }
        else if(password1 !== password2){
            setError("Нууц үг хоорондоо таарахгүй байна.");
      }
    }

        return (
            <div className={css.Signup}>
                { props.userid && <Redirect to="/"/> }
                <h1>Бүртгэлийн форм</h1>
                <div>Та бүртгэлийн мэдээлэлээ оруулна уу</div>
                <input type="text" onChange={e => setEmail(e.target.value)} placeholder="емэйл хаяг" />
                <input type="password" onChange={e => setPassword1(e.target.value)} placeholder="нууц үг" />
                <input type="password" onChange={e => setPassword2(e.target.value)} placeholder="нууц үг давтах" />
                { error && <div className={css.Error}>{error}</div> }
                { props.loading && <Spinner/> }
                { props.error && <div className={css.Error}>{props.error}</div> }
                <Button text="Бүртгүүлэх" btntype="Success" function={Signup} />
            </div>
        );
    }
const mapStateToProps = (state) => {
    return{
        loading: state.SignupReducer.loading,
        error: state.SignupReducer.error,
        userid: state.SignupReducer.userid
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        singupUser: (email , password1) => dispatch(actions.SignupUser(email , password1))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupPage);
