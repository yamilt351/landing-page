import React from 'react';
import { BsFacebook, BsReddit } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
export const phones = [
  { id: 1, number: '(011) 4545 4242' },
  { id: 2, number: '(011) 4545 4242' },
  { id: 3, number: '(011) 4545 4242' },
];
const hours = ['11:00–15:00', '19:00–23:00'];
export const schedule = [
  { id: 1, Date: 'Monday', hour: hours[0] + ' to ' + hours[1] },
  { id: 2, Date: 'Tuesday', hour: hours[0] + ' to ' + hours[1] },
  { id: 3, Date: 'Wednesday', hour: hours[0] + ' to ' + hours[1] },
  { id: 4, Date: 'Thursday', hour: hours[0] + ' to ' + hours[1] },
  { id: 5, Date: 'Friday', hour: hours[0] + ' to ' + hours[1] },
  { id: 6, Date: 'Saturday', hour: hours[0] + ' to ' + hours[1] },
  { id: 7, Date: 'Sunday', hour: hours[1] },
];

export const social = [
  {
    id: 1,
    icon: <BsFacebook />,
    plataform: 'Facebook',
    link: 'www.facebook.com',
  },
  {
    id: 2,
    icon: <AiFillTwitterCircle />,
    plataform: 'Tiwtter',
    link: 'www.twitter.com',
  },
  {
    id: 3,
    icon: <AiFillInstagram />,
    plataform: 'Instagram',
    link: 'www.instagram.com',
  },
  { id: 4, icon: <BsReddit />, plataform: 'Reddit', link: 'www.reddit.com' },
];
