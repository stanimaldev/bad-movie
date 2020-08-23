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
      showMovieSection: true,
      movieSelected: false,
    };
    this.fetch = new Fetch();
  }

  toggleLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };

  changeUser = (userData) => {
    this.toggleLoginModal();
    this.setState({ currentUser: userData });
  };

  logoutUser = () => {
    this.setState({ currentUser: false });
  };

  displayMoviePage = () => {
    this.setState({ showMoviePage: !this.state.showMoviePage, showMovieSection: !this.state.showMovieSection });
  };

  changeMovieSelected = (movie) => {
    this.setState({ movieSelected: movie});
    this.displayMoviePage();
  }

  displayHomePage = () => {
    this.setState({ showMoviePage: !this.state.showMoviePage, showMovieSection: !this.state.showMovieSection });
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
    const { movies, error, showMovieSection, showLoginModal, showMoviePage } = this.state;
    return (
      <div className='App'>
        <Header toggleLoginModal={this.toggleLoginModal} logoutUser={this.logoutUser} currentUser={this.state.currentUser} />
        {error && <h2>{error}</h2>}
        {showMovieSection && <MovieSection movies={movies} changeMovieSelected={this.changeMovieSelected} />}
        {showMoviePage && <MoviePage movie={this.state.movieSelected} displayHomePage={this.displayHomePage} />}
        {showLoginModal && <Login toggleLoginModal={this.toggleLoginModal} changeUser={this.changeUser} />}
      </div>
    );
  }
}

export default App;
