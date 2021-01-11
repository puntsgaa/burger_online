import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary';
import Spinner from '../../components/General/Spinner';
class BurgerBuilder extends Component {

  state = {
    confirm_order: false,
    last_custname: "",
    loading: false
  };
      
  showConfirmModal = () => {
        this.setState({ confirm_order: true });
      }

  hideConfirmModal = () => {
        this.setState({ confirm_order: false });
      }
  continueOrder = () => {
        this.props.history.push({
          pathname: "/ship"
        });
        this.hideConfirmModal();
      }

  render() {
        return (<div>
          <Modal show={this.state.confirm_order} hideConfirmModal={this.hideConfirmModal}>
            {this.state.loading ? (<Spinner />) :
              (<OrderSummary
                hideModal={this.hideConfirmModal}
                continueOrder={this.continueOrder}
                />)
            }
          </Modal>
          <Burger/>
          <BuildControls
            showConfirmModal={this.showConfirmModal} />
        </div>
        )
      }
    }
   export default BurgerBuilder;