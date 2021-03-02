import axios from 'axios';

import {
  GET_CURRENCY_RATE,
  GET_PLANS,
  SET_BILLING_PERIOD,
  SET_CURRENCY,
  TOGGLE_PLAN,
} from './types';

const PLANS_API_URI =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:5000/api/v1/plans'
    : '/api/v1/plans';

// const PLANS_API_URI = '/api/v1/plans';

export const getPlans = () => async (dispatch: Function) => {
  const res = await axios.get(PLANS_API_URI);
  dispatch({ type: GET_PLANS, payload: { plans: res.data } });
};

export const getCurrencyRates = () => async (dispatch: Function) => {
  const res = await axios.get(
    'https://api.exchangeratesapi.io/latest?base=GBP&symbols=EUR,JPY,USD'
  );
  dispatch({ type: GET_CURRENCY_RATE, payload: { rates: res.data.rates } });
};

export const togglePlan = (planCode: string) => ({
  type: TOGGLE_PLAN,
  payload: { planCode },
});

export const setBillingPeriod = (period: string) => ({
  type: SET_BILLING_PERIOD,
  payload: { period },
});

export const setCurrency = (currency: string) => ({
  type: SET_CURRENCY,
  payload: { currency },
});
