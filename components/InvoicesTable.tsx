
import React from 'react';
import type { Invoice } from '../types';
import { FilterIcon, ReportIcon } from './Icons';

const invoicesData: Invoice[] = [
  {
    id: '1',
    customer: { name: 'Arlene McCoy', avatar: 'https://picsum.photos/seed/arlene/40/40' },
    date: '31 Aug 2023',
    amount: 3230.2,
    productId: '001423',
    status: 'Paid',
  },
  {
    id: '2',
    customer: { name: 'Jacob Jones', avatar: 'https://picsum.photos/seed/jacob/40/40' },
    date: '30 Aug 2023',
    amount: 5630.5,
    productId: '004533',
    status: 'Unpaid',
  },
  {
    id: '3',
    customer: { name: 'Marvin Butcher', initials: 'MB', avatar: 'https://picsum.photos/seed/marvin/40/40' },
    date: '30 Aug 2023',
    amount: 4230.0,
    productId: '001784',
    status: 'Paid',
  },
  {
    id: '4',
    customer: { name: 'Ralph Edwards', avatar: 'https://picsum.photos/seed/ralph/40/40' },
    date: '29 Aug 2023',
    amount: 3082.2,
    productId: '001515',
    status: 'Paid',
  },
];

const StatusBadge: React.FC<{ status: 'Paid' | 'Unpaid' }> = ({ status }) => {
  const baseClasses = 'px-3 py-1 text-sm font-medium rounded-md';
  const statusClasses =
    status === 'Paid'
      ? 'bg-green-500/20 text-green-400'
      : 'bg-orange-500/20 text-orange-400';
  return <span className={`${baseClasses} ${statusClasses}`}>{status}</span>;
};


const Avatar: React.FC<{ customer: Invoice['customer'] }> = ({ customer }) => {
    if(customer.initials) {
        return (
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">
                {customer.initials}
            </div>
        )
    }
    return <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full" />
}

const InvoicesTable: React.FC = () => {
  return (
    <div className="bg-brand-card p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Invoices</h3>
          <p className="text-sm text-brand-text-dark">3,251 invoices</p>
        </div>
        <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-brand-text-dark border border-brand-text-dark/30 rounded-lg p-2 text-sm hover:bg-brand-bg-light">
                <FilterIcon />
                <span>Filter</span>
            </button>
             <button className="flex items-center space-x-2 text-brand-text-dark border border-brand-text-dark/30 rounded-lg p-2 text-sm hover:bg-brand-bg-light">
                <ReportIcon />
                <span>Report</span>
            </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-brand-text-dark">
              <th className="font-medium p-3">Customer name</th>
              <th className="font-medium p-3">Date</th>
              <th className="font-medium p-3">Amount</th>
              <th className="font-medium p-3">Product ID</th>
              <th className="font-medium p-3">Status</th>
              <th className="font-medium p-3">Option</th>
            </tr>
          </thead>
          <tbody>
            {invoicesData.map((invoice) => (
              <tr key={invoice.id} className="border-t border-brand-bg-light text-white">
                <td className="p-3">
                  <div className="flex items-center">
                    <Avatar customer={invoice.customer} />
                    <span className="ml-3 font-medium">{invoice.customer.name}</span>
                  </div>
                </td>
                <td className="p-3 text-brand-text-dark">{invoice.date}</td>
                <td className="p-3">${invoice.amount.toLocaleString()}</td>
                <td className="p-3 text-brand-text-dark">{invoice.productId}</td>
                <td className="p-3">
                  <StatusBadge status={invoice.status} />
                </td>
                <td className="p-3 text-brand-text-dark cursor-pointer hover:text-white">More</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTable;
