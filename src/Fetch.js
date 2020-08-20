class Fetch {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => {
        return data.movies;
      });
  }

  loginUser(username, password) {
    const stringyUser = JSON.stringify({ email: username, password: password });
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringyUser,
    })
      .then((response) => response.json())
      .then((userData) => {
        return userData;
      });
  }
}

export default Fetch;
