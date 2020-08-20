import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Login from "./Login";
import MovieSection from "./Movie-Section"
import Fetch from "./Fetch"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    };
    this.fetch = new Fetch();
  }

  componentDidMount() {
    this.fetch.getAllMovies()
      .then(movies => {
        this.setState({movies: movies})
        }
      )
      .catch(err => {
        this.setState({error: 'We\'re Sorry Something Went Wrong Try Again Later'})
      })
  }

  render() {
    return (
      <div className="App">
        < Header />
        {/*< Login />*/}
        {this.state.error && <h2>{this.state.error}</h2>}
        < MovieSection movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
