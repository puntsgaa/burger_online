import React from "react";
import css from "./style.module.css";
const controls = {
    bacon: 'Гахайн мах',
    cheese: 'Бяслагмаа',
    meat: 'Үхрийн мах',
    salad: 'Салад'
}
const Order = (props) => {
    const data = props.order.ingredients;
    const items = [];
    let index = 0;
    for (const property in data) {
        items.push(<p key={index}>{controls[property]} : {data[property]}</p>);
        index++;
    }
    return (<div className={css.Order}>
        {items.map((el) => el)}
        {/* <p>Орц : Гахайн мах : {props.order.ingredients.bacon} ,
        Салад : {props.order.ingredients.salad} , Бяслаг : {props.order.ingredients.cheese} ,
        Үхрийн мах : {props.order.ingredients.meat}</p> */}
        <p>Хаяг : {props.order.address.name} | {props.order.address.street} | {props.order.address.city} </p>
        <p>Үнийн дүн : {props.order.total_price}₮</p>
    </div>);
}

export default Order;