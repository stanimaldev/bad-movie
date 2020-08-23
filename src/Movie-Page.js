import React, { Component } from 'react';
import './Movie-Page.css';
import Fetch from './Fetch';

const MoviePage = ( { movie } ) => {
  return (
    <section className='movie-page' style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
      <button className='movie-page-back-button'>Back</button>
      <article className='movie-descriptions'>
        <h2 className='movie-description-title'>{movie.title}</h2>
        <h3 className='movie-description-tagline'>{movie.tagline}</h3>
        <p className='movie-description-overview'>{movie.overview}</p>
        <p className='movie-description-stats'>
          Budget: {movie.budget} dollars<br></br>Runtime: {movie.runtime} minutes
        </p>
      </article>
      <aside className='movie-page-rating-card'>
        <h2 className='rating-card-title'>Ratings</h2>
        <p className='rating-card-ratings'>
          Average Rating: {movie.average_rating}/10<br></br>My Rating: 0/10
        </p>
      </aside>
    </section>
  );
};

export default MoviePage;
