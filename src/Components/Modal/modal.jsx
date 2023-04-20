import React from 'react';
import LoginModal from './loginModal';
import './modal.css';

function Modal({ isOpen, onClose,isCartOpen,onCartClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <LoginModal onClose={onClose} />
    </div>
  );
}

export default Modal;
