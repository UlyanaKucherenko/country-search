import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from '../src/core/debounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should debounce a function', () => {
    const debounced = debounce(() => {}, 300);
    expect(typeof debounced).toBe('function');
  });

  it('should not call the function immediately', () => {
    const mockFn = vi.fn();
    const debounced = debounce(mockFn, 300);

    debounced();
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(299);
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should reset timer on every call', () => {
    const mockFn = vi.fn();
    const debounced = debounce(mockFn, 300);

    debounced();
    vi.advanceTimersByTime(200);
    debounced();
    vi.advanceTimersByTime(200);
    debounced();
    vi.advanceTimersByTime(200);

    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('calls with last arguments', () => {
    const mockFn = vi.fn();
    const debounced = debounce(mockFn, 300);

    debounced('s');
    debounced('sp');
    debounced('spain');

    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('spain');
  });
});
