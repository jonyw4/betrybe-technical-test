import type { NextApiHandler } from 'next';
import { BtcService, BtcServiceGetCurrentPriceResponse } from '../btc.service';
import { jsonResponse } from '../../utils';

/**
 * Default response for btc get request
 */
export type BtcGetHandlerResponse = BtcServiceGetCurrentPriceResponse;

export const btcGetHandler: NextApiHandler = async (req, res) => {
  const response = await new BtcService().getCurrentPriceBTC();
  jsonResponse<BtcGetHandlerResponse>(res, 200, response);
};
