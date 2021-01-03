import React, { Component } from "react";
import Button from "../General/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from '../../components/General/Spinner';
import { withRouter } from "react-router-dom";
class Contact extends Component{
    state={
        total_price:0,
        city:null,
        name:null,
        street:null,
        loading:false
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

    saveOrder = () =>{
      const order = {
            ingredients: this.props.ingredients,
            total_price: this.props.total_price,
            address: {
              name: this.state.name,
              city: this.state.city,
              street: this.state.street
            }
          }
          this.setState({ loading: true });
          axios
            .post("/orders.json", order)
            .then(response => {
              console.log("success");
            })
            .catch((error) => {
              console.log("failed: " + error);
            }).finally(() => {
                this.setState({ loading: false });
                this.props.history.replace("/orders");    
            });
    }

    render(){
        return(
            <div className={css.Contact}>
                Нийт үнэ: {this.props.total_price}
                {this.state.loading ? <Spinner/> : (<div>
                <input onChange={this.changeName} type="text" name="name" placeholder="Таны нэр"/>
                <input onChange={this.changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг"/>
                <input onChange={this.changeCity} type="text" name="city" placeholder="Хот"/>
                <Button function={this.saveOrder} text="Захиалга илгээх" btntype="Success"/>
                </div>)}
            </div>
         );
        }
    }
export default withRouter(Contact);