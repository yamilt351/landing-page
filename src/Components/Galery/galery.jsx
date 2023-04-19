import React from 'react';
import './galery.css';
import { wines, food } from './data';
import Comments from '../Comments/comments';

function Galery({ pizza, wine, comment }) {
  let galleryItems = null;

  if (pizza) {
    galleryItems = food.map((foods) => {
      const { id, description, img, dish } = foods;
      return (
        <div className="galery" key={id}>
          <img src={img} alt={description} />
          <div className="text-container">
            <h3 className="food">{dish}</h3>
            <p className="food-description">{description}</p>
          </div>
        </div>
      );
    });
  } else if (wine) {
    galleryItems = wines.map((wine) => {
      const { id, description, img, dish } = wine;
      return (
        <div className="galery" key={id}>
          <img src={img} alt={description} />
          <div className="text-container">
            <h3 className="food">{dish}</h3>
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
