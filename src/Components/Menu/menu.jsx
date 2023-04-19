import React, { useEffect, useState } from 'react';
import piza from '../images/pizza.webp';
import piza2 from '../images/pizza.jpg';
import wine from '../images/red-wine-is-poured-into-a-glass-from-a-bottle--light-background--1153158143-98320451802c485cb6d7b5437c7fd60a.jpg';
import './menu.css';

function Menu() {
  const [currentImage, setCurrentImage] = useState(piza);
  useEffect(() => {
    const images = [piza, piza2, wine];
    let counter = 1;
    const intervalId = setInterval(() => {
      setCurrentImage(images[counter % images.length]);
      counter++;
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="section" id="Home">
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
          <img src={currentImage} alt="delicious_pizza" className="piza" />
        </div>
      </div>
    </section>
  );
}
export default Menu;
