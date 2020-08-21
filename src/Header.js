import React from 'react';
import './Header.css';

const Header = ({ toggleLoginModal }) => {
  return (
    <header className='header'>
      <img src='' alt='Bad Movie Logo' height='50' width='50' />
      <h1 className='title'>Bad Movie</h1>
      <button className='login-button' onClick={toggleLoginModal}>
        Login
      </button>
    </header>
  );
};

export default Header;
