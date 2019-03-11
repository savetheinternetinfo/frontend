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

import de from "../assets/languages/de.json";
import en from "../assets/languages/en.json";
import es from "../assets/languages/es.json";
import fr from "../assets/languages/fr.json";
import it from "../assets/languages/it.json";
import nl from "../assets/languages/nl.json";

function getLanguageData(lang) {
  switch (lang) {
    case "de":
      return de;

    case "en":
      return en;

    case "es":
      return es;

    case "fr":
      return fr;

    case "it":
      return it;

    case "nl":
      return nl;

    default:
      return en;
  }
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
