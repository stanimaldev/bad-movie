class Fetch {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => {
        return data.movies;
      });
  }

  getSingleMovie(movieId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        return data.movie;
      });
  }

  getUsersRatings(userId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
      .then((response) => response.json())
      .then((data) => {
        return data.ratings;
      })
      .catch((err) => {
        return err;
      });
  }

  addRatingForUser(userId, movieId, ratingInt) {
    const stringyRating = JSON.stringify({ movie_Id: parseInt(movieId), rating: parseInt(ratingInt) });
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringyRating,
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        //We may want to refactor this if after we find out where we want to use these errors if we want to use them
        return err;
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
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty('error')) {
          throw new Error(data.error);
        }
        return { data, error };
      })
      .catch((error) => {
        return { data, error: error.message };
      });
  }
}

export default Fetch;
