import React from 'react';
import './Movie-Card.css';

const MovieCard = ({ movie }) => {
  return (
    <article className='movie-card' style={{ backgroundImage: `url(${movie.poster_path})` }} alt={`background image of ${movie.title} poster`}>
      <p className='movie-card-rating'>{movie.average_rating}/10</p>
    </article>
  );
};

export default MovieCard;
