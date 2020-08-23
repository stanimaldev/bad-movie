import React, { Component } from 'react';
import MovieCard from './Movie-Card';
import './Movie-Section.css';

class MovieSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const movieCards = this.props.movies.map((movie) => {
      return <MovieCard movie={movie} currentUser={this.props.currentUser} key={movie.id} changeMovieSelected={this.props.changeMovieSelected} />;
    });

    return (
      <section className='movies-section'>
        <h2 className='movies-section-header'>Movies</h2>
        <div className='movies-section-container'>{movieCards}</div>
      </section>
    );
  }
}

export default MovieSection;
