import React, { Component } from 'react'
import { connect } from "react-redux";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/SignupActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
class SignupPage extends Component {
    state = {
        email: "",
        password1: "",
        password2: "",
        error: ""
    };
    
    Signup = () =>{
        if(this.state.password1 === this.state.password2){
            this.props.singupUser(this.state.email,this.state.password1);
        }
        else if(this.state.password1 !== this.state.password2){
            this.setState({error:"Нууц үг хоорондоо таарахгүй байна."});
        }
    }

    emailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    passChange1 = (e) => {
        this.setState({ password1: e.target.value });
    };

    passChange2 = (e) => {
        this.setState({ password2: e.target.value });
    };


    render() {
        return (
            <div className={css.Signup}>
                { this.props.userid && <Redirect to="/"/> }
                <h1>Бүртгэлийн форм</h1>
                <div>Та бүртгэлийн мэдээлэлээ оруулна уу</div>
                <input type="text" onChange={this.emailChange} placeholder="емэйл хаяг" />
                <input type="password" onChange={this.passChange1} placeholder="нууц үг" />
                <input type="password" onChange={this.passChange2} placeholder="нууц үг давтах" />
                { this.state.error && <div className={css.Error}>{this.state.error}</div> }
                { this.props.loading && <Spinner/> }
                { this.props.error && <div className={css.Error}>{this.props.error}</div> }
                <Button text="Бүртгүүлэх" btntype="Success" function={this.Signup} />
            </div>
        )
    }
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
