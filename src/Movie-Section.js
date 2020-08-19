import React from 'react';

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
    <section className='movies-section'>
      <h2>Movies</h2>
      {movieCards}
    </section>
  );
};

export default MovieSection;
