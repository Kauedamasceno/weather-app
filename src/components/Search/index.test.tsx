import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi, expect, Mock } from 'vitest';
import Search from './';
import { AppContext } from '../../Context/SearchContext';
import { useSearchWeather } from '../../hooks/useFetchCurrent'; // Mock this hook

// Mock the useSearchWeather hook
vi.mock('../../hooks/useFetchCurrent.ts', () => ({
  useSearchWeather: vi.fn(),
}));

describe('Search component', () => {
  it('should call useSearchWeather and setSearch when form is submitted', async () => {
    // Mock implementation of useSearchWeather to return fake data
    const mockWeatherData = { /* your mock weather data */ };
    (useSearchWeather as Mock).mockResolvedValue(mockWeatherData);

    // Render the component with context
    render(
      <AppContext>
        <Search />
      </AppContext>
    );

    // Get the input and button elements
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');

    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: 'New York' } });

    // Simulate clicking the button
    fireEvent.click(buttonElement);

    // Wait for the mock function to be called
    await waitFor(() => {
      expect(useSearchWeather).toHaveBeenCalledWith({ searchInput: 'New York' });
    });

    // Optionally, you can check if setSearch was called (you would need to spy on the context)
  });
});