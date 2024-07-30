//sample file to add test data to db, delete when integrated with complete tech
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [
    { mainPartNo: '40515-926-01-FG', description: 'COVER-PUR', areaInSft: 1.71, imageLink: 'http://localhost:3000/images/image.png' },
    { mainPartNo: '73293-011-51-FG', description: 'ENS CAJA TAP BOX 1200-1600A', areaInSft: 45.37, imageLink: 'http://localhost:3000/images/image.png' },
    { mainPartNo: '73293-030-13-FG', description: 'BOX BLANK 1200A EUSERC', areaInSft: 29.35, imageLink: 'http://localhost:3000/images/image.png' },
    { mainPartNo: '73293-094-52-FG', description: 'ASSY BOTTOM EUSERC 1PH HYBRID-PUR', areaInSft: 3.81, imageLink: 'http://localhost:3000/images/image.png' },
    { mainPartNo: '73293-094-01-FG', description: 'RESPALDO EUSERC 3PH HYBRID -PUR', areaInSft: 24.67, imageLink: 'http://localhost:3000/images/image.png' },
    { mainPartNo: '73293-095-50-FG', description: 'ASSY BOTTOM EUSERC 3PH HYBRID', areaInSft: 4.93, imageLink: 'http://localhost:3000/images/image.png' },
    { mainPartNo: '73293-098-02-FG', description: 'BOTTOM COVER FUSE 1PH HYBRID-PUR', areaInSft: 9.50, imageLink: 'http://localhost:3000/images/image.png' },
    { mainPartNo: '73293-116-02-FG', description: 'BOTTOM COVER BKR 3PH HYBRID-PUR', areaInSft: 14.08, imageLink: 'http://localhost:3000/images/image.png' },
];

async function main() {
    const productRecords = await prisma.product.findMany();
    const productMap = new Map<string, number>();

    // Populate productMap using a for loop
    for (const product of productRecords) {
        productMap.set(product.mainPartNo, product.id);
    }

    // Insert records for August 2024 from 9 AM to 1 PM
    for (let hour = 9; hour <= 13; hour++) {
        const dailyRecord = await prisma.dailyRecord.create({
            data: {
                totalSurfaceAreaProduced: products.reduce((acc, product) => acc + product.areaInSft, 0),
                day: 1, // assuming the records are for the 1st of August
                month: 8,
                year: 2024,
                hour,
            },
        });

        for (const product of products) {
            await prisma.dailyProductRecord.create({
                data: {
                    dailyRecordId: dailyRecord.id,
                    productId: productMap.get(product.mainPartNo) || 0, // Use map to get product ID
                    partNumber: product.mainPartNo,
                    count: Math.floor(Math.random() * 10) + 1, // Random count for demonstration
                },
            });
        }
    }

    // Create monthly record
    const totalMonthlySurfaceAreaProduced = products.reduce((acc, product) => acc + product.areaInSft, 0);
    const monthlyRecord = await prisma.monthlyRecord.create({
        data: {
            totalSurfaceAreaProduced: totalMonthlySurfaceAreaProduced,
            day: 0, // Whole month
            month: 8,
            year: 2024,
        },
    });

    for (const product of products) {
        await prisma.monthlyProductRecord.create({
            data: {
                monthlyRecordId: monthlyRecord.id,
                productId: productMap.get(product.mainPartNo) || 0,
                count: Math.floor(Math.random() * 100) + 1,
                partNumber: product.mainPartNo,
            },
        });
    }

    // Create yearly record
    const totalYearlySurfaceAreaProduced = products.reduce((acc, product) => acc + product.areaInSft, 0);
    const yearlyRecord = await prisma.yearlyRecord.create({
        data: {
            totalSurfaceAreaProduced: totalYearlySurfaceAreaProduced,
            month: 8, // August
            year: 2024,
        },
    });

    for (const product of products) {
        await prisma.yearlyProductRecord.create({
            data: {
                yearlyRecordId: yearlyRecord.id,
                productId: productMap.get(product.mainPartNo) || 0,
                count: Math.floor(Math.random() * 1000) + 1,
                partNumber: product.mainPartNo,
            },
        });
    }

    console.log('Seeding complete!');
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
// const products = [
//     { mainPartNo: '40515-926-01-FG', description: 'COVER-PUR', areaInSft: 1.71, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-011-51-FG', description: 'ENS CAJA TAP BOX 1200-1600A', areaInSft: 45.37, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-030-13-FG', description: 'BOX BLANK 1200A EUSERC', areaInSft: 29.35, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-094-52-FG', description: 'ASSY BOTTOM EUSERC 1PH HYBRID-PUR', areaInSft: 3.81, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-094-01-FG', description: 'RESPALDO EUSERC 3PH HYBRID -PUR', areaInSft: 24.67, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-094-52-FG', description: 'ASSY BOTTOM EUSERC 1PH HYBRID-PUR', areaInSft: 3.81, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-095-50-FG', description: 'ASSY BOTTOM EUSERC 3PH HYBRID', areaInSft: 4.93, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-098-02-FG', description: 'BOTTOM COVER FUSE 1PH HYBRID-PUR', areaInSft: 9.50, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-116-02-FG', description: 'BOTTOM COVER BKR 3PH HYBRID-PUR', areaInSft: 14.08, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73293-330-08-FG', description: 'BREAKER MOUNTING PAN-PUR-1', areaInSft: 0.79, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-010-51-FG', description: 'ENS. CAJA MP. 2 POS 125 A', areaInSft: 17.96, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-010-51-PC', description: 'ENS. CAJA MP. 2 POS 125 A', areaInSft: 17.96, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-011-52-FG', description: 'ENS. CAJA MP. 4 POS 125A', areaInSft: 31.38, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-011-52-PC', description: 'ENS. CAJA MP. 4 POS 125A', areaInSft: 31.38, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-012-52-FG', description: 'ENS. CAJA MP 6 POSICIONES 125A', areaInSft: 38.11, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-012-52-PC', description: 'ENS. CAJA MP 6 POSICIONES 125A', areaInSft: 38.11, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-022-53-FG', description: 'ENS. CAJA MP 2 3 POS. 200A-PUR', areaInSft: 35.24, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-023-51-FG', description: 'ENS. CAJA MP. 4 POS 200 A', areaInSft: 40.24, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-023-51-PC', description: 'ENS. CAJA MP. 4 POS 200 A', areaInSft: 40.24, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-031-51-FG', description: 'ENS. CAJA MP. 5-6 POS 200 A', areaInSft: 49.91, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-031-51-PC', description: 'ENS. CAJA MP. 5-6 POS 200 A', areaInSft: 49.91, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-032-65-FG', description: 'ENS CAJA MAIN 1 EUSERC', areaInSft: 48.27, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-032-74-FG', description: 'ENS CAJA MAIN', areaInSft: 37.46, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-213-51-FG', description: 'ENS. BARRERA MP 4 POS. 125A', areaInSft: 5.06, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-213-51-PC', description: 'ENS. BARRERA MP 4 POS. 125A', areaInSft: 5.06, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-214-50-FG', description: 'ENS. BARRERA ACOM. MP 4 POS.', areaInSft: 6.85, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-214-50-PC', description: 'ENS. BARRERA ACOM. MP 4 POS.', areaInSft: 6.85, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-215-51-FG', description: 'ENS. BARRERA DER. MP 6 POS.', areaInSft: 4.25, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-215-51-PC', description: 'ENS. BARRERA DER. MP 6 POS.', areaInSft: 4.25, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-216-51-FG', description: 'ENS. BARRERA IZQ. MP 6 POS.', areaInSft: 4.27, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-216-51-PC', description: 'ENS. BARRERA IZQ. MP 6 POS.', areaInSft: 4.27, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-217-50-FG', description: 'ENS. BARRERA IZQ. ACOM. MP 6', areaInSft: 6.04, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-217-50-PC', description: 'ENS. BARRERA IZQ. ACOM. MP 6', areaInSft: 6.04, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-218-50-FG', description: 'ENS. BARRERA DER. ACOM. MP 6', areaInSft: 5.98, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-218-50-PC', description: 'ENS. BARRERA DER. ACOM. MP 6', areaInSft: 5.98, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-227-50-FG', description: 'ENS. BARRERA MP 2,3 P 200A', areaInSft: 4.75, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-227-50-PC', description: 'ENS. BARRERA MP 2,3 P 200A', areaInSft: 4.75, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-230-50-FG', description: 'ENS. BARRERA MP 4 POS. 200A', areaInSft: 5.63, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-230-50-PC', description: 'ENS. BARRERA MP 4 POS. 200A', areaInSft: 5.63, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-232-50-FG', description: 'ENS. BARRERA ACOM.MP 4 POS.200', areaInSft: 8.15, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-232-50-PC', description: 'ENS. BARRERA ACOM.MP 4 POS.200', areaInSft: 8.15, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-235-50-FG', description: 'ENS. BARRERA MP 5-6 POS 200A', areaInSft: 4.74, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-235-50-PC', description: 'ENS. BARRERA MP 5-6 POS 200A', areaInSft: 4.74, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-316-50-FG', description: 'ENS. CUB. INTS. MP 4 POS. 125A', areaInSft: 5.33, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-316-50-PC', description: 'ENS. CUB. INTS. MP 4 POS. 125A', areaInSft: 5.33, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-317-50-FG', description: 'ENS. CUB. INTS. MP 6 POS. 125A', areaInSft: 5.17, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-317-50-PC', description: 'ENS. CUB. INTS. MP 6 POS. 125A', areaInSft: 5.17, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-324-02-FG', description: 'CUBIERTA ACOM. MP 2 3 5 6P 200-PUR', areaInSft: 8.07, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-361-01-FG', description: 'CUBIERTA SUP.EUSERC C.B.400A-PUR', areaInSft: 8.79, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-362-01-FG', description: 'CUBIERTA INF MCB EUSERC 400A-PUR', areaInSft: 11.93, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73296-537-02-FG', description: 'TAPA PARA X-BUS-PUR', areaInSft: 1.33, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-104-51-FG', description: 'CAJA ENS BRANCH 5 POS 125A', areaInSft: 23.17, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-114-51-FG', description: 'ENS CAJA BRANCH 3 POS 200A', areaInSft: 24.49, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-121-52-FG', description: 'CAJA ENS. BRANCH. COMER. 20S-PUR', areaInSft: 26.43, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-153-51-FG', description: 'BERRERA ENS BRANCH 5 PS 125A', areaInSft: 6.29, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-156-50-FG', description: 'BERRERA ENS BRANCH 4 P 200A', areaInSft: 5.59, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-158-50-FG', description: 'BARRERA ENS BRANCH 3 POS 200A', areaInSft: 4.79, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-202-50-FG', description: 'ENS CUB INT BRANCH 5 POS 125A', areaInSft: 6.08, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: '73297-229-50-FG', description: 'ENS CUB INT BRANCH RES 3P 200A', areaInSft: 7.87, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: 'MTR11751-FG', description: 'ERMS BRACKET 1600-2000-PUR', areaInSft: 1.89, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: 'MTR12000-FG', description: 'BOX BLANK 1000A EUSERC M02 -PUR', areaInSft: 29.35, imageLink: 'http://localhost:3000/images/image.png' },
//     { mainPartNo: 'MTR12003-P', description: 'ASSY LEFT PANEL 1000A EUSERC-PUR', areaInSft: 13.26, imageLink: 'http://localhost:3000/images/image.png' },
// ];

