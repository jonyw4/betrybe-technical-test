import { LoginService } from './';

describe('api > login > service', () => {
  it('should login and return a valid token', async () => {
    const validation = new LoginService().login('test.com', '123456');
    expect(validation.token.length).toBe(16);
  });
});
