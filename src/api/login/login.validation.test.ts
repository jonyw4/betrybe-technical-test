import { LoginValidator } from './';
import { ValidationResponseError } from '../validation';

describe('api > login > validation', () => {
  it('should validate an correct input and return true', async () => {
    const validation = new LoginValidator({
      email: 'test@test.com',
      password: '123456'
    }).validate();

    expect(validation.valid).toBe(true);
  });
  it('should validate an input with invalid password and return false', async () => {
    const validation = new LoginValidator({
      email: 'test@test.com',
      password: '123'
    }).validate() as ValidationResponseError;

    expect(validation.valid).toBe(false);
    expect(validation.handler).toBe('LoginPasswordValidationHandler');
  });
  it('should validate an input with invalid email and return false', async () => {
    const validation = new LoginValidator({
      email: 'test',
      password: '123456'
    }).validate() as ValidationResponseError;

    expect(validation.valid).toBe(false);
    expect(validation.handler).toBe('LoginEmailValidationHandler');
  });
});
