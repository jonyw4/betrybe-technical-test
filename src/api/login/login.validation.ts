/* eslint-disable no-useless-escape */
import { ValidationHandler, Validator } from '../validation';
import { LoginRequestData } from './login.types';

class LoginEmailValidationHandler extends ValidationHandler<LoginRequestData> {
  public async handle() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9_\.\-])+$/;
    return filter.test(this.data.email);
  }
}

class LoginPasswordValidationHandler extends ValidationHandler<LoginRequestData> {
  public async handle() {
    const filter = new RegExp('^[0-9]{6,6}$');
    return filter.test(this.data.password);
  }
}

export class LoginValidator extends Validator<LoginRequestData> {
  constructor(data: LoginRequestData) {
    super(data, [LoginEmailValidationHandler, LoginPasswordValidationHandler]);
  }
}
