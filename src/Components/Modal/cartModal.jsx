import React, { useState } from 'react';
import './cart.css'
function ShoppingCart({ onCartClose }) {
  const [products, setProducts] = useState([]);

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const total = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="cart-section">
      <button onClick={onCartClose} className="close-button">
        X
      </button>
      <div className="cart-title-container">
        <h2 className="cart-title">Your Cart</h2>
      </div>
      <div className="cart-items-container">
        <ul className="cart-links">
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.dish}</p>
              <p>{product.price}</p>
              <button onClick={() => removeProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <p>Total: {total}</p>
    </div>
  );
}

export default ShoppingCart;
