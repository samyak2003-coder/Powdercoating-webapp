const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    // Create Daily Records
    const dailyRecord1 = await prisma.dailyRecord.create({
        data: {
            Day: new Date('2023-07-01'),
            TotalSurfaceAreaProduced: 100,
        },
    });

    const dailyRecord2 = await prisma.dailyRecord.create({
        data: {
            Day: new Date('2023-07-02'),
            TotalSurfaceAreaProduced: 200,
        },
    });

    // Create Monthly Records
    const monthlyRecord1 = await prisma.monthlyRecord.create({
        data: {
            Month: new Date('2023-07-01'),
            TotalSurfaceAreaProduced: 300,
        },
    });

    const monthlyRecord2 = await prisma.monthlyRecord.create({
        data: {
            Month: new Date('2023-08-01'),
            TotalSurfaceAreaProduced: 400,
        },
    });

    // Create Yearly Records
    const yearlyRecord1 = await prisma.yearlyRecord.create({
        data: {
            Year: new Date('2023-01-01'),
            TotalSurfaceAreaProduced: 500,
        },
    });

    const yearlyRecord2 = await prisma.yearlyRecord.create({
        data: {
            Year: new Date('2024-01-01'),
            TotalSurfaceAreaProduced: 600,
        },
    });

    // Create Products
    const productData = [
        {
            productName: 'Product1',
            dailyRecordId: dailyRecord1.Day,
            monthlyRecordId: monthlyRecord1.Month,
            yearlyRecordId: yearlyRecord1.Year,
            TotalSurfaceAreaProduced: 100,
        },
        {
            productName: 'Product2',
            dailyRecordId: dailyRecord2.Day,
            monthlyRecordId: monthlyRecord2.Month,
            yearlyRecordId: yearlyRecord2.Year,
            TotalSurfaceAreaProduced: 200,
        },
        {
            productName: 'Product3',
            dailyRecordId: dailyRecord1.Day,
            monthlyRecordId: monthlyRecord2.Month,
            yearlyRecordId: yearlyRecord1.Year,
            TotalSurfaceAreaProduced: 300,
        },
    ];

    console.log(`Start seeding ...`);
    for (const data of productData) {
        const product = await prisma.product.create({
            data,
        });
        console.log(`Created product with id: ${product.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
