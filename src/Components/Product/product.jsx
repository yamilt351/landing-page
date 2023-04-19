import React, { useState } from 'react';
import Galery from '../Galery/galery';
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
    <section className="product-section" id="Product">
      <div className="title-container">
        <h1 className={pizza ? 'selected' : 'hide'} onClick={changeStatePizza}>
          Pizzas
        </h1>
        <h1 className={wines ? 'selected' : 'hide'} onClick={changeStateWines}>
          Wines
        </h1>
        <h1
          className={reviews ? 'selected' : 'hide'}
          onClick={changeStateReviews}
        >
          Reviews
        </h1>
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
