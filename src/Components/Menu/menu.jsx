import React, { useEffect, useState } from 'react';
import piza from '../images/pizza.webp';
import SetNewImages from './LogicMenu.js';
import './menu.css';
import SetNewText from './text.js';

function Menu() {
  const [currentImage, setCurrentImage] = useState(piza);
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendi voluptatum provident unde itaque accusantium minima';
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    SetNewImages(setCurrentImage);
    SetNewText(setCurrentText);
  }, []);
  return (
    <section className="section" id="Home">
      <div className="section-container">
        <div className="text-container">
          <h1>Lorem, ipsum.</h1>
          <p>{currentText}</p>
          <button> Lorem, ipsum dolor.</button>
        </div>
        <div className="image-container">
          <img src={currentImage} alt="delicious_pizza" className="piza" />
        </div>
      </div>
    </section>
  );
}
export default Menu;
