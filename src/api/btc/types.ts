import currenciesExchanges from './currencies.json';

export type CurrenciesExchanges = typeof currenciesExchanges;
export type Currencies = keyof CurrenciesExchanges;
