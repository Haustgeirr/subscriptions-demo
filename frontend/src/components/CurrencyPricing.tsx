import React from "react";
import { connect } from "react-redux";
import { FormHelperText, MenuItem, Select } from "@material-ui/core";

import { setCurrency } from "../actions";
import { CURRENCY } from "../constants";
import { State } from "../types";

const CurrencyPricing = ({
  activeCurrency,
  setCurrency,
}: {
  activeCurrency: string;
  setCurrency: Function;
}) => {
  return (
    <div className="currency">
      <Select
        value={activeCurrency}
        onChange={(e) => {
          setCurrency(e.target.value);
        }}
      >
        {Object.keys(CURRENCY).map((currencyKey) => {
          const currentCurrency = CURRENCY[currencyKey];
          return (
            <MenuItem
              key={`currency-${currentCurrency}`}
              value={currentCurrency}
            >
              {currentCurrency}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>Currency</FormHelperText>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return { activeCurrency: state.currencyPricing };
};

export default connect(mapStateToProps, { setCurrency })(CurrencyPricing);
