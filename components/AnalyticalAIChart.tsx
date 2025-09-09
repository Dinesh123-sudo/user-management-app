
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import type { AnalyticsData } from '../types';
import { OptionsIcon } from './Icons';

const data: AnalyticsData[] = [
    { day: 1, value: 15000 },
    { day: 5, value: 22000 },
    { day: 10, value: 46000 },
    { day: 15, value: 30000 },
    { day: 20, value: 25000 },
    { day: 25, value: 35000 },
    { day: 30, value: 42000 },
];

const AnalyticalAIChart: React.FC = () => {
    return (
        <div className="bg-brand-card p-6 rounded-2xl h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-white">Analytical AI</h3>
                    <p className="text-sm text-brand-text-dark">September 2023</p>
                </div>
                <button>
                    <OptionsIcon className="text-brand-text-dark" />
                </button>
            </div>
            <div className="flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A4E69" vertical={false} />
                        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#A9B1D9' }} dy={10} />
                        <YAxis tickLine={false} axisLine={false} tick={{ fill: '#A9B1D9' }} tickFormatter={(value) => `${value / 1000}k`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#282A3E', border: 'none', borderRadius: '8px' }}
                        />
                        <ReferenceArea x1={9.5} x2={10.5} y1={0} y2={46000} fill="rgba(167, 162, 246, 0.1)" stroke="rgba(167, 162, 246, 0.3)" strokeOpacity={0.5} />
                        <Line type="monotone" dataKey="value" stroke="#A7A2F6" strokeWidth={3} dot={{ r: 0 }} activeDot={{ r: 6, fill: '#fff', stroke: '#A7A2F6', strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticalAIChart;
