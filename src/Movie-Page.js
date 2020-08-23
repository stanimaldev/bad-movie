import React, { Component } from 'react';
import './Movie-Page.css';
import Fetch from './Fetch';

const MoviePage = ( { movie } ) => {
  // console.log(movie)
  // const movie = {
  //   title: movie.title,
  //   poster_path: 'https://image.tmdb.org/t/p/original//5KlRFKKSbyCiyYpZSS3A6G5bW0K.jpg',
  //   backdrop_path: 'https://image.tmdb.org/t/p/original//qZ4NYuwME0j6QgJmIE6AZMgmCaj.jpg',
  //   release_date: '1988-07-16',
  //   overview: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.',
  //   genres: ['Science Fiction', 'Animation'],
  //   budget: 10000000,
  //   revenue: 0,
  //   runtime: 124,
  //   tagline: 'Neo-Tokyo is about to E.X.P.L.O.D.E.',
  //   average_rating: 9,
  // };

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
