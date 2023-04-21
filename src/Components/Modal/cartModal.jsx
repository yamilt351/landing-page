import React, { useContext } from 'react';
import { CartContext } from '../Context/cartContext.jsx';

import './cart.css';
import {BsFillCartDashFill} from 'react-icons/bs';

function ShoppingCart({ onCartClose }) {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0,
  );
  const removeItem = (id) => {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="cart-section">
      <button onClick={onCartClose} className="close-button">
        X
      </button>
      <div className="cart-title-container">
        <h2 className="cart-title">Your Cart</h2>
      </div>
      <div className="cart-items-container">
        <div className="cart-items">
          <ul className="cart-links">
            <div>Items in cart: {quantity}</div>
            {cart.map((item) => {
              console.log(item);
              return (
                <li key={item.id} className="item-list">
                  <span className="item-name">{item.dish}</span>
                  <span className="item-separator">:.......</span>
                  <span className="item-quantity">{item.quantity}</span>
                  <span className="item-delete">
                    <BsFillCartDashFill onClick={() => removeItem(item.id)}>Remove</BsFillCartDashFill>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className='total-price'>Total: ${totalPrice}</div>
          <button onClick={() => console.log(cart)}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
