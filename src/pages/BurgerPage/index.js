import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary';
//import axios from '../../axios-orders';
import Spinner from '../../components/General/Spinner';
const ingredient_prices = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500
}

const controls = {
  bacon: 'Гахайн мах',
  cheese: 'Бяслаг',
  meat: 'Үхрийн мах',
  salad: 'Салад'
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    total_price: 0,
    purchaseing: false,
    confirm_order: false,
    last_custname: "",
    loading: false
  };
      addIngredient = (type) => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        const new_price = this.state.total_price + ingredient_prices[type];
        this.setState({ ingredients: newIngredients });
        this.setState({ total_price: new_price });
        if (this.state.total_price >= 0) {
          this.setState({ purchaseing: true });
        }
      }

  removeIngredient = (type) => {
        if (this.state.ingredients[type] > 0) {
          const newIngredients = { ...this.state.ingredients };
          newIngredients[type]--;
          const new_price = this.state.total_price - ingredient_prices[type];
          this.setState({ ingredients: newIngredients });
          this.setState({ total_price: new_price });
          if (new_price === 0) {
            this.setState({ purchaseing: false });
          }
        }
      }

  showConfirmModal = () => {
        this.setState({ confirm_order: true });
      }

  hideConfirmModal = () => {
        this.setState({ confirm_order: false });
      }

  // componentDidMount = () => {
  //   this.setState({ loading: true });
  //   axios
  //     .get("/orders.json")
  //     .then(response => {
  //       if (response.data) {
  //         const arr = Object.entries(response.data);
  //         arr.forEach(el => {
  //           // console.log(el);
  //           // console.log(el[1].address.name + "==>" + el[1].total_price);
  //         })
  //         const lastOrder = arr[arr.length - 1][1];
  //         this.setState({ ingredients: lastOrder.ingredients, total_price: lastOrder.total_price, last_custname: lastOrder.address.name })
  //       }
  //     }).catch(err => console.log(err)).finally(() => {
  //       this.setState({ loading: false })
  //     });
  // }

  continueOrder = () => {
        const param = [];
        for (let prop in this.state.ingredients) {
          param.push(prop + "=" + this.state.ingredients[prop]);
        }
        param.push("total_price=" + this.state.total_price);
        const query = param.join("&");
        this.props.history.push({
          pathname: "/ship",
          search: query
        });
        this.hideConfirmModal();
        //   const order = {
        //     ingredients: this.state.ingredients,
        //     total_price: this.state.total_price,
        //     address: {
        //       name: 'Puntsag',
        //       city: 'UB',
        //       street: '10r horoolol 11-22'
        //     }
        //   }
        //   this.setState({ loading: true });
        //   axios
        //     .post("/orders.json", order)
        //     .then(response => {
        //       //alert("Success");
        //     })
        //     .catch((error) => {
        //       alert(error);
        //     }).finally(() => this.setState({ loading: false }))
      }

  render() {
        const disabledIngredients = { ...this.state.ingredients }
        for (var key in disabledIngredients) {
          if (disabledIngredients[key] <= 0) {
            disabledIngredients[key] = true;
          }
          else {
            disabledIngredients[key] = false;
          }
        }
        return (<div>
          <Modal show={this.state.confirm_order} hideConfirmModal={this.hideConfirmModal}>
            {this.state.loading ? (<Spinner />) :
              (<OrderSummary
                hideModal={this.hideConfirmModal}
                continueOrder={this.continueOrder}
                controls={controls}
                ingredients={this.state.ingredients}
                total_price={this.state.total_price} />)
            }
          </Modal>
          {/* {this.state.loading && <Spinner />}
      <p style={{ textAlign: 'center' }}>
        Сүүлчийн захиалагч :{this.state.last_custname}
      </p> */}
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            controls={controls}
            disabled={!this.state.purchaseing}
            price={this.state.total_price}
            disabledIngredients={disabledIngredients}
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            showConfirmModal={this.showConfirmModal} />
        </div>
        )
      }
    }
export default BurgerBuilder;