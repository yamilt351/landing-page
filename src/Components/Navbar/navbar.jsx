import React, { useState } from 'react';
import './navbar.css';
import data from './data';
import { MdMenu } from 'react-icons/md';
import Modal from '../Modal/modal';

function Navbar() {
  const [showlinks, setShowLinks] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container-elements">
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
                {link === '#Auth' ? (
                  <a
                    href="#Auth"
                    onClick={!isModalOpen ? handleModalOpen : handleModalClose}
                  >
                    {name}
                  </a>
                ) : link === '#Cart' ? (
                  <a
                    href="#Cart"
                    onClick={!isModalOpen ? handleModalOpen : handleModalClose}
                  >
                    {name}
                  </a>
                ) : (
                  <a href={link} onClick={isModalOpen ? handleModalClose : ''}>
                    {name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>
    </nav>
  );
}
export default Navbar;
