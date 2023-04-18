import React from 'react';
import './galery.css';
import { wines, food } from './data';
function Galery() {
  return (
    <div className="galery">
{}
      <img src="" alt="" />
      <div className="text-container">
        <h3 className="food">Lorem, ipsum.</h3>
        <p className="food-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          optio pariatur vel, assumenda porro sit repellendus perferendis
          laudantium itaque mollitia!
        </p>
      </div>
    </div>
  );
}
export default Galery;
