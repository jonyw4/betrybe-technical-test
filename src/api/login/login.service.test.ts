import { LoginService } from './';

describe('api > login > service', () => {
  it('should login and return a valid token', async () => {
    const validation = new LoginService().login('test.com', '123456');
    expect(validation.token.length).toBe(16);
  });
  it('should check if token is valid and returns true', () => {
    expect(LoginService.checkToken('0000000000000000')).toBe(true);
  });
  it('should check if token is valid and returns false', () => {
    expect(LoginService.checkToken('000000000000')).toBe(false);
  });
});
