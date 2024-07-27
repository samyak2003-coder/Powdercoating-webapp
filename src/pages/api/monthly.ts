import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { month, year } = req.query;

    // Validate month and year
    if (!month || !year || isNaN(Number(month)) || isNaN(Number(year))) {
        return res.status(400).json({ error: 'Invalid month or year' });
    }

    try {
        const records = await prisma.monthlyRecord.findMany({
            where: {
                Month: Number(month),
                Year: Number(year),
            },
        });
        return res.status(200).json(records);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

