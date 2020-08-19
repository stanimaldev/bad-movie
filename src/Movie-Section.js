import React from 'react';
import MovieCard from './Movie-card';
import './Movie-Section.css';

const MovieSection = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return <MovieCard movie={movie} />;
  });

  return (
    <section className='movies-section'>
      <h2 className='movies-section-header'>Movies</h2>
      <div className='movies-section-container'>{movieCards}</div>
    </section>
  );
};

export default MovieSection;
