import React, { useEffect, useState } from 'react';
import Item from './item';
import './pagination.css';
import { FaPizzaSlice, FaWineGlass } from 'react-icons/fa';
function Pagination({
  items,
  itemsPerPage,
  addToCart,
  removeItem,
  getQuantityById,
  pizza,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [pizza]);

  const paginationItems = getCurrentPageItems().map((item) => (
    <Item
      key={item.id}
      id={item.id}
      description={item.description}
      img={item.img}
      dish={item.dish}
      price={item.price}
      onAddToCart={addToCart}
      onRemoveFromCart={removeItem}
      quantity={getQuantityById(item.id)}
      icon={pizza ? <FaPizzaSlice /> : <FaWineGlass />}
    />
  ));

  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <li key={i} onClick={() => handleClick(i)}>
        {i}
      </li>,
    );
  }

  return (
    <>
      <ul className="pagination">{paginationLinks}</ul>
      <div className="gallery-container">{paginationItems}</div>
    </>
  );
}

export default Pagination;
