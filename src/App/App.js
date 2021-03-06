import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import MovieSection from '../Movie-Section/Movie-Section';
import { getUsersRatings, getAllMovies, addRatingForUser,   deleteRatingForUser } from '../Fetch';
import MoviePage from '../Movie-Page/Movie-Page';

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
  }

  toggleLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };

  changeUser = (userData) => {
    this.toggleLoginModal();
    this.updateUsersRatings(userData)
  };

  rateMovie = (ratingInput, movieId) => {
    const postingUser = this.state.currentUser;
    addRatingForUser(postingUser.id, movieId, ratingInput).then((rating) => {this.updateUsersRatings(this.state.currentUser)
    });
  };

  deleteMovieRating = async (ratingId) => {
    const deletingUser = this.state.currentUser;
    await deleteRatingForUser(deletingUser.id, ratingId);
    this.updateUsersRatings(this.state.currentUser)
  }

  updateUsersRatings = (userData) => {
    getUsersRatings(userData.id).then((userRatings) => {
      userData.ratings = userRatings;
      this.setState({ currentUser: userData });
    });
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
    getAllMovies()
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
        {showMoviePage && <MoviePage movie={this.state.movieSelected} toggleMoviePage={this.toggleMoviePage} currentUser={currentUser} rateMovie={this.rateMovie} deleteMovieRating={this.deleteMovieRating} />}
        {showLoginModal && <Login toggleLoginModal={this.toggleLoginModal} changeUser={this.changeUser} />}
      </div>
    );
  }
}

export default App;
