import React, { Component } from 'react'
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
class LoginPage extends Component {
    state = {
        email: "",
        password: ""
    };
    
    login = () =>{
        this.props.loginUser(this.state.email,this.state.password);
    }

    emailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    passChange = (e) => {
        this.setState({ password: e.target.value });
    };

    render() {
        return (
            <div className={css.Login}>
                { this.props.userId && <Redirect to="/orders"/> }
                <input type="text" onChange={this.emailChange} placeholder="емэйл хаяг" />
                <input type="password" onChange={this.passChange} placeholder="нууц үг" />
                { this.props.loading && <Spinner /> }
                { this.props.error && <div className={css.Error}>{ this.props.error }</div>}
                <Button text="Нэвтрэх" btntype="Success" function={this.login} />
            </div>
        )
    }
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
