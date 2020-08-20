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
      movies: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        < Header />
        {/*< Login />*/}
        < MovieSection movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
