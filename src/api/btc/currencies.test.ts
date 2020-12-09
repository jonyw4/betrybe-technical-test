import { CurrenciesService } from './';

describe('api > btc > CurrencyService', () => {
  it('should return currencies', async () => {
    const response = await new CurrenciesService().getCurrencies();
    expect(Array.isArray(response)).toBe(true);
    expect(response.find((v) => v === 'BRL')).toBe('BRL');
  });
  it('should return currencies exchanges', async () => {
    const response = await new CurrenciesService().getCurrenciesExchanges();
    expect(response.BRL).toBe('5.400');
  });
  it('should update currencies exchanges', async () => {
    const response = await new CurrenciesService().updateCurrencyExchange(
      'BRL',
      6
    );
    const currencyExchanges = await new CurrenciesService().getCurrenciesExchanges();
    expect(response).toBe(true);
    expect(currencyExchanges.BRL).toBe('6.000');
  });
  afterAll(async () => {
    await new CurrenciesService().updateCurrencyExchange('BRL', 5.4);
  });
});
