export interface Account {
  user: User;
}

export interface User {
  username: string;
  credits: number;
  ships: any[];
  loans: any[];
}

export interface Loans {
  loans: Loan[];
}

export interface Loan {
  amount: number;
  collateralRequired: boolean;
  rate: number;
  termInDays: number;
  type: string;
}

export interface TakeLoan {
  credits: number;
  loan: TakeLoanElement;
}

export interface TakeLoanElement {
  due: string;
  id: string;
  repaymentAmount: number;
  status: string;
  type: string;
}
