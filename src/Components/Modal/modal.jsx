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
            <input type="text" name="username" placeholder="Username" />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
