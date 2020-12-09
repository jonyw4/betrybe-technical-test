import { Currencies, CurrenciesExchanges } from './types';
import fs from 'fs';
import path from 'path';

const FILE_PATH = 'currencies.json';

export class CurrenciesService {
  public async getCurrencies(): Promise<Currencies[]> {
    const currenciesExchanges = await this.getCurrenciesExchanges();
    return Object.keys(currenciesExchanges).map((c) => c as Currencies);
  }
  public async getCurrenciesExchanges(): Promise<CurrenciesExchanges> {
    const data = await fs.promises.readFile(
      path.resolve(__dirname, FILE_PATH),
      'utf8'
    );
    return JSON.parse(data.toString());
  }
  public async updateCurrencyExchange(
    currency: Currencies,
    value: number
  ): Promise<boolean> {
    const currenciesExchanges = await this.getCurrenciesExchanges();
    const data = {
      ...currenciesExchanges,
      [currency]: Number(value).toFixed(3)
    };
    try {
      await fs.promises.writeFile(
        path.resolve(__dirname, FILE_PATH),
        JSON.stringify(data)
      );
      return true;
    } catch {
      return false;
    }
  }
}
