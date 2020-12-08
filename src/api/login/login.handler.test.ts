import { createMocks } from 'node-mocks-http';
import { loginHandler } from './';

describe('api > login > handler', () => {
  it('should try to request a valid login data and return an valid token', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'test@test.com',
        password: '123456'
      }
    });
    // @ts-ignore
    loginHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().token.length).toBe(16);
  });
  it('should try to request a invalid login data and return an validation error response', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'test@test.com',
        password: '1234'
      }
    });
    // @ts-ignore
    loginHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message.length).toBe('Campos inválidos');
  });
});
