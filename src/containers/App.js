// React
import React from "react";

// React router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Different pages
import MainPage from "../components/MainPage/MainPage";
import AboutPage from "../components/AboutPage/AboutPage";
import ProcessorsPage from "../components/ProcessorsPage/ProcessorsPage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/processors" component={ProcessorsPage}/>
      <Route path="*" component={MainPage}/>
    </Switch>
  </Router>
);

export default App;
