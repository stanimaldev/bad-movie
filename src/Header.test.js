import React from 'react';
import Header from './Header';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('Should have the correct content when rendered without a current User', () => {
    render(<Header currentUser={false} toggleLoginModal={jest.fn()} logoutUser={jest.fn()} />);

    const badMovieTitle = screen.getByText('Bad Movie');
    const badMovieLogo = screen.getByAltText('Bad Movie Logo');
    const loginButton = screen.getByText('Login');

    expect(badMovieTitle).toBeInTheDocument();
    expect(badMovieLogo).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('Should fire a function when the login button is clicked', () => {
    const mockToggleLogin = jest.fn();
    render(<Header currentUser={false} toggleLoginModal={mockToggleLogin} logoutUser={jest.fn()} />);

    const button = screen.getByText('Login');
    fireEvent.click(button);

    expect(mockToggleLogin).toBeCalledTimes(1);
  });
});
