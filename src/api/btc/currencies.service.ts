import { Currencies, CurrenciesExchanges } from './types';
import currenciesExchanges from './currencies.json';

export class CurrenciesService {
  public getCurrencies(): Currencies[] {
    return Object.keys(currenciesExchanges).map((c) => c as Currencies);
  }
  public getCurrenciesExchanges(): CurrenciesExchanges {
    return currenciesExchanges;
  }
  // public updateCurrencyExchange(currency: Currencies, value: number): boolean {}
}
