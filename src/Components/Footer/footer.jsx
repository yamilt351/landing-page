import React from 'react';
import { phones, social, schedule } from './data';

import './footer.css';

function Footer() {
  return (
    <footer id="Footer">
      <div className="footer-container">
        <div className="footer-container contact">
          <h3>Contact Us </h3>
          <ul className='li-container'>
            {phones.map((phone) => {
              const { id, number } = phone;
              return <li key={id}>{number}</li>;
            })}
          </ul>
        </div>
        <div className="footer-container social-media">
          <h3>Find Us </h3>
          <ul className='li-container'>
            {social.map((socials) => {
              const { id, link, plataform, icon } = socials;
              return (
                <li className="social-media-links" key={id}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {icon} {plataform}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-container location">
          <h3>Location</h3>
          <button> Lorem ipsum</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, quibusdam!
          </p>
        </div>
        <div className="footer-container schedule">
          <h3>Schedule</h3>
          <ul className='li-container'>
            {schedule.map((schedules) => {
              const { id, hour, Date } = schedules;
              return (
                <li key={id}>
                  {Date} : {hour}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
