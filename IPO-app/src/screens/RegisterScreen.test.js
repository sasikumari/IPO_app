import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from './RegisterScreen'; // Replace with your actual path

describe('<RegisterScreen />', () => {
  it('renders email, password, and username inputs', () => {
    const { getByPlaceholderText } = render(<RegisterScreen />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const usernameInput = getByPlaceholderText('Username');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(usernameInput).toBeTruthy();
  });

  it('executes signup process on button press', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };
    const { getByPlaceholderText, getByText } = render(<RegisterScreen navigation={mockNavigation} />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const usernameInput = getByPlaceholderText('Username');
    const signupButton = getByText('Sign Up');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.changeText(usernameInput, 'TestUser');
    fireEvent.press(signupButton);

    // Adjust 'Home' with the screen you navigate to after signup
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });

  it('displays an alert when any field is empty on signup', () => {
    const mockAlert = jest.spyOn(global, 'alert').mockImplementation(() => {});

    const { getByText } = render(<RegisterScreen />);
    const signupButton = getByText('Sign Up');

    fireEvent.press(signupButton);

    expect(mockAlert).toHaveBeenCalledWith('Please fill in all fields.');

    mockAlert.mockRestore();
  });

});
