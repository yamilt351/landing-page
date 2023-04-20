import React from 'react';
import ShoppingCart from './cartModal';
import LoginModal from './loginModal';
import './modal.css';

function Modal({ isOpen, onClose, isCartOpen }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {isCartOpen ? (
        <ShoppingCart onCartClose={onClose} />
      ) : (
        <LoginModal onClose={onClose} />
      )}
    </div>
  );
}

export default Modal;
