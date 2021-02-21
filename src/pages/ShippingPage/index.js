import React, { useContext } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Contact from "../../components/Contact";
import { Route } from "react-router-dom";
//import { connect } from "react-redux";
import BurgerContext from "../../context/BurgerContext";
const ShippingPage = (props) =>{
    const context = useContext(BurgerContext);
    const cancelOrder = () => {
        props.history.goBack();
    }

    const fillContactData = () =>{
        props.history.replace("/ship/contact");
    }
        return <div className={css.ShippingPage}>
            <p style={{fontSize:"18px"}}><strong>Таны захиалга амттай байх болно гэж найдаж байна.</strong></p> 
            <p style={{fontSize:"18px"}}><strong>Нийт үнэ:{context.burger.total_price} ₮</strong></p>
            <Burger/>
            <Button function={cancelOrder} btntype="Danger" text="Захиалга цуцлах" />
            <Button function={fillContactData} btntype="Success" text="Хүргэлтийн мэдээлэл оруулах" />
            <Route path="/ship/contact">
                <Contact/>
            </Route>
        </div>;
    }

// const mapStateToProps = (state) =>{
//     return{
//         total_price: state.burgerReducer.total_price
//     }
// }
//export default connect(mapStateToProps)(ShippingPage);
export default ShippingPage;