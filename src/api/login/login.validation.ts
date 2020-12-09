/* eslint-disable no-useless-escape */
import { ValidationHandler, Validator } from '../validation';
import { LoginRequestData } from './login.types';

class LoginEmailValidationHandler extends ValidationHandler<LoginRequestData> {
  public handle() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9_\.\-])+$/;
    return filter.test(this.data.email);
  }
}

class LoginPasswordValidationHandler extends ValidationHandler<LoginRequestData> {
  public handle() {
    return this.data.password.length >= 6;
  }
}

export class LoginValidator extends Validator<LoginRequestData> {
  constructor(data: LoginRequestData) {
    super(data, [LoginEmailValidationHandler, LoginPasswordValidationHandler]);
  }
}
