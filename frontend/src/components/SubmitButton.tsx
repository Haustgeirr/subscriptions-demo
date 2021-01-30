import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { State } from "../types";

const useStyles = makeStyles((theme) => ({
  submitGrid: {
    marginTop: 16,
  },
}));

const SubmitButton = ({ state }: { state: State }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectedPlans = state.plans
    .filter((p) => p.selected === true)
    .map((p) => {
      return p.planCode;
    });

  const submitOutput = JSON.stringify({
    selectedPlans: selectedPlans,
    period: state.billingPeriod,
    currency: state.currencyPricing,
  });

  return (
    <Grid
      className={classes.submitGrid}
      container
      justify="center"
      alignItems="center"
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClickOpen}
      >
        Subscribe
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Selected Plans"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {submitOutput}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

const mapStateToProps = (state: State) => {
  return { state: state };
};

export default connect(mapStateToProps)(SubmitButton);
