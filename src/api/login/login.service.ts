import { LoginResponseData } from './login.types';
import crypto from 'crypto';

export class LoginService {
  /**
   * Token de 16 caracteres, contendo letras e números aleatórios
   */
  private generateToken(email: string, password: string) {
    return crypto.randomBytes(8).toString('hex');
  }
  public static checkToken(token: string): boolean {
    return token.length === 16;
  }
  public login(email: string, password: string): LoginResponseData {
    return {
      token: this.generateToken(email, password)
    };
  }
}
