
import React from 'react';
import { MoonIcon, SearchIcon, BellIcon } from './Icons';
import ProfitCard from './ProfitCard';
import SalesReportChart from './SalesReportChart';
import AnalyticalAIChart from './AnalyticalAIChart';
import InvoicesTable from './InvoicesTable';
import ActivityChart from './ActivityChart';


const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Overview</h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-brand-card rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>
        <button className="p-2 rounded-full bg-brand-card text-gray-300 hover:bg-brand-bg-light">
          <MoonIcon />
        </button>
        <button className="p-2 rounded-full bg-brand-card text-gray-300 hover:bg-brand-bg-light">
          <BellIcon />
        </button>
        <img
          src="https://picsum.photos/seed/user/40/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};


const Dashboard: React.FC = () => {
  return (
    <div className='bg-brand-bg-light p-6 rounded-2xl'>
      <Header />
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-1">
              <ProfitCard />
          </div>
          <div className="xl:col-span-1">
              <SalesReportChart />
          </div>
          <div className="xl:col-span-2">
              <AnalyticalAIChart />
          </div>
          <div className="xl:col-span-3">
              <InvoicesTable />
          </div>
          <div className="xl:col-span-1">
              <ActivityChart />
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
