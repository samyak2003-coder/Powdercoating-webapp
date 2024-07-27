import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { day, month, year } = req.query;

  try {
    const records = await prisma.dailyRecord.findMany({
      where: {
        Day: parseInt(day as string, 10),
        Month: parseInt(month as string, 10),
        Year: parseInt(year as string, 10),
      },
    });
    return res.status(200).json(records);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
