import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { year } = req.query;

    // Validate month and year
    if (!year || isNaN(Number(year))) {
        return res.status(400).json({ error: 'Invalid year' });
    }

    try {
        const records = await prisma.yearlyRecord.findMany({
            where: {
                Year: Number(year)
            },
        });
        return res.status(200).json(records);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
