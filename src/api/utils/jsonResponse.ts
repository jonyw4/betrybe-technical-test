import type { NextApiResponse } from 'next';

/**
 * Create a JSON response
 */
export function jsonResponse<T = any>(
  res: NextApiResponse,
  statusCode: number,
  data: T
): void {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
  res.end();
}
