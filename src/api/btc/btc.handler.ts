import type { NextApiHandler } from 'next';
import { btcGetHandler } from './get';
import { btcUpdateHandler } from './update';

export const btcHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    return btcUpdateHandler(req, res);
  }
  if (req.method === 'GET') {
    return btcGetHandler(req, res);
  }
};
