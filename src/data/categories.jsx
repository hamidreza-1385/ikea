// data/categories.js
import { faHome, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import neimg from '../imgs/new.png';
import storage from '../imgs/storage.png';
import beds from '../imgs/beds.png';
import bedroom from '../imgs/bedroom.png';
import living from '../imgs/living.png';
import kitchen from '../imgs/kitchen.png';
import ombal from '../imgs/ombal.png'

import livingroom from '../imgs/livingroom.png';

export const categoryTabs = [
    { key: 'shop-products', label: 'Shop products', icon:faHome},
    { key: 'shop-by-room', label: 'Shop by room',icon:faBullhorn },
    { key: 'now-at-ikea', label: 'Now at IKEA' },
    { key: 'offer', label: 'Offers and perks' },
  ];
  
  export const categoryData = {
    'shop-products': [
      { title: 'New', img : neimg },
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      // ...
    ],
    'shop-by-room': [
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
    ],
    'now-at-ikea': [
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Livingroom seating ', img: livingroom },
      { title: 'Storage & Organization', img: storage },
      { title: 'Beda & Battresses', img: beds },
      { title: 'Livingroom seating ', img: livingroom },
    ],
    'offer': [
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
      { title: 'Bed room', img: bedroom },
      { title: 'Living room', img: living },
      { title: 'Kitchen', img: kitchen },
    ],
  };
  