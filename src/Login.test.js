import React from 'react';
import Login from './Login';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Login Component', () => {
  beforeEach(() => {

  });
  it('Should have the correct content when rendered', () => {
    render(<Login toggleLoginModal={jest.fn()} changeUser={jest.fn()} />);

    const loginHeader = screen.getByRole('heading', { name: 'Login' });
    const usernameLabel = screen.getByRole('textbox', { name: 'username:' });
    const submitButton = screen.getByRole('button', { name: 'Submit' })

    expect(loginHeader).toBeInTheDocument();
    expect(usernameLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
})
