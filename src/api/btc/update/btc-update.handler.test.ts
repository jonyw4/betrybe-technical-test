import { createMocks } from 'node-mocks-http';
import { btcUpdateHandler } from '.';
import { BtcService } from '../btc.service';

describe('api > btc > update > handler', () => {
  it('should try to update currency values and return with success', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      headers: {
        authorization: '0000000000000000'
      },
      body: {
        currency: 'BRL',
        value: 6
      }
    });
    // @ts-ignore
    await btcUpdateHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().message).toBeDefined();
  });
  it('should try to update currency values with wrong currency and return error', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      headers: {
        authorization: '0000000000000000'
      },
      body: {
        currency: 'TEST',
        value: 6
      }
    });
    // @ts-ignore
    await btcUpdateHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toBe('Moeda inválida');
  });
  it('should try to update currency values with wrong value and return error', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      headers: {
        authorization: '0000000000000000'
      },
      body: {
        currency: 'BRL',
        value: '12312312'
      }
    });
    // @ts-ignore
    await btcUpdateHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toBe('Valor inválido');
  });
  it('should try to update currency values without authentication and return error', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        currency: 'BRL',
        value: '12312312'
      }
    });
    // @ts-ignore
    await btcUpdateHandler(req, res);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe('Token inválido');
  });
  afterAll(async () => {
    await new BtcService().updateCurrency('BRL', 5.4);
  });
});
