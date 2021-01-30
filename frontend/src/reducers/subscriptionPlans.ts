import { GET_PLANS, TOGGLE_PLAN, PlanActions } from "../actions/types";
import { Plan } from "../types";

const initialState: Plan[] = [];

const subscriptionPlans = (state = initialState, action: PlanActions) => {
  switch (action.type) {
    case GET_PLANS: {
      // return action.payload.plans;
      return action.payload.plans.map((p) => {
        const plan = {
          planCode: p.planCode,
          planName: p.planName,
          costMonth: p.costMonth,
          costYear: p.costYear,
          selected: p.planCode === "gb" ? true : false,
        };
        return plan;
      });
    }
    case TOGGLE_PLAN: {
      const { planCode } = action.payload;
      return state.map((p) => {
        if (p.planCode === planCode) {
          return Object.assign({}, p, { selected: !p.selected });
        }
        return p;
      });

      // const plan = state.find((p) => {
      //   return p.planCode === planCode;
      // });
      // return state;
    }
    default: {
      return state;
    }
  }
};

export default subscriptionPlans;
