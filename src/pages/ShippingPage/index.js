import React, { Component } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Contact from "../../components/Contact";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
export class ShippingPage extends Component {
    cancelOrder = () => {
        this.props.history.goBack();
    }

    fillContactData = () =>{
        this.props.history.replace("/ship/contact");
    }

    render() {
        return <div className={css.ShippingPage}>
            <p style={{fontSize:"18px"}}><strong>Таны захиалга амттай байх болно гэж найдаж байна.</strong></p> 
            <p style={{fontSize:"18px"}}><strong>Нийт үнэ:{this.props.total_price} ₮</strong></p>
            <Burger/>
            <Button function={this.cancelOrder} btntype="Danger" text="Захиалга цуцлах" />
            <Button function={this.fillContactData} btntype="Success" text="Хүргэлтийн мэдээлэл оруулах" />
            <Route path="/ship/contact">
                <Contact/>
            </Route>
        </div>;
    }
}

const mapStateToProps = (state) =>{
    return{
        total_price: state.total_price
    }
}

export default connect(mapStateToProps)(ShippingPage)