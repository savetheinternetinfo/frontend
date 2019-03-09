import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { LanguageContext } from "../contexts/LanguageContext";
// import Button from "./common/Button";
import Icon from "./common/Icon";
import NavIcon from "./common/NavIcon";
import Navbar from "./Navbar";

function Home() {
  const ctx = useContext(LanguageContext);
  return (
    <React.Fragment>
      <div class="flex mb-4">
        <div class="w-full bg-grey h-12">
          <Navbar />
        </div>
      </div>
      <Icon icon="Camera" />
      <NavIcon icon="Camera" route={"test"} />
    </React.Fragment>
  );
}

export default Home;
