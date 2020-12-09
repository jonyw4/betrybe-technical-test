import type { NextApiHandler } from 'next';
import { BtcService } from './btc.service';
import { jsonResponse } from '../utils';

export const btcHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const response = await new BtcService().getCurrentPriceBTC();
    jsonResponse(res, 200, response);
  }
};
