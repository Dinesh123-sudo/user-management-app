import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import type { ActivityData } from '../types';
import { OptionsIcon } from './Icons';

const data: ActivityData[] = [
  { name: 'Transactions', value: 452, color: '#A7A2F6' },
  { name: 'Payouts', value: 412, color: '#FFA78D' },
  { name: 'Sales', value: 715, color: '#91D9D9' },
  { name: 'Reports', value: 128, color: '#F4A2B8' },
];

const ActivityChart: React.FC = () => {
  return (
    <div className="bg-brand-card p-6 rounded-2xl h-full flex flex-col min-h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Activity</h3>
        <button>
          <OptionsIcon className="text-brand-text-dark" />
        </button>
      </div>
      <div className="flex-grow relative flex items-center justify-center">
        <div className="absolute text-center">
          <p className="text-3xl font-bold text-white">+13%</p>
          <p className="text-sm text-brand-text-dark">Since last week</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="90%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">
        {data.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
                <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                    <span className="text-brand-text-dark whitespace-nowrap">{item.name}</span>
                </div>
                <span className="font-medium text-white">{item.value}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;