import { describe, it, expect, vi } from 'vitest';
import { DateNow } from '../hooks/useDate'; // Adjust this import path to your file

describe('DateNow function', () => {
  it('should return the formatted date and time string', () => {
    // Mock Date to a fixed date
    const mockDate = new Date(2024, 8, 15, 14, 5); // September 15, 2024 14:05 (2:05 PM)
    vi.setSystemTime(mockDate);

    const result = DateNow();
    expect(result).toBe('14:05 - Sunday,15 Sep ´24');

    // Restore original Date
    vi.useRealTimers();
  });

  it('should return the formatted date and time string with 04:05',() => {
    const mockDate = new Date(2024,8,15,4,5);
    vi.setSystemTime(mockDate);

    const result = DateNow();
    expect(result).toBe('04:05 - Sunday,15 Sep ´24');
  })
  
});