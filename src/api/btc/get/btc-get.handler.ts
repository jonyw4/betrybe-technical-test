import type { NextApiHandler } from 'next';
import { BtcService } from '../btc.service';
import { jsonResponse } from '../../utils';

export const btcGetHandler: NextApiHandler = async (req, res) => {
  const response = await new BtcService().getCurrentPriceBTC();
  jsonResponse(res, 200, response);
};
