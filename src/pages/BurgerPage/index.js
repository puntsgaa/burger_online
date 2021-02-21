import React,{ useState } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary'; 
const BurgerBuilder = (props) => {
  
  const [confirm_order, setConfirmOrder] = useState(false);
  const showConfirmModal = () => {
    setConfirmOrder(true);
  }

  const hideConfirmModal = () => {
    setConfirmOrder(false);
  }
  const continueOrder = () => {
        props.history.push({
          pathname: "/ship"
        });
        hideConfirmModal();
      }
        return (<div>
          <Modal show={confirm_order} hideConfirmModal={hideConfirmModal}>
              <OrderSummary
                hideModal={hideConfirmModal}
                continueOrder={continueOrder}
                />
          </Modal>
          <Burger/>
          <BuildControls
            showConfirmModal={showConfirmModal} />
        </div>
        ); 
      }
   export default BurgerBuilder;