import { createMocks } from 'node-mocks-http';
import { notFoundHandler } from './notFound.handler';

describe('api > notFoundHandler', () => {
  it('should return an not found page', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });
    // @ts-ignore
    await notFoundHandler(req, res);
    expect(res._getStatusCode()).toBe(404);
    expect(res._getJSONData().message).toBeDefined();
  });
});
