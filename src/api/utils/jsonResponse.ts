import type { NextApiResponse } from 'next';

/**
 * Create a JSON response
 */
export function jsonResponse(
  res: NextApiResponse,
  statusCode: number,
  data: any
): void {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
  res.end();
}
