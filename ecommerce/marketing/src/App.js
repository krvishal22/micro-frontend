import React from "react";
import { StylesProvider } from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
