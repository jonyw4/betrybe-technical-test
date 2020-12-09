import type { NextApiHandler } from 'next';
import { btcGetHandler } from './get';
import { btcUpdateHandler } from './update';
import { methodNotAllowedResponse } from '../utils';

export const btcHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    btcUpdateHandler(req, res);
  } else if (req.method === 'GET') {
    btcGetHandler(req, res);
  } else {
    methodNotAllowedResponse(['POST', 'GET'], req, res);
  }
};
