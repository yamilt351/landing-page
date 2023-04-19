import React from 'react';
import maps from '../images/Google-Maps.png';
import './about.css';
function About() {
  return (
    <section className="about-section" id="About">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="map-and-description-container">
          <iframe
            width="425"
            height="350"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1054215431213379%2C51.497990292603085%2C-0.09351253509521486%2C51.502004286184594&amp;layer=mapnik&amp;marker=51.499997333585014%2C-0.09946703910827637"
            style={{ border: '1px solid black' }}
          ></iframe>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            in voluptatem temporibus totam quidem voluptatum laudantium
            necessitatibus vel tempore officiis aliquid corrupti dolore error
            nihil alias quae, enim tempora dolorum! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Asperiores in voluptatem temporibus
            totam quidem voluptatum laudantium necessitatibus vel tempore
            officiis aliquid corrupti dolore error nihil alias quae, enim
            tempora dolorum! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Asperiores in voluptatem temporibus totam quidem voluptatum
            laudantium necessitatibus vel tempore officiis aliquid corrupti
            dolore error nihil alias quae, enim tempora dolorum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Asperiores in
            voluptatem temporibus totam quidem voluptatum laudantium
            necessitatibus vel tempore officiis aliquid corrupti dolore error
            nihil alias quae, enim tempora dolorum!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
