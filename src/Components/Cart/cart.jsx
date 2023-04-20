import React, { useState } from 'react';

function ShoppingCart() {
  const [products, setProducts] = useState([]);

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const total = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.dish}</p>
            <p>{product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
}

export default ShoppingCart;
