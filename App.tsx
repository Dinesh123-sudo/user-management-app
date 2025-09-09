
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen font-sans bg-brand-bg-dark text-brand-text-light">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
