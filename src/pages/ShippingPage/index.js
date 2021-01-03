import React, { Component } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
export class ShippingPage extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    };
    componentDidMount() {
        const orts = {};
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            orts[param[0]] = param[1];
        }
        this.setState({ ingredients: orts });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return <div className={css.ShippingPage}>
            <Burger ingredients={this.state.ingredients} />
            <Button function={this.goBack} btntype="Danger" text="Захиалга цуцлах" />
        </div>;
    }
}