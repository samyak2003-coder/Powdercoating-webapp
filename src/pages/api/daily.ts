import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const records = await prisma.dailyRecord.findMany();
    return res.status(200).json(records);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


