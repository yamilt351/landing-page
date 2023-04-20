import React, { useState } from 'react';
import './navbar.css';
import data from './data';
import { MdMenu } from 'react-icons/md';
import Modal from '../Modal/modal';
import ShoppingCart from '../Cart/cart';

function Navbar() {
  const [showlinks, setShowLinks] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
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
                  <a href="#Auth" onClick={handleModalOpen}>
                    {name}
                  </a>
                ) : link === '#Cart' ? (
                  <a href="#Cart" onClick={handleCartOpen && handleModalClose}>
                    {name}
                  </a>
                ) : (
                  <a href={link} onClick={handleModalClose}>
                    {name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        <Modal isCartOpen={isCartOpen} onCartClose={handleCartClose}>
          <ShoppingCart />
        </Modal>
      </div>
    </nav>
  );
}
export default Navbar;
