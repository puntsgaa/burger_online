import React from 'react';
import css from './style.module.css';
import Button from '../General/Button';
const OrderSummary = props => {
    return(<div className={css}>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд</p>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li key={el}>{props.controls[el]}:{props.ingredients[el]}</li>
                )) }
            </ul>
                <p>Нийт үнэ: <strong>{props.total_price}₮</strong></p>
            <p>Цаашаа үргэлжлүүлэх үү?</p>
            <Button btntype="Danger" function={props.hideModal} text="Татгалзах"/>
            <Button btntype="Success" function={props.continueOrder} text="Үргэлжлүүлэх"/>
            </div>
    );
};

export default OrderSummary;