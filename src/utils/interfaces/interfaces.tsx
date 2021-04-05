/**
 * @description TypeScript interfaces
 */
export interface CurrencyRatesData {
  currencyRates: {
    timestamp: number
    base: string,
    rates: (Rates)[];
  };
}

export interface Rates {
  USD: number,
  EUR: number,
  BRL: number,
  GBP: number,
  AUD: number
}

export interface QueryVars {
  code: string;
}
