import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
// import Button from "./common/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./common/Banner";

function Home() {
  const ctx = useContext(LanguageContext);
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
