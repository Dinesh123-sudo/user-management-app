
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { SalesData } from '../types';
import { OptionsIcon } from './Icons';

const data: SalesData[] = [
  { name: 'Sun', sales: 4000 },
  { name: 'Mon', sales: 3000 },
  { name: 'Tue', sales: 2000 },
  { name: 'Wed', sales: 2780 },
  { name: 'Thu', sales: 5890 },
  { name: 'Fri', sales: 2390 },
  { name: 'Sat', sales: 3490 },
];

const SalesReportChart: React.FC = () => {
  return (
    <div className="bg-brand-card p-6 rounded-2xl h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
            <h3 className="text-lg font-semibold text-white">Sales Report</h3>
            <div className="text-sm text-brand-text-dark space-x-4">
                <span className="text-white">Earnings</span>
                <span>Payments</span>
            </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-brand-text-dark border border-brand-text-dark/30 rounded-lg p-2">
            <span>Week</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </div>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4A4E69" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#A9B1D9' }} dy={10} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#A9B1D9' }} tickFormatter={(value) => `${value / 1000}k`} />
            <Tooltip
              cursor={{ fill: 'rgba(74, 78, 105, 0.5)' }}
              contentStyle={{ backgroundColor: '#282A3E', border: 'none', borderRadius: '8px' }}
            />
            <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.name === 'Thu' ? '#FFA78D' : '#4A4E69'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesReportChart;
