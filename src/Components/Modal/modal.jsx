import React, { useState } from 'react';
import './modal.css';

function Modal({ isOpen, onClose }) {
  const [signin, setSignin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>{signin ? 'Sign In !' : 'Sign Up !'}</h2>
        <form>
          <label>
            <input type="text" name="email" placeholder="E-mail" />
          </label>
          <label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={signin ? 'hide' : ''}
            />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" />
          </label>
          <button type="submit" className="auth-button">
            Submit
          </button>
          <button
            type="submit"
            className="auth-button"
            onClick={(e) => {
              e.preventDefault();
              setSignin(!signin);
            }}
          >
            {signin ? 'Create Account' : 'I already have an Account'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
