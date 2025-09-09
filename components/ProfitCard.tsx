
import React from 'react';
import { OptionsIcon, ProfitIllustration } from './Icons';

const ProfitCard: React.FC = () => {
  return (
    <div className="bg-brand-accent p-6 rounded-2xl text-gray-800 flex flex-col h-full">
      <div className="flex justify-between items-start">
        <div className='flex items-center bg-white/30 p-2 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <h3 className="font-semibold ml-2">Profit</h3>
        </div>
        <button>
          <OptionsIcon className="text-gray-800" />
        </button>
      </div>
      <div className="my-4 flex justify-center">
        <ProfitIllustration />
      </div>
      <div className="mt-auto">
        <p className="text-sm font-medium text-green-800">+14% Since last week</p>
        <p className="text-4xl font-bold mt-1">$12 895.5</p>
      </div>
    </div>
  );
};

export default ProfitCard;
