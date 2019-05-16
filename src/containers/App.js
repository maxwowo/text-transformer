// React
import React from "react";
// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Different pages
import MainPage from "../components/MainPage/MainPage";
import AboutPage from "../components/AboutPage/AboutPage";
import ProcessorsPage from "../components/ProcessorsPage/ProcessorsPage";
import HelpPage from "../components/HelpPage/HelpPage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/processors" component={ProcessorsPage}/>
      <Route path="/help" component={HelpPage}/>
      <Route path="/contact" component={() => {
        window.location.replace("https://maxwowo.com/#contacts")
      }}/>
      <Route path="*" component={MainPage}/>
    </Switch>
  </Router>
);

export default App;
