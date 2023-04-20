import React from 'react';
import ShoppingCart from './cartModal';
import LoginModal from './loginModal';
import './modal.css';

function Modal({ isOpen, onClose, isCartOpen, isCartClose }) {
  if (!isOpen && !isCartOpen) return null;

  return (
    <div className="modal-overlay">
      {isOpen ? (
        <LoginModal onClose={onClose} />
      ) : (
        <ShoppingCart onCartClose={isCartClose} />
      )}
    </div>
  );
}

export default Modal;
