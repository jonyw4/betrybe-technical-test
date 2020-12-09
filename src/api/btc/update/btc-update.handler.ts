import type { NextApiHandler } from 'next';
import { BtcService } from '../btc.service';
import { BtcUpdateValidator } from './btc-update.validation';
import { ValidationErrorResponse } from '../../errors';
import { jsonResponse } from '../../utils';
import { LoginService } from '../../login';

export const btcUpdateHandler: NextApiHandler = async (req, res) => {
  const token = req.headers.authorization;
  if (!token || !LoginService.checkToken(token)) {
    jsonResponse(res, 401, { message: 'Token inválido' });
    return;
  }

  const data = {
    currency: req.body.currency,
    value: req.body.value
  };

  const validation = await new BtcUpdateValidator(data).validate();
  if (validation.valid === false) {
    if (validation.handler === 'BtcCurrencyValidationHandler') {
      new ValidationErrorResponse(res, 'Moeda inválida');
    } else if (validation.handler === 'BtcValueValidationHandler') {
      new ValidationErrorResponse(res, 'Valor inválido');
    } else {
      new ValidationErrorResponse(res);
    }
    return;
  }
  const response = await new BtcService().updateCurrency(
    data.currency,
    data.value
  );
  if (response) {
    jsonResponse(res, 200, { message: 'Valor alterado com sucesso!' });
  } else {
    jsonResponse(res, 500, { message: 'Erro interno' });
  }
};
