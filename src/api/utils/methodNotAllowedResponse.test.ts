import { createMocks } from 'node-mocks-http';
import { methodNotAllowedResponse } from './methodNotAllowedResponse';

describe('api > utils > methodNotAllowedResponse', () => {
  it('should return status code 405', () => {
    const { req, res } = createMocks();

    // @ts-ignore
    methodNotAllowedResponse(['POST'], req, res);
    expect(res._getStatusCode()).toBe(405);
  });
});
