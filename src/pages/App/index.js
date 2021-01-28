import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';
import OrderPage from "../OrderPage";
import { Route, Switch } from 'react-router-dom';
import ShippingPage from '../ShippingPage';
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import { connect } from "react-redux";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginActions";
import * as signActions from "../../redux/actions/SignupActions";
class App extends Component {
  state = {
    showSiderBar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSiderBar: !prevState.showSiderBar }
    });
  }


  
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));

    if(token){
      if(expireDate > new Date()){
        this.props.autoLogin(token,userId);
        this.props.autoLogout(expireDate.getTime() - new Date().getTime());
      }
      else{
       this.props.logout(); 
      }
    }
  }

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSiderBar={this.state.showSiderBar} toggleSideBar={this.toggleSideBar} />
        <main className={css.Content}>
          <center>UserID : {this.props.userid}</center>
          { this.props.userid ? (
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/orders" component={OrderPage} />
                <Route path="/ship" component={ShippingPage} />
                <Route path="/" component={BurgerPage} />
              </Switch>
          ):
          (
               <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Redirect to="/login" />
              </Switch>
          )
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    userid: state.SignupReducer.userid,
    token: state.SignupReducer.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    autoLogin: (token,userId) => dispatch(actions.loginSuccess(token,userId)),
    logout: () => dispatch(signActions.Logout()),
    autoLogout: (sek) => dispatch(signActions.AutoLogout(sek))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
