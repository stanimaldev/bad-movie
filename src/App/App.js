import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import MovieSection from '../Movie-Section/Movie-Section';
import { getUsersRatings, getAllMovies, addRatingForUser } from '../Fetch';
import MoviePage from '../Movie-Page/Movie-Page';
import { Route } from 'react-router-dom'

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
    getUsersRatings(userData.id).then((userRatings) => {
      userData.ratings = userRatings;
      this.setState({ currentUser: userData });
    });
  };

  rateMovie = (ratingInput, movieId) => {
    const postingUser = this.state.currentUser;
    addRatingForUser(postingUser.id, movieId, ratingInput).then((ratingObject) => {
      postingUser.ratings.push(ratingObject);
      this.setState({ currentUser: postingUser });
    });
  };

  getUsersRatings = (userId) => {
    return getUsersRatings(userId);
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

        <Route
          exact
          path='/'
          render={() => {
            return <div>
              <Header toggleLoginModal={this.toggleLoginModal} logoutUser={this.logoutUser} currentUser={this.state.currentUser} />
              {error && <h2>{error}</h2>}
              <MovieSection movies={movies} changeMovieSelected={this.changeMovieSelected} currentUser={currentUser} />
            </div>
          }}
        />

        {showMoviePage && <MoviePage movie={this.state.movieSelected} toggleMoviePage={this.toggleMoviePage} currentUser={currentUser} rateMovie={this.rateMovie} />}
        {showLoginModal && <Login toggleLoginModal={this.toggleLoginModal} changeUser={this.changeUser} />}
      </div>
    );
  }
}

export default App;
