import config from "../config.json";

import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import axios from "axios";

import { StateProvider } from "../contexts/StateContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from "../assets/favicon.ico";
import Header from "./common/Header";
import Footer from "./common/Footer";
import LoadAnimation from "./common/LoadAnimation.jsx";
import { Home, Gallery, About, AboutUs, Demos, Imprint, Privacy } from ".";

function App() {
  const [appData, setAppData] = useState({});

  useEffect(() => {
    axios(config.api.translation)
      .then(res => {
        const { translation } = res.data;
        const navigatorMatch = Object.keys(translation).filter(element =>
          element.includes(navigator.language)
        );
        const userLanguage = navigatorMatch > 0 ? navigatorMatch[0] : "en_GB";
        setAppData({
          ...appData,
          language: userLanguage,
          langData: res.data.translation,
          translation: res.data.translation[userLanguage]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const reducer = (state, action) => {
    console.log(action);
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

  if (!appData["langData"]) {
    // Return a React component while axios is requesting languages/api
    return <LoadAnimation />;
  }

  return (
    <StateProvider initialState={appData} reducer={reducer}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Save the Internet</title>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <Router>
        <div className="min-h-screen flex flex-col text-sti">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/demos" component={Demos} />
            <Route exact path="/imprint" component={Imprint} />
            <Route exact path="/privacy" component={Privacy} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
