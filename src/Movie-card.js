import React, { Component } from 'react';
import './Movie-Card.css';
import Fetch from './Fetch';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
    this.fetch = new Fetch();
  }

  getMovieToDisplay = (event) => {
    event.preventDefault();
    this.fetch.getSingleMovie(this.props.movie.id).then(({ data, error }) => {
      if (error) {
        this.setState({ error });
      } else {
        this.props.changeMovieSelected(data.movie);
      }
    });
  };

  render() {
    // let usersRating;
    const { currentUser, movie } = this.props;
    // if (currentUser) {
    //   usersRating = currentUser.find((rating) => {
    //     return;
    //   });
    // }
    return (
      <article className='movie-card' style={{ backgroundImage: `url(${movie.poster_path})` }} alt={`background image of ${movie.title} poster`} onClick={this.getMovieToDisplay}>
        {this.state.error && <p>Sorry, no movie details to display.</p>}
        <p className='movie-card-rating'>{movie.average_rating}/10</p>
      </article>
    );
  }
}

export default MovieCard;
