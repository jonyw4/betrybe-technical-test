import type { NextApiHandler } from 'next';
import { LoginService } from './login.service';
import { LoginValidation } from './login.validation';
import { ValidationErrorResponse } from '../errors';
import { jsonResponse } from '../utils';

export const loginHandler: NextApiHandler = (req, res) => {
  if (req.method === 'POST') {
    const data = {
      email: req.body.email,
      password: req.body.password
    };

    const validation = new LoginValidation(data).validate();

    if (!validation) {
      new ValidationErrorResponse(res);
      return;
    }

    const token = new LoginService().login(data.email, data.password);

    jsonResponse(res, 200, token);
  }
};
