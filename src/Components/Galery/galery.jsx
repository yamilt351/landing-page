import React, { useContext } from 'react';
import './galery.css';
import { wines, food } from './data';
import Comments from '../Comments/comments';
import { CartContext } from '../Context/cartContext.jsx';

import Pagination from './pagination';

function Galery({ pizza, wine, comment }) {
  const [cart, setCart] = useContext(CartContext);

  const animation = () => {
    const cart = document.querySelector('.cart');
    cart.classList.add('cart-animation');
    setTimeout(() => {
      cart.classList.remove('cart-animation');
    }, 1000);
  };

  const addToCart = (id, price, dish) => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price, dish }];
      }
    });
    animation();
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);
      if (foundItem && foundItem.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    const foundItem = cart.find((item) => item.id === id);
    return foundItem ? foundItem.quantity : 0;
  };

  const itemsPerPage = 9;

  let items;
  if (pizza) {
    items = food;
  } else if (wine) {
    items = wines;
  } else if (comment) {
    return (
      <div className="gallery-container">
        <Comments />
      </div>
    );
  }
  return (
    <div>
      <Pagination
        items={items}
        itemsPerPage={itemsPerPage}
        addToCart={addToCart}
        removeItem={removeItem}
        getQuantityById={getQuantityById}
        pizza={pizza}
      />
    </div>
  );
}
export default Galery;
