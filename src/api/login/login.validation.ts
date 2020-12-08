/* eslint-disable no-useless-escape */
import { Validation } from '../validation';
import { LoginRequestData } from './login.types';

export class LoginValidation extends Validation<LoginRequestData> {
  private validatePassword(): boolean {
    return this.data.password.length >= 6;
  }
  private validateEmail(): boolean {
    const filter = /^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9_\.\-])+$/;
    return filter.test(this.data.email);
  }
  public validate() {
    return this.validatePassword() && this.validateEmail();
  }
}
