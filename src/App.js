import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import ExpenseForm from "./pages/expenses/Form";
import ExpenseList from "./pages/expenses/List";

const BelowNavigationContent = styled.div`
  margin-top: 5rem;
`;

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/form">
        <BelowNavigationContent>
          <ExpenseForm />
        </BelowNavigationContent>
      </Route>
      <Route path="/">
        <BelowNavigationContent>
          <ExpenseList />
        </BelowNavigationContent>
      </Route>
    </Switch>
  </Router>
);

export default App;
