import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components of Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface DailyRecord {
    TotalSurfaceAreaProduced: number;
    Day: number;
    Month: number;
    Year: number;
    Hour: number;
}

interface DailyProps {
    selectedDate: Date;
    className?: string;
}

const Daily: React.FC<DailyProps> = ({ className, selectedDate }) => {
    const [data, setData] = useState<DailyRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const day = selectedDate.getDate();
            const month = selectedDate.getMonth() + 1; // getMonth() is zero-based
            const year = selectedDate.getFullYear();

            try {
                const response = await fetch(`/api/daily?day=${day}&month=${month}&year=${year}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedDate]);

    // Calculate total surface area and sum of surface areas per hour
    const totalSurfaceArea = data.reduce((sum, record) => sum + record.TotalSurfaceAreaProduced, 0);

    // Prepare data for the line chart
    const chartData = {
        labels: data.length > 0 ? data.map(record => `${record.Hour}:00`) : [],
        datasets: [
            {
                label: 'Surface Area Produced',
                data: data.map(record => record.TotalSurfaceAreaProduced),
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
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return `${context.dataset.label}: ${context.raw} sq. ft`;
                    },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: 'rgba(255, 255, 255, 0.5)',
                bodyColor: 'rgba(255, 255, 255, 0.5)',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Hour of the Day',
                    color: 'rgba(255, 255, 255, 0.5)',
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Surface Area Produced (sq. ft)',
                    color: 'rgba(255, 255, 255, 0.5)',
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
                beginAtZero: true,
            },
        },
    };

    const formattedDate = `${selectedDate.getDate().toString().padStart(2, '0')}/${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}/${selectedDate.getFullYear()}`;

    return (
        <div className={`w-full ${className}`}>
            <h1 className="text-xl font-bold mb-2 text-center">Daily Surface Area Production</h1>
            <p className="text-lg text-center mb-4">Graph for {formattedDate}</p>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">Error: {error}</p>}
            {!loading && !error && data.length === 0 && (
                <p className="text-center">No data available</p>
            )}
            {!loading && !error && data.length > 0 && (
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center w-full h-96 mb-8">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                    <p className="text-lg font-semibold text-center">Total Surface Area Produced: {totalSurfaceArea} sq. ft</p>
                </div>
            )}
        </div>
    );
};

export default Daily;
