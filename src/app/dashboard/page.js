'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function DashboardPage() {
  const data = [
    { time: '10:00', cars: 10 },
    { time: '10:15', cars: 15 },
    { time: '10:30', cars: 12 },
    { time: '10:45', cars: 20 },
  ];
  
  const occupiedSpaces = 20;
  const totalSpaces = 50;

  return (
    <main className="flex flex-col items-center justify-center p-10 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center">Traffic Flow</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cars" stroke="#2563EB" activeDot={{ r: 8 }} />
      </LineChart>

      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Parking Occupancy</h2>
        <p className="text-3xl font-bold text-blue-600">{occupiedSpaces}/{totalSpaces}</p>
        <p className="text-gray-600 mt-2">spaces occupied</p>
      </div>
    </main>
  );
}