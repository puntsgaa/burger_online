import React, { Component } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Contact from "../../components/Contact";
import { Route } from "react-router-dom";
export class ShippingPage extends Component {
    state = {
        ingredients: {},
        total_price: 0
    };
    componentDidMount() {
        const orts = {};
        const query = new URLSearchParams(this.props.location.search);
        let total_price = 0;
        for (let param of query.entries()) {
            if(param[0]!=="total_price") orts[param[0]] = param[1];
            else total_price = param[1];
        }
        this.setState({ ingredients: orts, total_price: total_price });
    }

    cancelOrder = () => {
        this.props.history.goBack();
    }

    fillContactData = () =>{
        this.props.history.replace("/ship/contact");
    }

    render() {
        return <div className={css.ShippingPage}>
            <p style={{fontSize:"18px"}}><strong>Таны захиалга амттай байх болно гэж найдаж байна.</strong></p> 
            <p style={{fontSize:"18px"}}><strong>Нийт үнэ:{this.state.total_price} ₮</strong></p>
            ]<Burger ingredients={this.state.ingredients} />
            <Button function={this.cancelOrder} btntype="Danger" text="Захиалга цуцлах" />
            <Button function={this.fillContactData} btntype="Success" text="Хүргэлтийн мэдээлэл оруулах" />
            <Route path="/ship/contact">
                <Contact ingredients={this.state.ingredients} total_price={this.state.total_price}/>
            </Route>
        </div>;
    }
}