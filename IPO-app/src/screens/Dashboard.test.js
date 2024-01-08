import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IPOCalendar from './IPOCalendar'; // Replace with your actual path

describe('<IPOCalendar />', () => {
  it('renders IPO data correctly', () => {
    // Mock IPO data (replace this with a realistic mock based on your component structure)
    const mockIPOData = [
      { id: 1, companyName: 'Company A', updated: '2024-01-08', shares: 100, volume: 500 },
      // Add more mock data as needed
    ];

    // Render the component with mock data
    const { getAllByText } = render(<IPOCalendar ipoData={mockIPOData} />);
    
    // Check if the IPO data is present in the component
    const companyNameElements = getAllByText(/Company/);
    expect(companyNameElements).toHaveLength(mockIPOData.length);
    // Add more assertions based on your component's structure and rendered data
  });

  // Add more test cases as needed
});
