import React, { Component } from 'react';
import './Movie-Card.css';

// const MovieCard = ({ movie, displayMoviePage }) => {
//   return (
//     <article className='movie-card' style={{ backgroundImage: `url(${movie.poster_path})` }} alt={`background image of ${movie.title} poster`} onClick={displayMoviePage}>
//       <p className='movie-card-rating'>{movie.average_rating}/10</p>
//     </article>
//   );
// };

class MovieCard extends Component {
  constructor(props) {
    super(props) {

    }
  }

  getMovieToDisplay() {
    const movieId = this.fetch.getSingleMovie(movie.id);
    this.props.displayMoviePage;
  }

  render() {
    return (
      <article className='movie-card' style={{ backgroundImage: `url(${movie.poster_path})` }} alt={`background image of ${movie.title} poster`} onClick={this.getMovieToDisplay}>
      <p className='movie-card-rating'>{movie.average_rating}/10</p>
      </article>
    );
  }
};

export default MovieCard;
