import React from 'react';
import './Header.css';

const Header = ({ currentUser, toggleLoginModal, logoutUser }) => {
  return (
    <header className='header'>
      <img src='../badlogo.png' alt='Bad Movie Logo' height='50' width='50' />
      <h1 className='title'>Bad Movie</h1>
      {currentUser && <h2>Hello {currentUser.name}</h2>}
      {currentUser && (
        <button className='logout-button' onClick={logoutUser}>
          Logout
        </button>
      )}
      {!currentUser && (
        <button className='login-button' onClick={toggleLoginModal}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
