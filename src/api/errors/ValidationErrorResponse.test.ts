import { createResponse } from 'node-mocks-http';
import { ValidationErrorResponse } from './ValidationErrorResponse';

describe('api > errors > ValidationErrorResponse', () => {
  it('should return a valid valiation error response', () => {
    const res = createResponse();

    // @ts-ignore
    new ValidationErrorResponse(res);

    const data = res._getJSONData();
    expect(res._getStatusCode()).toBe(400);
    expect(data.message).toBe('Campos inválidos');
  });
});
