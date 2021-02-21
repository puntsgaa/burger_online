import React, { useEffect,useState,useRef,useContext } from "react";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from '../../components/General/Spinner';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import * as actions from "../../redux/actions/orderActions";
import BurgerContext from "../../context/BurgerContext";
const Contact = (props) =>{
    const ctx = useContext(BurgerContext)
    const [city, setCity] = useState(null);
    const [name, setName] = useState(null);
    const [street, setStreet] = useState(null);
    //const [total_price, setTotalPrice] = useState(0);
    const dunRef = useRef();
    useEffect(() => {
      if(ctx.burger.finished === true && ctx.burger.error === null){
        props.history.replace("/orders");
      }
      return () =>{
        ctx.clearBurger();
      }
    },[ctx.burger.finished]);
    
    const changeName = (e) =>{
      if(dunRef.current.style.color === 'red') 
      dunRef.current.style.color = "green";
      else dunRef.current.style.color = "red";
      setName(e.target.value);
    }

    const changeStreet = (e) =>{
      setStreet(e.target.value);
    }

    const changeCity = (e) =>{
        setCity(e.target.value);
    }
    const saveOrder = () =>{
      const order = {
            userid: props.userId,
            ingredients: ctx.burger.ingredients,
            total_price: ctx.burger.total_price,
            address: {
              name: name,
              city: city,
              street: street
            }
          }
          ctx.saveOrder(order);
    }

        return(
            <div className={css.Contact}>
                <div ref={dunRef}>
                  <strong style={{fontSize:"16px"}}>
                  Нийт үнэ: {ctx.burger.total_price}
                  </strong>
                </div>
                <div>{ctx.burger.error && `Захиалгыг хадгалах явцад алдаа гарлаа : " ${ctx.burger.error}`}</div>
                {ctx.burger.saving ? <Spinner/> : (<div>
                <input onChange={changeName} type="text" name="name" placeholder="Таны нэр"/>
                <input onChange={changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг"/>
                <input onChange={changeCity} type="text" name="city" placeholder="Хот"/>
                <Button function={saveOrder} text="Захиалга илгээх" btntype="Success"/>
                </div>)}
            </div>
         );
    }

const mapStateToProps = (state) => {
  return{
    // total_price: state.burgerReducer.total_price,
    // ingredients: state.burgerReducer.ingredients,
    // newOrderStatus: state.orderReducer.newOrder,
    userId: state.SignupReducer.userid
  };
} ;

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
//     clearOrder: () => dispatch(actions.clearOrder())
//   }
// };

export default connect(mapStateToProps,null)(withRouter(Contact));
