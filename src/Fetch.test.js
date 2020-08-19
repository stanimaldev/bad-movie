import chai from 'chai';
const expect = chai.expect;
import Fetch from './Fetch';
const spies = require('chai-spies');
chai.use(spies);

describe('Fetch', () => {
  let fetch, allMovies;
  before(() => {
    // allMovies = [
    //   {
    //     id: 1,
    //     poster_path: 'https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg',
    //     backdrop_path: 'https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg',
    //     title: 'Greenland',
    //     average_rating: 9,
    //     release_date: '2020-07-29',
    //   },
    //   {
    //     id: 2,
    //     poster_path: 'https://image.tmdb.org/t/p/original//eDnHgozW8vfOaLHzfpHluf1GZCW.jpg',
    //     backdrop_path: 'https://image.tmdb.org/t/p/original//u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg',
    //     title: 'Archive',
    //     average_rating: 4,
    //     release_date: '2020-08-13',
    //   },
    // ];
  });

  beforeEach(() => {
    global.fetch = () => {
      return Promise;
    };
    Promise.then = () => {
      return Promise;
    };
    Promise.catch = () => {
      return Promise;
    };
    chai.spy.on(global, ['fetch']);
    fetch = new Fetch();
  });

  it('should be a function', () => {
    expect(Fetch).to.be.a('function');
  });

  it('should be an instance of the Fetch Class', () => {
    expect(fetch).to.be.an.instanceOf(Fetch);
  });

  it('should call fetch once when getting all movies', () => {
    fetch.getAllMovies();
    expect(global.fetch).to.have.been.called(1);
  });

  it('should be called with the correct arguments when getting all movies', () => {
    fetch.getAllMovies();
    const apiUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
    expect(global.fetch).to.have.been.called.with(apiUrl);
  });

  it('should be able to get all movies', () => {
    fetch.getAllMovies();
    expect(fetch.allMovies).to.eql(allMovies);
  });
});
