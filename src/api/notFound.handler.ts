import type { NextApiHandler } from 'next';
import { jsonResponse } from './utils';

export const notFoundHandler: NextApiHandler = async (req, res) => {
  jsonResponse(res, 404, { message: 'Endpoint não encontrado' });
};
