import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { FaRegImage } from 'react-icons/fa';

// Register the components of Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface YearlyProductRecord {
    productId: number;
    partNumber: string;
    count: number;
}

interface YearlyRecord {
    totalSurfaceAreaProduced: number;
    day: number;
    month: number;
    year: number;
    hour: number;
    yearlyProductRecords: YearlyProductRecord[];
}

interface Product {
    mainPartNo: string;
    description: string;
    imageLink: string;
}

interface YearlyProps {
    selectedDate: Date;
}

const Yearly: React.FC<YearlyProps> = ({ selectedDate }) => {
    const [data, setData] = useState<YearlyRecord[]>([]);
    const [products, setProducts] = useState<{ [key: string]: Product }>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const year = selectedDate.getFullYear();

            try {
                // Fetch yearly records
                const response = await fetch(`/api/yearly?year=${year}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);

                // Fetch products
                const productsResponse = await fetch('/api/products');
                if (!productsResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const productsData = await productsResponse.json();
                const productsMap = productsData.reduce((acc: { [key: string]: Product }, product: Product) => {
                    acc[product.mainPartNo] = product;
                    return acc;
                }, {});
                setProducts(productsMap);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedDate]);

    // Calculate total surface area for the selected year
    const totalSurfaceArea = data.reduce((sum, record) => sum + record.totalSurfaceAreaProduced, 0);

    // Prepare data for the line chart
    const chartData = {
        labels: data.map(record => `Month ${record.month}`),
        datasets: [
            {
                label: 'Surface Area Produced',
                data: data.map(record => record.totalSurfaceAreaProduced),
                borderColor: 'rgba(255, 191, 0,0.5)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(255, 191, 0,1)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(255, 255, 255, 0.5)', // White color with opacity 0.5 for legend labels
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return `${context.dataset.label}: ${context.raw} sq. ft`;
                    },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for tooltips for better contrast
                titleColor: 'rgba(255, 255, 255, 0.5)', // White color with opacity 0.5 for tooltip titles
                bodyColor: 'rgba(255, 255, 255, 0.5)', // White color with opacity 0.5 for tooltip body
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month of the Year',
                    color: 'rgba(255, 255, 255, 0.5)', // White color with opacity 0.5 for x-axis title
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)', // White color with opacity 0.5 for x-axis ticks
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Surface Area Produced (sq. ft)',
                    color: 'rgba(255, 255, 255, 0.5)', // White color with opacity 0.5 for y-axis title
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)', // White color with opacity 0.5 for y-axis ticks
                },
                beginAtZero: true,
            },
        },
    };

    const formattedDate = `${selectedDate.getFullYear()}`;

    // Aggregate product counts
    const productCounts: { [key: string]: { description: string; count: number; imageLink: string } } = {};
    data.forEach(record => {
        record.yearlyProductRecords.forEach(productRecord => {
            if (products[productRecord.partNumber]) {
                const product = products[productRecord.partNumber];
                if (productCounts[productRecord.partNumber]) {
                    productCounts[productRecord.partNumber].count += productRecord.count;
                } else {
                    productCounts[productRecord.partNumber] = {
                        description: product.description,
                        count: productRecord.count,
                        imageLink: product.imageLink,
                    };
                }
            }
        });
    });

    return (
        <div className="w-full">
            <h1 className="text-xl font-bold mb-4 text-center">Yearly Surface Area Production for {formattedDate}</h1>
            <p className="text-lg text-center mb-4">Graph for {formattedDate}</p>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">Error: {error}</p>}
            {!loading && !error && data.length === 0 && <p className="text-center">No data available</p>}
            {!loading && !error && data.length > 0 && (
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center w-full h-96 mb-8">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                    <p className="text-lg font-semibold text-center">Total Surface Area Produced: {totalSurfaceArea} sq. ft</p>
                    <div className="mt-8 w-full max-w-4xl">
                        <h2 className="text-lg font-bold mb-4 text-center">Products Produced</h2>
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-center">Part Number</th>
                                    <th className="py-2 px-4 border-b text-center">Description</th>
                                    <th className="py-2 px-4 border-b text-center">Count</th>
                                    <th className="py-2 px-4 border-b text-center">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(productCounts).map(partNo => (
                                    <tr key={partNo}>
                                        <td className="py-2 px-4 border-b text-center">{partNo}</td>
                                        <td className="py-2 px-4 border-b text-center">{productCounts[partNo].description}</td>
                                        <td className="py-2 px-4 border-b text-center">{productCounts[partNo].count}</td>
                                        <td className="py-2 px-4 border-b text-center">
                                            <a href={productCounts[partNo].imageLink} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                                                <FaRegImage className="text-white text-2xl" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Yearly;
