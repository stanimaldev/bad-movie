import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import MovieSection from './Movie-Section';
import Fetch from './Fetch';
import MoviePage from './Movie-Page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      showLoginModal: false,
      currentUser: false,
      showMoviePage: false,
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

  displayMoviePage = () => {
    console.log("movie clicked")
    this.setState({ showMoviePage: !this.state.showMoviePage });
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
    const { movies, error, showLoginModal, showMoviePage } = this.state;
    return (
      <div className='App'>
        <Header toggleLoginModal={this.toggleLoginModal} logoutUser={this.logoutUser} currentUser={this.state.currentUser} />
        {error && <h2>{error}</h2>}
        <MovieSection movies={movies} />
        {showLoginModal && <Login toggleLoginModal={this.toggleLoginModal} changeUser={this.changeUser} displayMoviePage={this.displayMoviePage}/>}
        {showMoviePage && <MoviePage />}
      </div>
    );
  }
}

export default App;
