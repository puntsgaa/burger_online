import React, { useEffect,useContext } from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import { connect } from "react-redux";
//import * as actions from "../../redux/actions/orderActions";
import OrderContext from "../../context/OrderContext";
const OrderPage = (props) => {
    const context = useContext(OrderContext)
    useEffect(() => {
        context.loadOrders(props.userid);
    }, []);
        
    return <div>
            {context.state.loading ?
            (<Spinner />) : (
                context.state.orders.map((el) => {
                    return <Order key={el[0]} order={el[1]} />;
                }))
        }</div>;
}

const mapStateToProps = (state) =>{
    return{
        //orders: state.orderReducer.orders,
        //loading: state.orderReducer.loading,
        userid: state.SignupReducer.userid
    };
};

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         loadOrder: (userid) => dispatch(actions.loadOrders(userid))
//     };
// };

export default connect(mapStateToProps,null)(OrderPage);