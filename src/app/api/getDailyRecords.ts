import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

const getDailyRecords = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { date } = req.query;

        if (typeof date !== 'string') {
            res.status(400).json({ error: 'Invalid date format' });
            return;
        }

        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);

        try {
            const dailyRecords = await prisma.dailyRecord.findMany({
                where: {
                    timestamp: {
                        gte: startDate,
                        lt: endDate,
                    },
                },
                include: { products: true },
            });
            res.status(200).json(dailyRecords);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch records' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default getDailyRecords;