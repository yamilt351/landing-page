import React from 'react';
import './modal.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className='close-button'>X</button>
        <h2>Sign In</h2>
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
