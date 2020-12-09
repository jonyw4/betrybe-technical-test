import { NextApiRequest, NextApiResponse } from 'next';

export function methodNotAllowedResponse(
  methods: string[],
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res.setHeader('Allow', methods);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
