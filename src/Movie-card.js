import React from 'react';
import './Movie-Card.css';

const MovieCard = ({ movie }) => {
  return (
    <article className='movie-card' style={{ backgroundImage: `url(${movie.poster_path})` }}>
      <h3 className='movie-card-title'>{movie.title}</h3>
      <p className='movie-card-rating'>{movie.average_rating}</p>
    </article>
  );
};

export default MovieCard;
