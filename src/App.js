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
    this.getUsersRatings(userData.id).then((userRatings) => {
      userData.ratings = userRatings;
      this.setState({ currentUser: userData });
    });
  };

  getUsersRatings = (userId) => {
    return this.fetch.getUsersRatings(userId);
  };

  logoutUser = () => {
    this.setState({ currentUser: false });
  };

  changeMovieSelected = (movie) => {
    this.setState({ movieSelected: movie });
    this.toggleMoviePage();
  };

  toggleMoviePage = () => {
    this.setState({ showMoviePage: !this.state.showMoviePage, showMovieSection: !this.state.showMovieSection });
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
    const { currentUser, movies, error, showMovieSection, showLoginModal, showMoviePage } = this.state;
    return (
      <div className='App'>
        <Header toggleLoginModal={this.toggleLoginModal} logoutUser={this.logoutUser} currentUser={this.state.currentUser} />
        {error && <h2>{error}</h2>}
        {showMovieSection && <MovieSection movies={movies} changeMovieSelected={this.changeMovieSelected} currentUser={currentUser} />}
        {showMoviePage && <MoviePage movie={this.state.movieSelected} toggleMoviePage={this.toggleMoviePage} />}
        {showLoginModal && <Login toggleLoginModal={this.toggleLoginModal} changeUser={this.changeUser} />}
      </div>
    );
  }
}

export default App;
