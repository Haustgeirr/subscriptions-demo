import { GET_CURRENCY_RATE, GetCurrencyAction } from "../actions/types";
import { Rate } from "../types";

const initialState: Rate[] = [];

const currencyRates = (state = initialState, action: GetCurrencyAction) => {
  switch (action.type) {
    case GET_CURRENCY_RATE: {
      return Object.keys(action.payload.rates).map((key) => {
        const rate = {
          currency: key,
          rate: parseFloat(action.payload.rates[key]),
        };
        return rate;
      });
    }
    default: {
      return state;
    }
  }
};

export default currencyRates;
