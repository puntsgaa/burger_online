import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary';
import axios from '../../axios-orders';
const ingredient_prices = {
  salad:150,
  cheese:250,
  bacon:800,
  meat:1500
}

const controls = {
  bacon:'Гахайн мах',
  cheese:'Бяслаг',
  meat:'Үхрийн мах',
  salad:'Салад'
}

class BurgerBuilder extends Component{
      
      state = {
        ingredients:{
          salad: 0,
          cheese: 0,
          bacon: 0,
          meat: 0
        },
        total_price: 0,
        purchaseing:false,
        confirm_order:false
      };
      
      addIngredient = (type) =>{
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;
        const new_price = this.state.total_price + ingredient_prices[type];
        this.setState({ingredients:newIngredients});
        this.setState({total_price:new_price});
        if(this.state.total_price >= 0){
          this.setState({purchaseing:true});
        }
      }

      removeIngredient = (type) =>{
        if(this.state.ingredients[type] > 0){
          const newIngredients = {...this.state.ingredients};
          newIngredients[type]--;
          const new_price = this.state.total_price - ingredient_prices[type];
          this.setState({ingredients:newIngredients});  
          this.setState({total_price:new_price});
          if(new_price === 0){
            this.setState({purchaseing:false});
          }
        }
      }

      showConfirmModal = () =>{
        this.setState({confirm_order:true});
      }

      hideConfirmModal = () =>{
        this.setState({confirm_order:false});
      }

      continueOrder = () =>{
        const order = {
          ingredients : this.state.ingredients,
          total_price : this.state.total_price,
          address :{
            name: 'Puntsag',
            city: 'UB',
            street: '10r horoolol 11-22'
          }
        }
        axios
        .post("/orders.json" , order)
        .then(response => {
          alert("Success");
        });
      }

      render(){
        const disabledIngredients = {...this.state.ingredients}
        for(var key in disabledIngredients){
          if(disabledIngredients[key] <= 0) {
            disabledIngredients[key] = true;
          }
          else{
            disabledIngredients[key] = false;
          }
        }
        return(<div>
                 <Modal show={this.state.confirm_order} hideConfirmModal={this.hideConfirmModal}>
                   <OrderSummary 
                      hideModal={this.hideConfirmModal} 
                      continueOrder={this.continueOrder} 
                      controls={controls} 
                      ingredients={this.state.ingredients} 
                      total_price={this.state.total_price}/>
                 </Modal>
                 <Burger ingredients={this.state.ingredients}/> 
                 <BuildControls 
                  controls={controls}
                  disabled={!this.state.purchaseing} 
                  price={this.state.total_price} 
                  disabledIngredients={disabledIngredients} 
                  addIngredient={this.addIngredient} 
                  removeIngredient={this.removeIngredient}
                  showConfirmModal={this.showConfirmModal}/>
        </div>
        )
    }
}
export default BurgerBuilder;