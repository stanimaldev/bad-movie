import React, { Component } from 'react';
import './Login.css';
import Fetch from './Fetch';

class Login extends Component {
  // = ({ toggleLoginModal }) =>
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password: '',
      error: '',
    }
    this.fetch = new Fetch()
  }

  attemptLogin = (event) => {
    event.preventDefault();
    this.fetch.loginUser(this.state.username, this.state.password)
    .then(({ data, error }) => this.setState({ error }))

    // const userInformation = this.fetch.loginUser(this.state.username, this.state.password)
    // .catch(err => {
    //   this.setState({ error: err.message })
    // })
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
          <label for='password' class='password'>
            password:
          </label>
          <input id='password' class='password-input' type='password' onChange={this.updateForm} />
          {this.state.error && <label class='invalid-alert hide'>{this.state.error}</label>}
          <button class='submit' aria-label='Submit'>
            Submit
          </button>
        </form>
      </div>
    );
  };
};

export default Login;
