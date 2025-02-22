import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  // Task 3) Point 1 Cost of all items in cart
  const calculateTotalAmount = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += item.cost.replace("$", "") * item.quantity;
    });

    return totalCost;
  };
  // Task 3) Point 2 Continue shopping
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // Task 3) Point 3 Checkout
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };


  // Task 3) Point 4 Increment and decrement
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));

    }
  };
  // Task 3) Point 5 Remove plant from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.cost.replace("$", "") * item.quantity
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        {/* <button className="get-started-button1">Checkout</button> */}
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping()}  >Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


