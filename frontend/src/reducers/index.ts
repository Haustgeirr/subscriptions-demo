import { combineReducers } from "redux";

import billingPeriod from "./billingPeriod";
import currencyPricing from "./currencyPricing";
import subscriptionPlans from "./subscriptionPlans";
import currencyRates from "./currencyRates";

export default combineReducers({
  billingPeriod,
  currencyPricing,
  plans: subscriptionPlans,
  rates: currencyRates,
});
