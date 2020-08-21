import React from 'react';
import MovieSection from './Movie-Section';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Movie-Section Component', () => {
  it('Should have the correct content when rendered', () => {
    render (<MovieSection
      movies={[]}
      />)

      const moviesTitle = screen.getByText("Movies")

      expect(moviesTitle).toBeInTheDocument();
  });
})
