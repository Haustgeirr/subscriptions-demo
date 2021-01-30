import { SET_BILLING_PERIOD, BillingPeriodAction } from "../actions/types";
import { BILLING_PERIOD } from "../constants";

const initialState = BILLING_PERIOD.ANNUAL;

const billingPeriod = (state = initialState, action: BillingPeriodAction) => {
  switch (action.type) {
    case SET_BILLING_PERIOD: {
      return action.payload.period;
    }
    default: {
      return state;
    }
  }
};

export default billingPeriod;
