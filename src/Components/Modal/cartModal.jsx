import React, { useContext } from 'react';
import { CartContext } from '../Context/cartContext.jsx';

import './cart.css';

function ShoppingCart({ onCartClose }) {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0,
  );

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
            <div>Total: ${totalPrice}</div>
            <button onClick={() => console.log(cart)}>Checkout</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
