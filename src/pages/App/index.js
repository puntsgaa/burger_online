import React, { Component } from 'react';
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
class App extends Component {
  state = {
    showSiderBar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSiderBar: !prevState.showSiderBar }
    });
  }
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSiderBar={this.state.showSiderBar} toggleSideBar={this.toggleSideBar} />
        <main className={css.Content}>
           <center>Userid : { this.props.userid }</center> 
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    userid: state.SignupReducer.userid,
    token: state.SignupReducer.token
  }
}

export default connect(mapStateToProps)(App);
