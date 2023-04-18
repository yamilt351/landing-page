import React, { useState } from 'react';
import Galery from '../Galery/galery';
import './product.css';
function Product() {
  const [wines, setWines] = useState(false);
  const [pizza, setPizza] = useState(true);
  const [reviews, setReviews] = useState(false);
  return (
    <section className="product-section" id="Product">
      <div className="title-container">
        <h1
          className={pizza ? 'selected' : 'hide'}
          onClick={() => {
            !setPizza;
          }}
        >
          Pizzas
        </h1>
        <h1
          className={wines ? 'selected' : 'hide'}
          onClick={() => {
            !setWines;
          }}
        >
          Wines
        </h1>
        <h1
          className={reviews ? 'selected' : 'hide'}
          onClick={() => {
            !setReviews;
          }}
        >
          Reviews
        </h1>
      </div>
      <div className="product-container">
        <Galery pizza={pizza} wine={wines} />
      </div>
    </section>
  );
}
export default Product;
