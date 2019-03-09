import React, { useContext } from "react";
import Helmet from "react-helmet";
import Logo from "../assets/favicon.ico";

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
      <button
        onClick={() => {
          ctx.language = "de-de";
          console.log(ctx);
        }}
      >
        Example: Change Language to German
      </button>
    </React.Fragment>
  );
}

export default App;
