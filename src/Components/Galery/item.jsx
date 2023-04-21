import React from 'react';
import { FaPizzaSlice, FaWineGlass } from 'react-icons/fa';
function Item({
  id,
  description,
  img,
  dish,
  price,
  onAddToCart,
  onRemoveFromCart,
  quantity,
}) {
  return (
    <div className="galery" key={id}>
      <img
        src={img}
        alt={description}
        onClick={() => onAddToCart(id, price, dish)}
      />
      <div className="text-container">
        <div className="product-and-price-container">
          <h3 className="food">
            <FaPizzaSlice /> {dish}
          </h3>
          <h3 className="food">${price}</h3>
        </div>
        <p className="food-description">{description}</p>
        <button onClick={() => onAddToCart(id, price, dish)}>
          +{quantity}
        </button>
        <button onClick={() => onRemoveFromCart(id)}>-</button>
      </div>
    </div>
  );
}
export default Item;
