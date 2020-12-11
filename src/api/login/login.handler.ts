import type { NextApiHandler } from 'next';
import { LoginService } from './login.service';
import { LoginValidator } from './login.validation';
import { LoginResponseData } from './login.types';
import { ValidationErrorResponse } from '../errors';
import { jsonResponse, methodNotAllowedResponse } from '../utils';

/**
 * Default response for login request
 */
export type LoginHandlerResponse = LoginResponseData;

export const loginHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const data = {
      email: req.body.email,
      password: req.body.password
    };

    const validation = await new LoginValidator(data).validate();

    if (!validation.valid) {
      new ValidationErrorResponse(res);
      return;
    }

    const token = new LoginService().login(data.email, data.password);

    jsonResponse<LoginHandlerResponse>(res, 200, token);
  } else {
    methodNotAllowedResponse(['POST'], req, res);
  }
};
