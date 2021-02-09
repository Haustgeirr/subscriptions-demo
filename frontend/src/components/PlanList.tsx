import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { Plan, State, Rate } from '../types';
import { CURRENCY_SYMBOL } from '../constants';
import PlanCard from './PlanCard';
import CurrencyPricing from './CurrencyPricing';
import SubmitButton from './SubmitButton';

const useStyles = makeStyles((theme) => ({
  totalGrid: {
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const PlanList = ({
  plans,
  period,
  currency,
  rates,
}: {
  plans: Plan[];
  period: string;
  currency: string;
  rates: Rate[];
}) => {
  const classes = useStyles();

  if (!plans.length || !rates.length) {
    return (
      <div className='plans-container'>
        <Container maxWidth='xs'>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <CircularProgress />
          </Grid>
        </Container>
      </div>
    );
  }

  function round(value: number) {
    return Math.round(value * 100) / 100;
  }

  var exRate = rates.find((r) => r.currency === currency)?.rate || 1;

  const exPlans = plans.map((p) => {
    const exPlan = {
      planCode: p.planCode,
      planName: p.planName,
      cost: round((period === 'monthly' ? p.costMonth : p.costYear) * exRate),
      selected: p.selected,
    };
    return exPlan;
  });

  const totalPrice = exPlans
    .filter((p) => p.selected)
    .reduce((a, b) => a + b.cost, 0);

  const symbol = CURRENCY_SYMBOL[currency];
  const cardPeriod = period === 'monthly' ? 'month' : 'year';

  function formatCurrency(value: number) {
    return symbol + value.toFixed(2) + '/' + cardPeriod;
  }

  return (
    <div className='plans-container'>
      <Container maxWidth='xs'>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='stretch'
        >
          {exPlans.map((plan) => {
            return (
              <PlanCard
                key={`plan-${plan.planCode}`}
                plan={{
                  planCode: plan.planCode,
                  planName: plan.planName,
                  cost: formatCurrency(plan.cost),
                  selected: plan.selected,
                }}
              />
            );
          })}
        </Grid>
      </Container>
      <Container maxWidth='xs'>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          className={classes.totalGrid}
        >
          <Grid>
            <Typography variant='body2'>Total </Typography>
            <Typography variant='h5'>
              {formatCurrency(round(totalPrice))}
            </Typography>
          </Grid>
          <CurrencyPricing />
        </Grid>
        <SubmitButton />
      </Container>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    plans: state.plans,
    period: state.billingPeriod,
    currency: state.currencyPricing,
    rates: state.rates,
  };
};

export default connect(mapStateToProps)(PlanList);
