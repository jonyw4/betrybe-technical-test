import currenciesExchanges from '../../../public/currencies.json';

export type CurrenciesExchanges = typeof currenciesExchanges;
export type Currencies = keyof CurrenciesExchanges;
