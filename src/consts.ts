import { RawCountry } from './types';

export const mockRawSpain: RawCountry = {
  name: 'Spain',
  flag: '🇪🇸',
  flags: {
    svg: 'https://flagcdn.com/es.svg',
    png: 'https://flagcdn.com/w320/es.png',
  },
  capital: 'Madrid',
  region: 'Europe',
  subregion: 'Southern Europe',
  population: 47351567,
  area: 505992,
  languages: [
    {
      name: 'Spanish',
      iso639_1: 'es',
      iso639_2: 'spa',
      nativeName: 'Español',
    },
  ],
  currencies: [
    {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
    },
  ],
  borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
};

export const mockRawFrance: RawCountry = {
  name: 'France',
  flag: '🇫🇷',
  flags: {
    png: 'https://flagcdn.com/w320/fr.png',
    svg: 'https://flagcdn.com/fr.svg',
  },
  capital: 'Paris',
  region: 'Europe',
  subregion: 'Western Europe',
  population: 67391582,
  area: 640679,
  languages: [
    {
      name: 'French',
      iso639_1: 'fr',
      iso639_2: 'fra',
      nativeName: 'français',
    },
  ],
  currencies: [
    {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
    },
  ],
  borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
};

export const mockRawCountries: RawCountry[] = [mockRawSpain, mockRawFrance];
