import React, { useState,useEffect,Suspense } from 'react';
import { Redirect } from "react-router-dom";
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import SideBar from '../../components/SideBar';
import { Route, Switch } from 'react-router-dom';
import ShippingPage from '../ShippingPage';
import LoginPage from "../LoginPage";
import { connect } from "react-redux";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginActions";
import * as signActions from "../../redux/actions/SignupActions";
import { BurgerStore } from "../../context/BurgerContext";
import { OrderStore } from "../../context/OrderContext";
const BurgerPage = React.lazy(() =>{
  return import("../BurgerPage");
})

const OrderPage = React.lazy(() =>{
  return import("../OrderPage");
})

const SignupPage = React.lazy(() =>{
  return import("../SignupPage");
})


const App = (props) => {
  const [showSiderBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar((beforeState) => !beforeState);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));

    if(token){
      if(expireDate > new Date()){
        props.autoLogin(token,userId);
        props.autoLogout(expireDate.getTime() - new Date().getTime());
      }
      else{
       props.logout(); 
      }
    }
  }, []);

    return (
      <div>
        <Toolbar toggleSideBar={toggleSideBar} />
        <SideBar showSiderBar={showSiderBar} toggleSideBar={toggleSideBar} />
        <main className={css.Content}>
        <BurgerStore>
          <Suspense fallback={<div>Түр хүлээнэ үү....</div>}>
          <center>UserID : {props.userid}</center>
          { props.userid ? (
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/orders">
                  <OrderStore>
                    <OrderPage/>
                  </OrderStore>
                </Route>
                <Route path="/ship" component={ShippingPage} />
                <Route path="/" component={BurgerPage}/>
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
          </Suspense>
          </BurgerStore>
        </main>
      </div>
    );
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
