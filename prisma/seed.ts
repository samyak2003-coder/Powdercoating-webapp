//sample file to add test data to db, delete when integrated with complete tech
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    try {
        const day = 1;
        const month = 1;
        const year = 2024;

        for (let hour = 0; hour < 24; hour++) {
            await prisma.dailyRecord.create({
                data: {
                    TotalSurfaceAreaProduced: hour * 10 + 10, // Adjust this value as needed
                    Day: day,
                    Month: month,
                    Year: year,
                    Hour: hour
                }
            });
        }

        console.log('Daily records inserted for each hour.');

        const startDay = 1; // Starting day
        const numberOfDays = 31; // Number of days to insert

        for (let i = 0; i < numberOfDays; i++) {
            const day = startDay + i;
            await prisma.monthlyRecord.create({
                data: {
                    TotalSurfaceAreaProduced: i * 10 + 100, // Adjust this value as needed
                    Day: day,
                    Month: month,
                    Year: year
                }
            });
        }

        console.log('Monthly records inserted for each day.');

        // Insert yearly records for each month in a given year
        const startMonth = 1; // January
        const numberOfMonths = 12; // Number of months to insert

        for (let i = 0; i < numberOfMonths; i++) {
            const month = startMonth + i;
            await prisma.yearlyRecord.create({
                data: {
                    TotalSurfaceAreaProduced: i * 100 + 1000, // Adjust this value as needed
                    Month: month,
                    Year: year
                }
            });
        }

        console.log('Yearly records inserted for each month.');

        console.log('Yearly records inserted for each year.');
        // Define products to be inserted
        const products = [
            { mainPartNo: '40515-926-01-FG', description: 'COVER-PUR', areaInSft: 1.71 },
            { mainPartNo: '73293-011-51-FG', description: 'ENS CAJA TAP BOX 1200-1600A', areaInSft: 45.37 },
            { mainPartNo: '73293-030-13-FG', description: 'BOX BLANK 1200A EUSERC', areaInSft: 29.35 },
            { mainPartNo: '73293-090-50-FG', description: 'ASSY BOX HYBRID 600-800A', areaInSft: 38.02 },
            { mainPartNo: '73293-094-01-FG', description: 'RESPALDO EUSERC 3PH HYBRID -PUR', areaInSft: 24.67 },
            { mainPartNo: '73293-094-52-FG', description: 'ASSY BOTTOM EUSERC 1PH HYBRID-PUR', areaInSft: 3.81 },
            { mainPartNo: '73293-095-50-FG', description: 'ASSY BOTTOM EUSERC 3PH HYBRID', areaInSft: 4.93 },
            { mainPartNo: '73293-098-02-FG', description: 'BOTTOM COVER FUSE 1PH HYBRID-PUR', areaInSft: 9.50 },
            { mainPartNo: '73293-116-02-FG', description: 'BOTTOM COVER BKR 3PH HYBRID-PUR', areaInSft: 14.08 },
            { mainPartNo: '73293-330-08-FG', description: 'BREAKER MOUNTING PAN-PUR-1', areaInSft: 0.79 },
            { mainPartNo: '73296-010-51-FG', description: 'ENS. CAJA MP. 2 POS 125 A', areaInSft: 17.96 },
            { mainPartNo: '73296-010-51-PC', description: 'ENS. CAJA MP. 2 POS 125 A', areaInSft: 17.96 },
            { mainPartNo: '73296-011-52-FG', description: 'ENS. CAJA MP. 4 POS 125A', areaInSft: 31.38 },
            { mainPartNo: '73296-011-52-PC', description: 'ENS. CAJA MP. 4 POS 125A', areaInSft: 31.38 },
            { mainPartNo: '73296-012-52-FG', description: 'ENS. CAJA MP 6 POSICIONES 125A', areaInSft: 38.11 },
            { mainPartNo: '73296-012-52-PC', description: 'ENS. CAJA MP 6 POSICIONES 125A', areaInSft: 38.11 },
            { mainPartNo: '73296-022-53-FG', description: 'ENS. CAJA MP 2 3 POS. 200A-PUR', areaInSft: 35.24 },
            { mainPartNo: '73296-023-51-FG', description: 'ENS. CAJA MP. 4 POS 200 A', areaInSft: 40.24 },
            { mainPartNo: '73296-023-51-PC', description: 'ENS. CAJA MP. 4 POS 200 A', areaInSft: 40.24 },
            { mainPartNo: '73296-031-51-FG', description: 'ENS. CAJA MP. 5-6 POS 200 A', areaInSft: 49.91 },
            { mainPartNo: '73296-031-51-PC', description: 'ENS. CAJA MP. 5-6 POS 200 A', areaInSft: 49.91 },
            { mainPartNo: '73296-032-65-FG', description: 'ENS CAJA MAIN 1 EUSERC', areaInSft: 48.27 },
            { mainPartNo: '73296-032-74-FG', description: 'ENS CAJA MAIN', areaInSft: 37.46 },
            { mainPartNo: '73296-213-51-FG', description: 'ENS. BARRERA MP 4 POS. 125A', areaInSft: 5.06 },
            { mainPartNo: '73296-213-51-PC', description: 'ENS. BARRERA MP 4 POS. 125A', areaInSft: 5.06 },
            { mainPartNo: '73296-214-50-FG', description: 'ENS. BARRERA ACOM. MP 4 POS.', areaInSft: 6.85 },
            { mainPartNo: '73296-214-50-PC', description: 'ENS. BARRERA ACOM. MP 4 POS.', areaInSft: 6.85 },
            { mainPartNo: '73296-215-51-FG', description: 'ENS. BARRERA DER. MP 6 POS.', areaInSft: 4.25 },
            { mainPartNo: '73296-215-51-PC', description: 'ENS. BARRERA DER. MP 6 POS.', areaInSft: 4.25 },
            { mainPartNo: '73296-216-51-FG', description: 'ENS. BARRERA IZQ. MP 6 POS.', areaInSft: 4.27 },
            { mainPartNo: '73296-216-51-PC', description: 'ENS. BARRERA IZQ. MP 6 POS.', areaInSft: 4.27 },
            { mainPartNo: '73296-217-50-FG', description: 'ENS. BARRERA IZQ. ACOM. MP 6', areaInSft: 6.04 },
            { mainPartNo: '73296-217-50-PC', description: 'ENS. BARRERA IZQ. ACOM. MP 6', areaInSft: 6.04 },
            { mainPartNo: '73296-218-50-FG', description: 'ENS. BARRERA DER. ACOM. MP 6', areaInSft: 5.98 },
            { mainPartNo: '73296-218-50-PC', description: 'ENS. BARRERA DER. ACOM. MP 6', areaInSft: 5.98 },
            { mainPartNo: '73296-227-50-FG', description: 'ENS. BARRERA MP 2,3 P 200A', areaInSft: 4.75 },
            { mainPartNo: '73296-227-50-PC', description: 'ENS. BARRERA MP 2,3 P 200A', areaInSft: 4.75 },
            { mainPartNo: '73296-230-50-FG', description: 'ENS. BARRERA MP 4 POS. 200A', areaInSft: 5.63 },
            { mainPartNo: '73296-230-50-PC', description: 'ENS. BARRERA MP 4 POS. 200A', areaInSft: 5.63 },
            { mainPartNo: '73296-232-50-FG', description: 'ENS. BARRERA ACOM.MP 4 POS.200', areaInSft: 8.15 },
            { mainPartNo: '73296-232-50-PC', description: 'ENS. BARRERA ACOM.MP 4 POS.200', areaInSft: 8.15 },
            { mainPartNo: '73296-235-50-FG', description: 'ENS. BARRERA MP 5-6 POS 200A', areaInSft: 4.74 },
            { mainPartNo: '73296-235-50-PC', description: 'ENS. BARRERA MP 5-6 POS 200A', areaInSft: 4.74 },
            { mainPartNo: '73296-316-50-FG', description: 'ENS. CUB. INTS. MP 4 POS. 125A', areaInSft: 5.33 },
            { mainPartNo: '73296-316-50-PC', description: 'ENS. CUB. INTS. MP 4 POS. 125A', areaInSft: 5.33 },
            { mainPartNo: '73296-317-50-FG', description: 'ENS. CUB. INTS. MP 6 POS. 125A', areaInSft: 5.17 },
            { mainPartNo: '73296-317-50-PC', description: 'ENS. CUB. INTS. MP 6 POS. 125A', areaInSft: 5.17 },
            { mainPartNo: '73296-324-02-FG', description: 'CUBIERTA ACOM. MP 2 3 5 6P 200-PUR', areaInSft: 8.07 },
            { mainPartNo: '73296-361-01-FG', description: 'CUBIERTA SUP.EUSERC C.B.400A-PUR', areaInSft: 8.79 },
            { mainPartNo: '73296-362-01-FG', description: 'CUBIERTA INF MCB EUSERC 400A-PUR', areaInSft: 11.93 },
            { mainPartNo: '73296-537-02-FG', description: 'TAPA PARA X-BUS-PUR', areaInSft: 1.33 },
            { mainPartNo: '73297-104-51-FG', description: 'CAJA ENS BRANCH 5 POS 125A', areaInSft: 23.17 },
            { mainPartNo: '73297-114-51-FG', description: 'ENS CAJA BRANCH 3 POS 200A', areaInSft: 24.49 },
            { mainPartNo: '73297-121-52-FG', description: 'CAJA ENS. BRANCH. COMER. 20S-PUR', areaInSft: 26.43 },
            { mainPartNo: '73297-153-51-FG', description: 'BERRERA ENS BRANCH 5 PS 125A', areaInSft: 6.29 },
            { mainPartNo: '73297-156-50-FG', description: 'BERRERA ENS BRANCH 4 P 200A', areaInSft: 5.59 },
            { mainPartNo: '73297-158-50-FG', description: 'BARRERA ENS BRANCH 3 POS 200A', areaInSft: 4.79 },
            { mainPartNo: '73297-202-50-FG', description: 'ENS CUB INT BRANCH 5 POS 125A', areaInSft: 6.08 },
            { mainPartNo: '73297-229-50-FG', description: 'ENS CUB INT BRANCH RES 3P 200A', areaInSft: 7.87 },
            { mainPartNo: 'MTR11751-FG', description: 'ERMS BRACKET 1600-2000-PUR', areaInSft: 1.89 },
            { mainPartNo: 'MTR12000-FG', description: 'BOX BLANK 1000A EUSERC M02 -PUR', areaInSft: 29.35 },
            { mainPartNo: 'MTR12003-P', description: 'ASSY LEFT PANEL 1000A EUSERC-PUR', areaInSft: 13.26 },
        ];

        // Insert each product into the Product table
        for (const product of products) {
            await prisma.product.create({
                data: {
                    ...product,
                },
            });
        }

        console.log('Product records inserted.');

    } catch (error) {
        console.error('Error inserting records:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();


// const products = [
//     { mainPartNo: '40515-926-01-FG', description: 'COVER-PUR', areaInSft: 1.71 },
//     { mainPartNo: '73293-011-51-FG', description: 'ENS CAJA TAP BOX 1200-1600A', areaInSft: 45.37 },
//     { mainPartNo: '73293-030-13-FG', description: 'BOX BLANK 1200A EUSERC', areaInSft: 29.35 },
//     { mainPartNo: '73293-090-50-FG', description: 'ASSY BOX HYBRID 600-800A', areaInSft: 38.02 },
//     { mainPartNo: '73293-094-01-FG', description: 'RESPALDO EUSERC 3PH HYBRID -PUR', areaInSft: 24.67 },
//     { mainPartNo: '73293-094-52-FG', description: 'ASSY BOTTOM EUSERC 1PH HYBRID-PUR', areaInSft: 3.81 },
//     { mainPartNo: '73293-095-50-FG', description: 'ASSY BOTTOM EUSERC 3PH HYBRID', areaInSft: 4.93 },
//     { mainPartNo: '73293-098-02-FG', description: 'BOTTOM COVER FUSE 1PH HYBRID-PUR', areaInSft: 9.50 },
//     { mainPartNo: '73293-116-02-FG', description: 'BOTTOM COVER BKR 3PH HYBRID-PUR', areaInSft: 14.08 },
//     { mainPartNo: '73293-330-08-FG', description: 'BREAKER MOUNTING PAN-PUR-1', areaInSft: 0.79 },
//     { mainPartNo: '73296-010-51-FG', description: 'ENS. CAJA MP. 2 POS 125 A', areaInSft: 17.96 },
//     { mainPartNo: '73296-010-51-PC', description: 'ENS. CAJA MP. 2 POS 125 A', areaInSft: 17.96 },
//     { mainPartNo: '73296-011-52-FG', description: 'ENS. CAJA MP. 4 POS 125A', areaInSft: 31.38 },
//     { mainPartNo: '73296-011-52-PC', description: 'ENS. CAJA MP. 4 POS 125A', areaInSft: 31.38 },
//     { mainPartNo: '73296-012-52-FG', description: 'ENS. CAJA MP 6 POSICIONES 125A', areaInSft: 38.11 },
//     { mainPartNo: '73296-012-52-PC', description: 'ENS. CAJA MP 6 POSICIONES 125A', areaInSft: 38.11 },
//     { mainPartNo: '73296-022-53-FG', description: 'ENS. CAJA MP 2 3 POS. 200A-PUR', areaInSft: 35.24 },
//     { mainPartNo: '73296-023-51-FG', description: 'ENS. CAJA MP. 4 POS 200 A', areaInSft: 40.24 },
//     { mainPartNo: '73296-023-51-PC', description: 'ENS. CAJA MP. 4 POS 200 A', areaInSft: 40.24 },
//     { mainPartNo: '73296-031-51-FG', description: 'ENS. CAJA MP. 5-6 POS 200 A', areaInSft: 49.91 },
//     { mainPartNo: '73296-031-51-PC', description: 'ENS. CAJA MP. 5-6 POS 200 A', areaInSft: 49.91 },
//     { mainPartNo: '73296-032-65-FG', description: 'ENS CAJA MAIN 1 EUSERC', areaInSft: 48.27 },
//     { mainPartNo: '73296-032-74-FG', description: 'ENS CAJA MAIN', areaInSft: 37.46 },
//     { mainPartNo: '73296-213-51-FG', description: 'ENS. BARRERA MP 4 POS. 125A', areaInSft: 5.06 },
//     { mainPartNo: '73296-213-51-PC', description: 'ENS. BARRERA MP 4 POS. 125A', areaInSft: 5.06 },
//     { mainPartNo: '73296-214-50-FG', description: 'ENS. BARRERA ACOM. MP 4 POS.', areaInSft: 6.85 },
//     { mainPartNo: '73296-214-50-PC', description: 'ENS. BARRERA ACOM. MP 4 POS.', areaInSft: 6.85 },
//     { mainPartNo: '73296-215-51-FG', description: 'ENS. BARRERA DER. MP 6 POS.', areaInSft: 4.25 },
//     { mainPartNo: '73296-215-51-PC', description: 'ENS. BARRERA DER. MP 6 POS.', areaInSft: 4.25 },
//     { mainPartNo: '73296-216-51-FG', description: 'ENS. BARRERA IZQ. MP 6 POS.', areaInSft: 4.27 },
//     { mainPartNo: '73296-216-51-PC', description: 'ENS. BARRERA IZQ. MP 6 POS.', areaInSft: 4.27 },
//     { mainPartNo: '73296-217-50-FG', description: 'ENS. BARRERA IZQ. ACOM. MP 6', areaInSft: 6.04 },
//     { mainPartNo: '73296-217-50-PC', description: 'ENS. BARRERA IZQ. ACOM. MP 6', areaInSft: 6.04 },
//     { mainPartNo: '73296-218-50-FG', description: 'ENS. BARRERA DER. ACOM. MP 6', areaInSft: 5.98 },
//     { mainPartNo: '73296-218-50-PC', description: 'ENS. BARRERA DER. ACOM. MP 6', areaInSft: 5.98 },
//     { mainPartNo: '73296-227-50-FG', description: 'ENS. BARRERA MP 2,3 P 200A', areaInSft: 4.75 },
//     { mainPartNo: '73296-227-50-PC', description: 'ENS. BARRERA MP 2,3 P 200A', areaInSft: 4.75 },
//     { mainPartNo: '73296-230-50-FG', description: 'ENS. BARRERA MP 4 POS. 200A', areaInSft: 5.63 },
//     { mainPartNo: '73296-230-50-PC', description: 'ENS. BARRERA MP 4 POS. 200A', areaInSft: 5.63 },
//     { mainPartNo: '73296-232-50-FG', description: 'ENS. BARRERA ACOM.MP 4 POS.200', areaInSft: 8.15 },
//     { mainPartNo: '73296-232-50-PC', description: 'ENS. BARRERA ACOM.MP 4 POS.200', areaInSft: 8.15 },
//     { mainPartNo: '73296-235-50-FG', description: 'ENS. BARRERA MP 5-6 POS 200A', areaInSft: 4.74 },
//     { mainPartNo: '73296-235-50-PC', description: 'ENS. BARRERA MP 5-6 POS 200A', areaInSft: 4.74 },
//     { mainPartNo: '73296-316-50-FG', description: 'ENS. CUB. INTS. MP 4 POS. 125A', areaInSft: 5.33 },
//     { mainPartNo: '73296-316-50-PC', description: 'ENS. CUB. INTS. MP 4 POS. 125A', areaInSft: 5.33 },
//     { mainPartNo: '73296-317-50-FG', description: 'ENS. CUB. INTS. MP 6 POS. 125A', areaInSft: 5.17 },
//     { mainPartNo: '73296-317-50-PC', description: 'ENS. CUB. INTS. MP 6 POS. 125A', areaInSft: 5.17 },
//     { mainPartNo: '73296-324-02-FG', description: 'CUBIERTA ACOM. MP 2 3 5 6P 200-PUR', areaInSft: 8.07 },
//     { mainPartNo: '73296-361-01-FG', description: 'CUBIERTA SUP.EUSERC C.B.400A-PUR', areaInSft: 8.79 },
//     { mainPartNo: '73296-362-01-FG', description: 'CUBIERTA INF MCB EUSERC 400A-PUR', areaInSft: 11.93 },
//     { mainPartNo: '73296-537-02-FG', description: 'TAPA PARA X-BUS-PUR', areaInSft: 1.33 },
//     { mainPartNo: '73297-104-51-FG', description: 'CAJA ENS BRANCH 5 POS 125A', areaInSft: 23.17 },
//     { mainPartNo: '73297-114-51-FG', description: 'ENS CAJA BRANCH 3 POS 200A', areaInSft: 24.49 },
//     { mainPartNo: '73297-121-52-FG', description: 'CAJA ENS. BRANCH. COMER. 20S-PUR', areaInSft: 26.43 },
//     { mainPartNo: '73297-153-51-FG', description: 'BERRERA ENS BRANCH 5 PS 125A', areaInSft: 6.29 },
//     { mainPartNo: '73297-156-50-FG', description: 'BERRERA ENS BRANCH 4 P 200A', areaInSft: 5.59 },
//     { mainPartNo: '73297-158-50-FG', description: 'BARRERA ENS BRANCH 3 POS 200A', areaInSft: 4.79 },
//     { mainPartNo: '73297-202-50-FG', description: 'ENS CUB INT BRANCH 5 POS 125A', areaInSft: 6.08 },
//     { mainPartNo: '73297-229-50-FG', description: 'ENS CUB INT BRANCH RES 3P 200A', areaInSft: 7.87 },
//     { mainPartNo: 'MTR11751-FG', description: 'ERMS BRACKET 1600-2000-PUR', areaInSft: 1.89 },
//     { mainPartNo: 'MTR12000-FG', description: 'BOX BLANK 1000A EUSERC M02 -PUR', areaInSft: 29.35 },
//     { mainPartNo: 'MTR12003-P', description: 'ASSY LEFT PANEL 1000A EUSERC-PUR', areaInSft: 13.26 },
// ];