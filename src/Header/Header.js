import React from 'react';
import './Header.css';
import badlogo from '../badlogo.png';

const Header = ({ currentUser, toggleLoginModal, logoutUser }) => {
  return (
    <header className='header'>
      <img src={badlogo} alt='Bad Movie Logo' height='50' width='50' />
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
