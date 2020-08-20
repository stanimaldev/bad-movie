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
    };
    this.fetch = new Fetch();
  }

  toggleLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };

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
        <Header toggleLoginModal={this.toggleLoginModal} />
        {error && <h2>{error}</h2>}
        <MovieSection movies={movies} />
        {showLoginModal && <Login toggleLoginModal={this.toggleLoginModal} />}
      </div>
    );
  }
}

export default App;
