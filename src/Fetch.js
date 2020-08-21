class Fetch {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => {
        return data.movies;
      });
  }

  loginUser(username, password) {
    let data, error;
    const stringyUser = JSON.stringify({ email: username, password });
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringyUser,
    }).then((response) => response.json())
      .then(data => {
        if(data.hasOwnProperty("error")) {
          throw new Error(data.error)
        }
        return {data, error}
      })
      .catch(error => {
        return {data, error: error.message}
      })
    }
}

export default Fetch;
