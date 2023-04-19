import React from 'react';
import './modal.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Sign In</h2>
        <button onClick={onClose}>X</button>
        <form>
          <label>
            User:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
