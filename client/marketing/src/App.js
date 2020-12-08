import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => (
  <div>
    <StylesProvider>
      <Router>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
);
