export interface RawFlags {
  svg?: string;
  png?: string;
}

export interface RawLanguage {
  name?: string;
  iso639_1?: string;
  iso639_2?: string;
  nativeName?: string;
}

export interface RawCurrency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface RawCountry {
  name?: string;
  flag?: string;
  flags?: RawFlags;
  capital?: string;
  region?: string;
  subregion?: string;
  population?: number;
  area?: number;
  languages?: RawLanguage[];
  currencies?: RawCurrency[];
  borders?: string[];
  [key: string]: unknown;
}

export interface Country {
  name: string;
  flag: string;
  capital: string;
  region: string;
  population: number;
  languages: string[];
  area: number;
  currencies: string[];
  borders: string[];
}
