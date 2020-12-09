import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PageRenderer from "./components/pageRenderer";
import FixedMenu from "./components/additionalComponents/fixedMenu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="fixed-menu">
          <FixedMenu />
        </div>
        <div className="container-wrapper">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="menu-display">
            <Switch>
              <Route path="/:page" component={PageRenderer} />
              <Route path="/" render={() => <Redirect to="/dashboard" />} />
            </Switch>
          </div>
        </div>
        <div className="footer">footer</div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
