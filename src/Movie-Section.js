import React from 'react';
import MovieCard from './Movie-Card';
import './Movie-Section.css';

const MovieSection = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />;
  });

  return (
    <section className='movies-section'>
      <h2 className='movies-section-header'>Movies</h2>
      <div className='movies-section-container'>{movieCards}</div>
    </section>
  );
};

export default MovieSection;
