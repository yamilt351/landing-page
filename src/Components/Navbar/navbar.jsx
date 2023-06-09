import React, { useContext, useState } from 'react';
import './navbar.css';
import data from './data';
import { MdMenu } from 'react-icons/md';
import Modal from '../Modal/modal';
import { CartContext } from '../Context/cartContext';
import { BsCart, BsCartFill } from 'react-icons/bs';

function Navbar({ activeSection }) {
  const [showlinks, setShowLinks] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleCartModalOpen = () => {
    setIsCartModalOpen(true);
  };
  const handleCartModalClose = () => {
    setIsCartModalOpen(false);
  };
  console.log(activeSection + 'esta seccion');
  return (
    <nav className={activeSection === 'Home' ? 'navbar' : 'small navbar'}>
      <div className="navbar-container-elements">
        <div className="mobile-menu-display">
          <button
            className="menu-display"
            onClick={() => {
              setShowLinks(!showlinks);
            }}
          >
            <MdMenu />
          </button>
          <span>
            {' '}
            <a
              className="mobile-cart"
              href="#Cart"
              onClick={
                isCartModalOpen || isModalOpen
                  ? () => {
                      handleCartModalClose();
                      handleModalClose();
                    }
                  : handleCartModalOpen
              }
            >
              {quantity > 0 ? (
                <span>
                  <BsCartFill />
                  {quantity}
                </span>
              ) : (
                <span>
                  <BsCart />
                </span>
              )}
            </a>
          </span>
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
                    onClick={
                      isModalOpen || isCartModalOpen
                        ? () => {
                            handleModalClose();
                            handleCartModalClose();
                          }
                        : handleModalOpen
                    }
                  >
                    {name}
                  </a>
                ) : link === '#Cart' ? (
                  <a
                    className="cart"
                    href="#Cart"
                    onClick={
                      isCartModalOpen || isModalOpen
                        ? () => {
                            handleCartModalClose();
                            handleModalClose();
                          }
                        : handleCartModalOpen
                    }
                  >
                    {quantity > 0 ? (
                      <span>
                        {name[0]}
                        {quantity}
                      </span>
                    ) : (
                      <span>{name[1]}</span>
                    )}
                  </a>
                ) : (
                  <a
                    className={activeSection === { name } ? 'active' : ''}
                    href={link}
                    onClick={
                      isCartModalOpen || isModalOpen
                        ? () => {
                            handleCartModalClose();
                            handleModalClose();
                          }
                        : null
                    }
                  >
                    {name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          isCartOpen={isCartModalOpen}
          onCartClose={handleCartModalClose}
        />
      </div>
    </nav>
  );
}
export default Navbar;
