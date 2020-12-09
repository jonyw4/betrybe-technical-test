import { createMocks } from 'node-mocks-http';
import { btcHandler } from '.';

describe('api > btc > get > handler', () => {
  it('should try to get bitcoin values and return with success', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });
    // @ts-ignore
    await btcHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().disclaimer).toBeDefined();
  });
});
