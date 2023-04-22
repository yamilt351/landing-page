import React, { useState } from 'react';
import Galery from '../Galery/galery.jsx';
import './product.css';
function Product() {
  const [wines, setWines] = useState(false);
  const [pizza, setPizza] = useState(true);
  const [reviews, setReviews] = useState(false);

  const changeStateWines = () => {
    setWines(true);
    setPizza(false);
    setReviews(false);
  };
  const changeStatePizza = () => {
    setWines(false);
    setPizza(true);
    setReviews(false);
  };
  const changeStateReviews = () => {
    setWines(false);
    setPizza(false);
    setReviews(true);
  };

  return (
    <section className="product-section"id="Product">
      <h1>Menu</h1>
      <div className="title-container">
        <h2 className={pizza ? 'selected' : ''} onClick={changeStatePizza}>
          Pizzas
        </h2>
        <h2 className={wines ? 'selected' : ''} onClick={changeStateWines}>
          Wines
        </h2>
        <h2 className={reviews ? 'selected' : ''} onClick={changeStateReviews}>
          Reviews
        </h2>
      </div>
      <div className="product-container">
        <div className="gallery-container">
          <Galery pizza={pizza} wine={wines} comment={reviews} />
        </div>
      </div>
    </section>
  );
}
export default Product;
