import React from 'react';
import './galery.css';
import { wines, food } from './data';
import Comments from '../Comments/comments';
import { FaPizzaSlice, FaWineGlass } from 'react-icons/fa';

function Galery({ pizza, wine, comment }) {
  let galleryItems = null;

  if (pizza) {
    galleryItems = food.map((foods) => {
      const { id, description, img, dish, price } = foods;
      return (
        <div className="galery" key={id}>
          <img src={img} alt={description} />
          <div className="text-container">
            <div className="product-and-price-container">
              <h3 className="food">
                <FaPizzaSlice /> {dish}
              </h3>
              <h3 className="food">{price}</h3>
            </div>
            <p className="food-description">{description}</p>
          </div>
        </div>
      );
    });
  } else if (wine) {
    galleryItems = wines.map((wine) => {
      const { id, description, img, dish, price } = wine;
      return (
        <div className="galery" key={id}>
          <img src={img} alt={description} />
          <div className="text-container">
            <div className="product-and-price-container">
              <h3 className="food">
                <FaWineGlass />
                {dish}
              </h3>
              <h3 className="food">{price}</h3>
            </div>
            <p className="food-description">{description}</p>
          </div>
        </div>
      );
    });
  } else if (comment) {
    return (
      <div className="gallery-container">
        <Comments />
      </div>
    );
  }

  return <div className="gallery-container">{galleryItems}</div>;
}
export default Galery;
