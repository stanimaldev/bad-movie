import React from 'react';
import MoviePage from './Movie-Page';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  let movieSelected
  beforeEach(() => {
    movieSelected = {
        id: 1,
        title: "Akira",
        poster_path: "https://image.tmdb.org/t/p/original//5KlRFKKSbyCiyYpZSS3A6G5bW0K.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//qZ4NYuwME0j6QgJmIE6AZMgmCaj.jpg",
        release_date: "1988-07-16",
        overview: "A secret military project.",
        genres: [
            "Science Fiction",
            "Animation"
        ],
        budget: 10000000,
        revenue: 0,
        runtime: 100,
        tagline: "E.X.P.L.O.D.E.",
        average_rating: 6
    }
  });


  it('Should have the correct content when rendered without a current User', () => {
    render(<MoviePage movie={movieSelected} toggleMoviePage={jest.fn()} />);

    const backButton = screen.getByRole('button', { name: 'Back' });
    const movieTitle = screen.getByRole('heading', { name: 'Akira' });
    const movieTagline = screen.getByRole('heading', { name: 'E.X.P.L.O.D.E.' })
    const movieOverview = screen.getByText('A secret military project.')
    const movieRating = screen.getByRole('heading', { name: 'Ratings' })

    expect(movieTitle).toBeInTheDocument();
    expect(movieTagline).toBeInTheDocument();
    expect(movieOverview).toBeInTheDocument();
    expect(movieRating).toBeInTheDocument();
  });

  it('Should fire a function when the back button is clicked', () => {
    const mockToggleMoviePage = jest.fn();
    render(<MoviePage movie={movieSelected} toggleMoviePage={mockToggleMoviePage} />);

    const button = screen.getByText('Back');
    fireEvent.click(button);

    expect(mockToggleMoviePage).toBeCalledTimes(1);
  });

});
