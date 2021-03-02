import React from 'react';
import { connect } from 'react-redux';

import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { setBillingPeriod } from '../actions';
import { BILLING_PERIOD } from '../constants';
import { State } from '../types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  buttonActive: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

const BillingPeriod = ({
  activePeriod,
  setBillingPeriod,
}: {
  activePeriod: string;
  setBillingPeriod: Function;
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        {Object.keys(BILLING_PERIOD).map((periodKey) => {
          const currentPeriod = BILLING_PERIOD[periodKey];
          return (
            <Button
              key={`billing-period-${currentPeriod}`}
              variant={
                currentPeriod === activePeriod ? 'contained' : 'outlined'
              }
              onClick={() => {
                setBillingPeriod(currentPeriod);
              }}
              disableElevation
            >
              Billed {currentPeriod}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return { activePeriod: state.billingPeriod };
};

export default connect(mapStateToProps, { setBillingPeriod })(BillingPeriod);
