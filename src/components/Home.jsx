import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
// import Button from "./common/Button";
import Footer from "./Footer";
import Header from "./common/Header";

function Home() {
  const ctx = useContext(LanguageContext);
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
