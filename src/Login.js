import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  // = ({ toggleLoginModal }) =>
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password: ''
    }
  }

  attemptLogin = (event) => {
    event.preventDefault();
  }

  updateForm = (event) =>{
    const inputName = event.target.id;
    const inputValue = event.target.value;
    this.setState({[inputName]: inputValue})
  }

  render () {
    return (
      <div className='bg-login-modal' onClick={this.props.toggleLoginModal}>
        <form className='login-form' onClick={(e) => e.stopPropagation()} onSubmit={this.attemptLogin}>
          <h3 className='login-header'>Login</h3>
          <label for='username' class='username'>
            username:
          </label>
          <input id='username' class='username-input' type='text' onChange={this.updateForm} />
          <label class='username-alert hide'>username is required</label>
          <label for='password' class='password'>
            password:
          </label>
          <input id='password' class='password-input' type='password' onChange={this.updateForm} />
          <label class='password-alert hide'>password is required</label>
          <label class='invalid-alert hide'>invalid username, please try again</label>
          <button class='submit' aria-label='Submit'>
            Submit
          </button>
        </form>
      </div>
    );
  };
};

export default Login;
