import { SET_CURRENCY, SetCurrencyAction } from "../actions/types";
import { CURRENCY } from "../constants";

const initialState = CURRENCY.GBP;

const currencyPricing = (state = initialState, action: SetCurrencyAction) => {
  switch (action.type) {
    case SET_CURRENCY: {
      return action.payload.currency;
    }
    default: {
      return state;
    }
  }
};

export default currencyPricing;
