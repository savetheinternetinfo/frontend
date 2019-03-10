import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
// import Button from "./common/Button";
import Navbar from "./Navbar";
import Banner from "./common/Banner";

function Home() {
  const ctx = useContext(LanguageContext);
  return (
    <React.Fragment>
      <div class="flex mb-4">
        <div class="w-full bg-blue h-auto">
          <Navbar />
          <Banner />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
