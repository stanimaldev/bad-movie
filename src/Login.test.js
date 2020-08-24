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
  it('Should fire functions when the submit button is clicked', () => {
    const mockToggleLoginModal = jest.fn();
    const mockChangeUser = jest.fn();
    render(<Login toggleLoginModal={mockToggleLoginModal} changeUser={mockChangeUser} />);

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    fireEvent.click(submitButton);

    expect(onSubmit).toBeCalledTimes(1);
    expect(mockChangeUser).toBeCalledTimes(1)
  });
})
