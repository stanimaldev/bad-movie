import React, { Component } from 'react';
import './Movie-Page.css';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingInput: 10,
    };
  }

  getUserMovieRating = () => {
    return this.props.currentUser.ratings.find((rating) => {
      return this.props.movie.id === rating.movie_id;
    });
  };

  updateRatingInput = (event) => {
    this.setState({ ratingInput: event.target.value });
  };

  rateMovieForUser = () => {
    this.props.rateMovie(this.state.ratingInput, this.props.movie.id);
  };

  deleteMyRating = () => {
    this.props.deleteMovieRating(this.getUserMovieRating().id);
  }

  render() {
    const { movie, toggleMoviePage, currentUser } = this.props;
    let currentUsersRating;
    if(currentUser) {
      currentUsersRating = this.getUserMovieRating();
    }
    return (
      <section className='movie-page' style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
        <button className='movie-page-back-button' onClick={toggleMoviePage}>
          Back
        </button>
        <article className='movie-descriptions'>
          <h2 className='movie-description-title'>{movie.title}</h2>
          <h3 className='movie-description-tagline'>{movie.tagline}</h3>
          <p className='movie-description-overview'>{movie.overview}</p>
          <p className='movie-description-stats'>
            Budget: {movie.budget} dollars<br></br>Runtime: {movie.runtime} minutes
          </p>
          <p className='movie-description-ratings'> Average Rating: {Math.round(movie.average_rating * 10) / 10}/10</p>
        </article>
        {currentUser && (
          <aside className='movie-page-rating-card'>
            {currentUsersRating && (
              <div>
                <h2 className='rating-card-title'>My Ratings</h2>
                <p className='rating-card-user-rating'>{currentUsersRating.rating}/10</p>
                <button className='delete-button' onClick={this.deleteMyRating}>Delete</button>
              </div>
            )}
            {!currentUsersRating && (
              <div>
                <h2>Rate This Movie</h2>
                <label htmlFor='my-rating' className='my-rating'>
                  My Rating: {this.state.ratingInput}
                </label>
                <input type='range' id='my-rating' name='my-rating' min='1' max='10' onChange={this.updateRatingInput}></input>
                <button className='add-rating-button' onClick={this.rateMovieForUser}>
                  Rate!
                </button>
              </div>
            )}
          </aside>
        )}
      </section>
    );
  }
}

export default MoviePage;
