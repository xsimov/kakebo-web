import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Alert from "@kiwicom/orbit-components/lib/Alert";

const About = () => <div>hola</div>;
const Home = () => <Alert>Hello World!</Alert>;
const Users = () => <div>users</div>;

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
