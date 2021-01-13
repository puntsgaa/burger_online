import React, { Component } from "react";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from '../../components/General/Spinner';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";
class Contact extends Component{
    state={
        total_price:0,
        city:null,
        name:null,
        street:null
    }

    changeName = (e) =>{
        this.setState({name: e.target.value});
    }

    changeStreet = (e) =>{
        this.setState({street: e.target.value});
    }

    changeCity = (e) =>{
        this.setState({city: e.target.value});
    }

    componentDidUpdate() {
      if(this.props.newOrderStatus.finished === true && this.props.newOrderStatus.error === null){
        this.props.history.replace("/orders");
      }
    };

    saveOrder = () =>{
      const order = {
            userid: this.props.userId,
            ingredients: this.props.ingredients,
            total_price: this.props.total_price,
            address: {
              name: this.state.name,
              city: this.state.city,
              street: this.state.street
            }
          }
          this.props.saveOrderAction(order);
    }

    render(){
        return(
            <div className={css.Contact}>
                Нийт үнэ: {this.props.total_price}
                <div>{this.props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа : " ${this.props.newOrderStatus.error}`}</div>
                {this.props.newOrderStatus.saving ? <Spinner/> : (<div>
                <input onChange={this.changeName} type="text" name="name" placeholder="Таны нэр"/>
                <input onChange={this.changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг"/>
                <input onChange={this.changeCity} type="text" name="city" placeholder="Хот"/>
                <Button function={this.saveOrder} text="Захиалга илгээх" btntype="Success"/>
                </div>)}
            </div>
         );
        }
    }

const mapStateToProps = (state) => {
  return{
    total_price: state.burgerReducer.total_price,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.SignupReducer.userid
  };
} ;

const mapDispatchToProps = (dispatch) =>{
  return{
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Contact));