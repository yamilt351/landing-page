import React from 'react';
import piza from '../images/pizza.webp';
import './menu.css';
function Menu() {
  return (
    <section className="section" id='Home'>
      <div className="section-container">
        <div className="text-container">
          <h1>Lorem, ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            voluptatum provident unde itaque accusantium minima.
          </p>
          <button> Lorem, ipsum dolor.</button>
        </div>
        <div className="image-container">
          <img src={piza} alt="delicious_pizza" className="piza" />
        </div>
      </div>
    </section>
  );
}
export default Menu;
