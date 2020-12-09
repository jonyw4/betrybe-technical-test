import type { NextApiHandler } from 'next';
import { btcGetHandler } from './get';
import { btcUpdateHandler } from './update';
import { methodNotAllowedResponse } from '../utils';

export const btcHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    await btcUpdateHandler(req, res);
  } else if (req.method === 'GET') {
    await btcGetHandler(req, res);
  } else {
    methodNotAllowedResponse(['POST', 'GET'], req, res);
  }
};
