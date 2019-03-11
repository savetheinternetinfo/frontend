import React from "react";
import Helmet from "react-helmet";
import Logo from "../assets/favicon.ico";
import { StateProvider } from "../contexts/StateContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Demos from "./Demos";

import languages from "../assets/languages/languages.json";

function getLanguageData(lang) {
  if (languages[lang]) {
    return languages[lang];
  }
  return languages["en"];
}

function App() {
  let initialState = {
    language: navigator.language,
    translation: getLanguageData(navigator.language)
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeLanguage":
        return {
          ...state,
          language: action.newLanguage,
          translation: getLanguageData(action.newLanguage)
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
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
