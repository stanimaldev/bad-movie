import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import MovieSection from './Movie-Section';
import Fetch from './Fetch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      showLoginModal: false,
      currentUser: false
    };
    this.fetch = new Fetch();
  }

  toggleLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };

  changeUser = (userData) => {
    this.toggleLoginModal();
    this.setState({ currentUser: userData })
  }

  logoutUser = () => {
    this.setState({ currentUser: false })
  }

  componentDidMount() {
    this.fetch
      .getAllMovies()
      .then((movies) => {
        this.setState({ movies, error: '' });
      })
      .catch((err) => {
        this.setState({ error: "We're Sorry Something Went Wrong Try Again Later" });
      });
  }

  render() {
    const { movies, error, showLoginModal } = this.state;
    return (
      <div className='App'>
        <Header toggleLoginModal={this.toggleLoginModal} logoutUser={this.logoutUser} currentUser={this.state.currentUser} />
        {error && <h2>{error}</h2>}
        <MovieSection movies={movies} />
        {showLoginModal && <Login toggleLoginModal={this.toggleLoginModal} changeUser={this.changeUser} />}
      </div>
    );
  }
}

export default App;
