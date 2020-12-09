import { createMocks } from 'node-mocks-http';
import { btcHandler, BtcService } from './';

describe('api > btc > handler', () => {
  it('should try to get bitcoin values and return with success', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });
    // @ts-ignore
    await btcHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().disclaimer).toBeDefined();
  });
  it('should try to update bitcoin values and return with success', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        currency: 'BRL',
        value: 6
      }
    });
    // @ts-ignore
    await btcHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().message).toBeDefined();
  });
  afterAll(async () => {
    await new BtcService().updateCurrency('BRL', 5.4);
  });
});
