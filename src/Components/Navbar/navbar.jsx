import React, { useState } from 'react';
import './navbar.css';
import data from './data';
import { MdMenu } from 'react-icons/md';

function Navbar() {
  const [showlinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-display">
        <button
          onClick={() => {
            setShowLinks(!showlinks);
          }}
        >
          <MdMenu />
        </button>
      </div>
      <div className="app-logo">
        <img src="" alt="app_logo_here" />
      </div>
      <ul
        className={`${
          showlinks ? 'navbar-list show-container' : 'navbar-list'
        }`}
      >
        {data.map((value) => {
          const { id, name, link } = value;
          return (
            <li className="navbarElement" key={id}>
              <a href={link}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
