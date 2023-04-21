import React from 'react';
import { BsCartFill, BsCart } from 'react-icons/bs';

const data = [
  { id: 1, name: 'Home', link: '#Home' },
  { id: 3, name: 'Product', link: '#Product' },
  { id: 2, name: 'About Us', link: '#About' },
  { id: 4, name: 'Contact Us', link: '#Footer' },
  { id: 5, name: 'Sign In | Sign Up', link: '#Auth' },
  { id: 6, name: [<BsCartFill />, <BsCart />], link: '#Cart' },
];

export default data;
