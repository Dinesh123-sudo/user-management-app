
import React, { useState } from 'react';
import { AnalyticsIcon, CalendarIcon, ContactsIcon, DashboardIcon, LogoutIcon, MailIcon, SettingsIcon, SpectraLogo } from './Icons';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void; }> = ({ icon, label, active, onClick }) => (
  <li
    className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-brand-bg-light text-white' : 'text-brand-text-dark hover:bg-brand-bg-light/50 hover:text-white'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-4 font-medium">{label}</span>
  </li>
);

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { id: 'Dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
    { id: 'Analytics', icon: <AnalyticsIcon />, label: 'Analytics' },
    { id: 'Contacts', icon: <ContactsIcon />, label: 'Contacts' },
    { id: 'Mail', icon: <MailIcon />, label: 'Mail' },
    { id: 'Calendar', icon: <CalendarIcon />, label: 'Calendar' },
    { id: 'Settings', icon: <SettingsIcon />, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-brand-card p-6 flex-shrink-0 flex-col hidden lg:flex">
      <div className="flex items-center mb-12">
        <SpectraLogo />
        <h1 className="text-2xl font-bold text-white ml-2">SPECTRA</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
            />
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
         <div className="flex items-center p-3 rounded-lg cursor-pointer text-brand-text-dark hover:bg-brand-bg-light/50 hover:text-white">
            <LogoutIcon />
            <span className="ml-4 font-medium">Log out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
