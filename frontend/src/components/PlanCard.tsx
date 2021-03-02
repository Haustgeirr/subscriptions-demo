import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Avatar, Card, CardHeader } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddCircleRounded from '@material-ui/icons/AddCircleRounded';
import CheckCircleRounded from '@material-ui/icons/CheckCircleRounded';

import { PlanCardProps } from '../types';
import { togglePlan } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttonBase: {
    width: '100%',
    textAlign: 'left',
  },
  card: {
    borderRadius: 36,
    width: '100%',
    marginBottom: 16,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.08),
    },
  },
  cardActive: {
    backgroundColor: fade(theme.palette.primary.main, 0.16),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.32),
    },
  },
  cardHeader: {
    width: '100%',
  },
  action: {
    marginTop: 0,
    marginRight: 0,
  },
  actionButton: {
    padding: 8,
  },
  avatarImg: {
    width: 'auto',
    height: 'auto',
  },
}));

const PlanCard = ({
  plan,
  togglePlan,
}: {
  plan: PlanCardProps;
  togglePlan: (planCode: string) => void;
}) => {
  const classes = useStyles();

  const cardStyle =
    classes.card + ' ' + (plan.selected ? classes.cardActive : null);

  return (
    <Card className={cardStyle} onClick={() => togglePlan(plan.planCode)}>
      <ButtonBase focusRipple className={classes.buttonBase}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar
              alt={plan.planCode}
              src={`https://www.countryflags.io/${plan.planCode}/flat/64.png`}
              classes={{ img: classes.avatarImg }}
            >
              {plan.planCode}
            </Avatar>
          }
          action={
            plan.selected ? (
              <CheckCircleRounded
                color='primary'
                classes={{ root: classes.actionButton }}
              />
            ) : (
              <AddCircleRounded
                color='action'
                classes={{ root: classes.actionButton }}
              />
            )
          }
          title={plan.planName}
          subheader={plan.cost}
          classes={{ action: classes.action }}
        />
      </ButtonBase>
    </Card>
  );
};

export default connect(null, { togglePlan })(PlanCard);
