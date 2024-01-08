import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import CurrencyExchange from './CurrencyExchange'; // Replace with your actual path

jest.mock('axios');

describe('<CurrencyExchange />', () => {
  it('displays loading state initially', async () => {
    axios.get.mockResolvedValueOnce({ data: { rates: { USD: 1.23, EUR: 0.89 } } });

    const { getByText } = render(<CurrencyExchange />);

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeTruthy();

    await waitFor(() => {
      expect(loadingText).not.toBeInTheDocument(); // Loading text should disappear after data is loaded
    });
  });

  it('renders exchange rates correctly', async () => {
    axios.get.mockResolvedValueOnce({ data: { rates: { USD: 1.23, EUR: 0.89 } } });

    const { getByText } = render(<CurrencyExchange />);

    await waitFor(() => {
      const usdRateText = getByText('USD: 1.23');
      const eurRateText = getByText('EUR: 0.89');

      expect(usdRateText).toBeTruthy();
      expect(eurRateText).toBeTruthy();
    });
  });

  it('handles API error', async () => {
    const errorMessage = 'Failed to fetch exchange rates';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const { getByText } = render(<CurrencyExchange />);

    const errorText = await waitFor(() => getByText(errorMessage));
    expect(errorText).toBeTruthy();
  });


});
