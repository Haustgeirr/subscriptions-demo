import React from "react";
import { connect } from "react-redux";
import { Box, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { getPlans, getCurrencyRates } from "../actions";
import BillingPeriod from "./BillingPeriod";
import PlanList from "./PlanList";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c87c6",
    },
  },
});

interface AppProps {
  getPlans: () => void;
  getCurrencyRates: () => void;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.getPlans();
    this.props.getCurrencyRates();
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Box style={{ marginTop: 32 }}>
            <Typography variant="h4" align="center">
              Subscription Plans
            </Typography>
          </Box>
          <BillingPeriod />
          <PlanList />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, { getPlans, getCurrencyRates })(App);
