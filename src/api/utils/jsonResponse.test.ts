import { createResponse } from 'node-mocks-http';
import { jsonResponse } from './jsonResponse';

describe('api > utils > jsonResponse', () => {
  it('should return a valid JSON response', () => {
    const res = createResponse();

    // @ts-ignore
    jsonResponse(res, 400, { response: 'test response' });

    const data = res._getJSONData();
    expect(res._getStatusCode()).toBe(400);
    expect(data.response).toBe('test response');
    expect(res._getHeaders()['content-type']).toBe('application/json');
  });
});
