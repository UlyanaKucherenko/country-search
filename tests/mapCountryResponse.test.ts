import { describe, it, expect } from 'vitest';
import { mapCountryResponse } from '../src/core/mapCountryResponse';
import { mockRawSpain, mockRawCountries } from '../src/consts';

describe('mapCountryResponse', () => {
  it('should map a single country raw object', () => {
    const result = mapCountryResponse(mockRawSpain);
    expect(result.name).toBe('Spain');
  });

  it('should map an array of countries', () => {
    const results = mapCountryResponse(mockRawCountries);
    expect(results).toHaveLength(2);
    expect(results[0].name).toBe('Spain');
    expect(results[1].name).toBe('France');
  });

  it('should return empty array', () => {
    const results = mapCountryResponse([]);
    expect(results).toEqual([]);
  });

  it('empty object with default values', () => {
    const result = mapCountryResponse({});
    expect(result.name).toBe('Unknown');
  });
});
