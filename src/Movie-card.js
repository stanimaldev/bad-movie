import React from 'react';
// import './Movie-Section.css';

const MovieCard = ({ movie }) => {
  return (
    <article className='movie-card'>
      <h3 className='movie-card-title'>{movie.title}</h3>
      <p className='movie-card-rating'>{movie.average_rating}</p>
    </article>
  );
};

export default MovieCard;
