import { CoindeskService } from './coindesk.service';

describe('api > utils > coindesk', () => {
  it('should get currentPriceBtc', async () => {
    const prices = await new CoindeskService().getCurrentPriceBTC();
    expect(prices.bpi.BTC.code).toBe('BTC');
    expect(prices.bpi.USD.code).toBe('USD');
  });
});
