import { Plan, Rates } from "../types";

export const GET_PLANS = "GET_PLANS";
export const TOGGLE_PLAN = "TOGGLE_PLAN";
export const SET_BILLING_PERIOD = "SET_BILLING_PERIOD";
export const SET_CURRENCY = "SET_CURRENCY";
export const GET_CURRENCY_RATE = "GET_CURRENCY_RATE";

export interface BillingPeriodAction {
  type: typeof SET_BILLING_PERIOD;
  payload: { period: string };
}

export interface SetCurrencyAction {
  type: typeof SET_CURRENCY;
  payload: { currency: string };
}

export interface GetCurrencyAction {
  type: typeof GET_CURRENCY_RATE;
  payload: { rates: Rates };
}

interface GetPlansAction {
  type: typeof GET_PLANS;
  payload: { plans: Plan[] };
}

interface TogglePlanAction {
  type: typeof TOGGLE_PLAN;
  payload: { planCode: string };
}

export type PlanActions = GetPlansAction | TogglePlanAction;
