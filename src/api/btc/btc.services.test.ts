import { BtcService } from './';
import currencies from './currencies.json';
describe('api > btc > service', () => {
  it('should  get current price BTC values with success', async () => {
    const response = await new BtcService().getCurrentPriceBTC();
    expect(response.bpi.BRL.rate_float).toBe(
      response.bpi.USD.rate_float * Number(currencies.BRL)
    );
    expect(response.bpi.CAD.rate_float).toBe(
      response.bpi.USD.rate_float * Number(currencies.CAD)
    );
    expect(response.bpi.EUR.rate_float).toBe(
      response.bpi.USD.rate_float * Number(currencies.EUR)
    );
  });
});
