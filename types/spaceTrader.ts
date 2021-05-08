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

export interface Ships {
  ships: Ship[];
}

export interface Ship {
  type: string;
  class: string;
  maxCargo: number;
  speed: number;
  manufacturer: string;
  plating: number;
  weapons: number;
  purchaseLocations?: PurchaseLocation[];
}

export interface PurchaseLocation {
  system: string;
  location: string;
  price: number;
}
