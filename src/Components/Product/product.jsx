import React, { useState } from 'react';
import Galery from '../Galery/galery';
import './product.css';
function Product() {
  const [wines, setWines] = useState(false);
  const [pizza, setPizza] = useState(true);
  return (
    <section className="product-section" id="Product">
      <div className="title-container">
        <h1>Pizzas</h1>
        <h1>Wines</h1>
        <h1>Reviews</h1>
      </div>
      <div className="product-container">
        <Galery pizza={pizza} wine={wines}/>
      </div>
    </section>
  );
}
export default Product;
