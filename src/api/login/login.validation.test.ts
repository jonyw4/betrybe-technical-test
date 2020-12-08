import { LoginValidation } from './';

describe('api > login > validation', () => {
  it('should validate an correct input and return true', async () => {
    const validation = new LoginValidation({
      email: 'test@test.com',
      password: '123456'
    }).validate();

    expect(validation).toBe(true);
  });
  it('should validate an input with invalid password and return false', async () => {
    const validation = new LoginValidation({
      email: 'test@test.com',
      password: '123'
    }).validate();

    expect(validation).toBe(false);
  });
  it('should validate an input with invalid email and return false', async () => {
    const validation = new LoginValidation({
      email: 'test',
      password: '123456'
    }).validate();

    expect(validation).toBe(false);
  });
});
