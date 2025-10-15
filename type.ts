export interface Budgets {
  id: string;
  name: string;
  amount: number;
  emoji: string | null;
  createdAt: Date;
  transaction?: Transactions[];
}

export interface Transactions {
  id: string;
  amount: number;
  emoji: string | null;
  description: string;
  createdAt: Date;
  budgetName?: string;
  budget?: string | null;
}
