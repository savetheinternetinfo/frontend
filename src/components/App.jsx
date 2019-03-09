import React, { useContext } from "react";
import Helmet from "react-helmet";
import Logo from "../assets/favicon.ico";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LanguageContext } from "../contexts/LanguageContext";

function App() {
  const ctx = useContext(LanguageContext);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Save the Internet</title>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
