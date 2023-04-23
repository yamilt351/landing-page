import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/cartContext.jsx';
import { GiConfirmed } from 'react-icons/gi';
import './cart.css';
import { BsFillCartDashFill } from 'react-icons/bs';

function ShoppingCart({ onCartClose }) {
  const [confirmed, setConfirmed] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const [order, setOrder] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0,
  );
  const removeItem = (id) => {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  const handleConfirm = () => {
    const inputs = document.querySelectorAll('input[required]');
    const textareas = document.querySelectorAll('textarea[required]');

    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
      } else {
        setInvalid(true);
      }
    });

    textareas.forEach((textarea) => {
      if (!textarea.checkValidity()) {
        isValid = false;
      } else {
        setInvalid(true);
      }
    });

    if (isValid) {
      setCart([]);
      setOrder(true);

      console.log('OK');
    }
  };

  const handleCheckOrder = () => {
    console.log(cart.length);
    if (cart.length > 0) {
      setConfirmed(!confirmed);
    }
  };

  return (
    <div className="cart-section">
      <button onClick={onCartClose} className="close-button">
        X
      </button>
      <div className={order ? 'order-recieved-modal' : 'hide'}>
        <div className="cart-title-container">
          <h2 className="cart-title">Your order has been received</h2>
        </div>
        <div className="success-icon-container">
          <GiConfirmed onClick={onCartClose} />
        </div>
      </div>
      <div className={order ? 'hide' : 'cart-container'}>
        <div className="cart-title-container">
          <h2 className="cart-title">{confirmed ? 'Address' : 'Your Order'}</h2>
        </div>
        <div className="cart-items-container">
          <div className="cart-items">
            <ul className={confirmed ? 'cart-link hide' : 'cart-links'}>
              <h3 className={quantity === 0 ? 'show-alert' : 'hide'}>
                YOUR ORDER IS EMPTY!
              </h3>

              {cart.map((item) => {
                return (
                  <li key={item.id} className="item-list">
                    <span className="item-name">{item.dish}</span>
                    <span className="item-separator">:.......</span>
                    <span className="item-quantity">{item.quantity}</span>
                    <span className="item-delete">
                      <BsFillCartDashFill onClick={() => removeItem(item.id)}>
                        Remove
                      </BsFillCartDashFill>
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className={confirmed ? 'user-data-form' : 'hide'}>
              <label htmlFor="" className={invalid ? 'red' : ''}>
                Name *
              </label>
              <input type="text" placeholder="Name" name="name" required />
              <label htmlFor="" className={invalid ? 'red' : ''}>
                Phone / Mobile *
              </label>
              <input
                type="tel"
                placeholder="Phone / Mobile"
                name="phone"
                required
              />
              <label htmlFor="" className={invalid ? 'red' : ''}>
                Address *
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                required
              />
              <label htmlFor="" className={invalid ? 'red' : ''}>
                Annotations *
              </label>
              <textarea
                type="text"
                placeholder="Annotations"
                cols={43}
                rows={10}
                name="apartment"
                required
              />
            </div>

            <div className="total-price">Total: ${totalPrice}</div>
            <div className="order-buttons">
              {' '}
              <button onClick={handleCheckOrder}>
                {confirmed ? 'Edit Order' : 'Confirm Order'}
              </button>
              <button
                onClick={handleConfirm}
                className={confirmed ? '' : 'hide'}
              >
                {confirmed ? 'Confirm' : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
