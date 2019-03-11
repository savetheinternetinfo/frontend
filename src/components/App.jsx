import config from "../config.json";

import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import axios from "axios";

import { StateProvider } from "../contexts/StateContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Demos from "./Demos";

import Logo from "../assets/favicon.ico";

function App() {
  const [userAgentLang] = config.languages.filter(element =>
    navigator.language.includes(userAgentLang)
  );

  let initialState = {
    language: userAgentLang || "en"
  };

  const [appData, setAppData] = useState(initialState);

  useEffect(() => {
    axios("http://localhost:3001/languages").then(res =>
      setAppData({
        ...appData,
        langData: res.data,
        translation: res.data[appData.language]
      })
    );
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeLanguage":
        return {
          ...appData,
          language: action.newLanguage,
          translation: appData.langData[action.newLanguage]
        };
      default:
        return state;
    }
  };

  // TODO: Fancy loading animation.
  // Return a React component while axios is requesting languages
  if (!appData["langData"]) {
    return <div />;
  }

  return (
    <StateProvider initialState={appData} reducer={reducer}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Save the Internet</title>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/demos" component={Demos} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
