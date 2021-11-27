import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Skittles from "./Skittles";
import Doritos from "./Doritos";
import Twix from "./Twix";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/Twix" exact>
          <Twix />
        </Route>
        <Route path="/Doritos" exact>
          <Doritos />
        </Route>
        <Route path="/Skittles" exact>
          <Skittles />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
