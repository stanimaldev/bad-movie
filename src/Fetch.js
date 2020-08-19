class Fetch {
  constructor() {
    this.allMovies = [];
  }
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => {
        this.allMovies = data.movies;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Fetch;
