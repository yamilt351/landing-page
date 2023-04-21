import React, { useContext } from 'react';
import './galery.css';
import { wines, food } from './data';
import Comments from '../Comments/comments';
import { FaPizzaSlice, FaWineGlass } from 'react-icons/fa';
import { CartContext } from '../Context/cartContext.jsx';

function Galery({ pizza, wine, comment }) {
  const [cart, setCart] = useContext(CartContext);

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

  let galleryItems = null;

  if (pizza) {
    galleryItems = food.map((foods) => {
      const { id, description, img, dish, price } = foods;
      const quantityPerItem = getQuantityById(id);
      return (
        <div className="galery" key={id}>
          <img
            src={img}
            alt={description}
            onClick={() => addToCart(id, price, dish)}
          />
          <div className="text-container">
            <div className="product-and-price-container">
              <h3 className="food">
                <FaPizzaSlice /> {dish}
              </h3>
              <h3 className="food">${price}</h3>
            </div>
            <p className="food-description">{description}</p>
            <button onClick={() => addToCart(id, price, dish)}>
              +{quantityPerItem}
            </button>
            <button onClick={() => removeItem(id)}>-</button>
          </div>
        </div>
      );
    });
  } else if (wine) {
    galleryItems = wines.map((wine) => {
      const { id, description, img, dish, price } = wine;
      const quantityPerItem = getQuantityById(id);
      return (
        <div className="galery" key={id}>
          <img
            src={img}
            alt={description}
            onClick={() => addToCart(id, price, dish)}
          />
          <div className="text-container">
            <div className="product-and-price-container">
              <h3 className="food">
                <FaWineGlass />
                {dish}
              </h3>
              <h3 className="food">${price}</h3>
            </div>
            <p className="food-description">{description}</p>
            <button onClick={() => addToCart(id, price, dish)}>
              +{quantityPerItem}
            </button>
            <button onClick={() => removeItem(id)}>-</button>
          </div>
        </div>
      );
    });
  } else if (comment) {
    return (
      <div className="gallery-container">
        <Comments />
      </div>
    );
  }

  return <div className="gallery-container">{galleryItems}</div>;
}
export default Galery;
