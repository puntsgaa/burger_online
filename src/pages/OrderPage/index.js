import React, { Component } from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";
class OrderPage extends Component {

    componentDidMount = () => {
        // this.setState({ loading: true });
        // axios
        //     .get("/orders.json")
        //     .then(response => {
        //         if (response.data) {
        //             this.setState({ orders: Object.entries(response.data).reverse() });
        //         }
        //     }).catch(err => console.log(err)).finally(() => {
        //         this.setState({ loading: false })
        //     });
        this.props.loadOrder();
    }
    render() {
        return <div>{this.props.loading ?
            (<Spinner />) : (
                this.props.orders.map((el) => {
                    return <Order key={el[0]} order={el[1]} />;
                }))
        }</div>;
    }
}

const mapStateToProps = (state) =>{
    return{
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        loadOrder: () => dispatch(actions.loadOrders())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(OrderPage);