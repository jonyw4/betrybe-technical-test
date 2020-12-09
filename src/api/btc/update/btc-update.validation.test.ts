import { BtcUpdateValidator } from './';
import { ValidationResponseError } from '../../validation';

describe('api > login > validation', () => {
  it('should validate an correct input and return true', async () => {
    const validation = await new BtcUpdateValidator({
      currency: 'BRL',
      value: 1
    }).validate();

    expect(validation.valid).toBe(true);
  });
  it('should validate an incorrect value and return true', async () => {
    const validation = (await new BtcUpdateValidator({
      currency: 'BRL',
      value: 1.21
    }).validate()) as ValidationResponseError;

    expect(validation.valid).toBe(false);
    expect(validation.handler).toBe('BtcValueValidationHandler');
  });
  it('should validate an incorrect currency and return true', async () => {
    const validation = (await new BtcUpdateValidator({
      currency: 'TEST',
      value: 1
    }).validate()) as ValidationResponseError;

    expect(validation.valid).toBe(false);
    expect(validation.handler).toBe('BtcCurrencyValidationHandler');
  });
});
