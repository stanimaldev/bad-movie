import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  // = ({ toggleLoginModal }) =>
  constructor() {
    super()
    this.state={
      username: '',
      password: ''
    }
  }

  attemptLogin = (event) => {
    event.preventDefault();
  }

  return (
    <div className='bg-login-modal' onClick={toggleLoginModal}>
      <form className='login-form' onClick={(e) => e.stopPropagation()} onSubmit={attemptLogin}>
        <h3 className='login-header'>Login</h3>
        <label for='username' class='username'>
          username:
        </label>
        <input id='username' maxlength='10' class='username-input' type='text' onChange={updateForm} />
        <label class='username-alert hide'>username is required</label>
        <label for='password' class='password'>
          password:
        </label>
        <input id='password' maxlength='12' class='password-input' type='password' onChange={updateForm} />
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
