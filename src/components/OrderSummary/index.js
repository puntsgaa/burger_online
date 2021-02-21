import React, { useContext } from 'react';
import css from './style.module.css';
import Button from '../General/Button';
//import { connect } from "react-redux";
import BurgerContext from "../../context/BurgerContext";
const OrderSummary = props => {
    const ctx = useContext(BurgerContext);
    return(<div className={css}>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд</p>
            <ul>
                {Object.keys(ctx.burger.ingredients).map(el => (
                    <li key={el}>{ctx.burger.controls[el]}:{ctx.burger.ingredients[el]}</li>
                )) }
            </ul>
                <p>Нийт үнэ: <strong>{ctx.burger.total_price}₮</strong></p>
            <p>Цаашаа үргэлжлүүлэх үү?</p>
            <Button btntype="Danger" function={props.hideModal} text="Татгалзах"/>
            <Button btntype="Success" function={props.continueOrder} text="Үргэлжлүүлэх"/>
            </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         ingredients: state.burgerReducer.ingredients,
//         controls: state.burgerReducer.controls,
//         total_price: state.burgerReducer.total_price
//     }
// }

//export default connect(mapStateToProps)(OrderSummary);
export default OrderSummary;