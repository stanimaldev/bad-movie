import React from 'react';
import './Movie-Section.css';

const MovieSection = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return (
      <article>
        <h3>Title</h3>
        <p>Rating</p>
      </article>
    );
  });

  return (
    <section>
      <h2 className='movies-section-header'>Movies</h2>
      <div className='movies-section'>{movieCards}</div>
    </section>
  );
};

export default MovieSection;
