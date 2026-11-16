import { Country, RawCountry } from '../types';

export function mapCountryResponse(raw: RawCountry): Country;
export function mapCountryResponse(raw: RawCountry[]): Country[];

export function mapCountryResponse(raw: RawCountry | RawCountry[]): Country | Country[] {
  if (Array.isArray(raw)) {
    return raw.map((item) => mapCountryResponse(item) as Country);
  }

  return {
    name: raw.name || 'Unknown',
    flag: raw.flags?.svg || raw.flags?.png || raw.flag || '',
    capital: raw.capital || 'N/A',
    region: raw.region || 'N/A',
    population: raw.population ?? 0,
    area: raw.area ?? 0,
    languages: raw.languages?.map((l) => l.name || '') ?? [],
    currencies:
      raw.currencies?.map((c) =>
        c.name && c.symbol ? `${c.name} (${c.symbol})` : c.name || c.code || '',
      ) ?? [],
    borders: raw.borders || [],
  };
}
