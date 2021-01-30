export type Plan = {
  planCode: string;
  planName: string;
  costMonth: number;
  costYear: number;
  selected: boolean;
};

export type PlanCardProps = {
  planCode: string;
  planName: string;
  cost: string;
  selected: boolean;
};

export type Rate = {
  currency: string;
  rate: number;
};

export interface Rates {
  [key: string]: string;
}

export type State = {
  plans: Plan[];
  billingPeriod: string;
  currencyPricing: string;
  rates: Rate[];
};
