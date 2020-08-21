import React from 'react';
import './Login.css';

const Login = ({ toggleLoginModal }) => {
  return (
    <div className='bg-login-modal' onClick={toggleLoginModal}>
      <form className='login-form' onClick={(e) => e.stopPropagation()}>
        <h3 className='login-header'>Login</h3>
        <label for='username' class='username'>
          username:
        </label>
        <input id='username' maxlength='10' class='username-input' type='text' />
        <label class='username-alert hide'>username is required</label>
        <label for='password' class='password'>
          password:
        </label>
        <input id='password' maxlength='12' class='password-input' type='password' />
        <label class='password-alert hide'>password is required</label>
        <label class='invalid-alert hide'>invalid username, please try again</label>
        <button class='submit' aria-label='Submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
