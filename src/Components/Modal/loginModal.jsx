import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function LoginModal({ onClose }) {
  const [signin, setSignin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateFields = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^[^\s]{6,}$/
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (!passwordRegex.test(password)) {
      setPasswordError('minimum 6 characters');
      return;
    } else {
      setPasswordError('');
    }

    // If all fields are valid, proceed with login request
    console.log('All fields are valid. Sending login request...');
  };
  return (
    <div>
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>{signin ? 'Sign In !' : 'Sign Up !'}</h2>
        <form onSubmit={validateFields}>
          <label>
            <input type="text" name="email" placeholder="E-mail" />
            <div className="error-message">{emailError}</div>
          </label>
          <label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={signin ? 'hide' : ''}
              title="example@email.com"
            />
          </label>
          <label className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              title="The password must start with & and have at least 7 characters that can be letters, numbers, or some special characters."
            />

            <div
              className="password-icon"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
          </label>
          <div className="error-message">{passwordError}</div>
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

export default LoginModal;
