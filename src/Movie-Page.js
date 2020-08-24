import React, { Component } from 'react';
import './Movie-Page.css';
import Fetch from './Fetch';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingInput: 5,
    };
    this.fetch = new Fetch();
  }

  render() {
    const { movie, toggleMoviePage, currentUser } = this.props;
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
          <p className='movie-description-ratings'> Average Rating: {movie.average_rating}/10</p>
        </article>
        {currentUser && (
          <aside className='movie-page-rating-card'>
            {/* <div>
            <h2 className='rating-card-title'>My Ratings</h2>
            <p className='rating-card-user-rating'>0/10</p>
          </div> */}
            {/* <div>
            <label for='my-rating' className='my-rating'>
              My Rating: {}
            </label>
            <input type='range' id='my-rating' name='my-rating' min='1' max='10' onChange={this.updateRatingInput}></input>
            <button className='add-rating-button' onClick={this.rateMovieForUser}></button>
          </div> */}
          </aside>
        )}
      </section>
    );
  }
}

export default MoviePage;
