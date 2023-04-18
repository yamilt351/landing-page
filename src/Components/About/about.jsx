import React from 'react';
import maps from '../images/Google-Maps.png';
import './about.css';
function About() {
  return (
    <section className="about-section" id="About">
      <div className="about-container">
        <h2>About Us</h2>

        <img src={maps} alt="google maps view" className="maps" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in
          voluptatem temporibus totam quidem voluptatum laudantium
          necessitatibus vel tempore officiis aliquid corrupti dolore error
          nihil alias quae, enim tempora dolorum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Asperiores in voluptatem temporibus
          totam quidem voluptatum laudantium necessitatibus vel tempore officiis
          aliquid corrupti dolore error nihil alias quae, enim tempora dolorum!
        </p>
      </div>
    </section>
  );
}

export default About;
