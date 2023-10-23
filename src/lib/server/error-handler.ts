import { NextApiResponse } from 'next';

export const badRequest = (res: NextApiResponse) => {
  return res.status(400).end();
}