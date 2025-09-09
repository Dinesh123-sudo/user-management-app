
export interface SalesData {
  name: string;
  sales: number;
}

export interface AnalyticsData {
  day: number;
  value: number;
}

export interface Invoice {
  id: string;
  customer: {
    name: string;
    avatar: string;
    initials?: string;
  };
  date: string;
  amount: number;
  productId: string;
  status: 'Paid' | 'Unpaid';
}

export interface ActivityData {
  name: string;
  value: number;
  color: string;
}
